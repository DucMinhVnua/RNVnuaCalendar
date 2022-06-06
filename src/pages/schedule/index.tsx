import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Alert, ActivityIndicator} from 'react-native';

import colors from '../../assets/styles/colors';
import {NORMAL_PADDING} from '../../assets/styles/scale';
import {
  getListDays,
  getMonday,
  getMondayAfterWeek,
  getMondayBeginWeek,
} from '../../util/time';

// Components
import Header from './components/header';
import Main from './components/main';
import {
  pushDataExtraction,
  pushDataMorningAfternoon,
} from '../../redux/schedule-redux';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-redux';
import {
  convertTextToNumberDay,
  filterDayOfWeekFromData,
  filterMorningAfternoon,
  filterSubjectsDay,
  getLearnWeeksFromListWeek,
} from '../../util/schedule';
import {callApi} from '../../api/lectureSchedule-api';
import {retrieve} from '../../localStorage';
import {_dataExtraction} from '../../constant/localKeys';

const cheerio = require('react-native-cheerio');

const ScheduleScreen = ({responseHTML}: any) => {
  // api
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.schedule.dataExtraction);
  const code = useAppSelector(state => state.login.code);

  async function getHtmlData(params: any) {
    var formData = new FormData();

    formData.append(
      '__EVENTTARGET',
      'ctl00$ContentPlaceHolder1$ctl00$rad_ThuTiet',
    );
    formData.append(
      'ctl00$ContentPlaceHolder1$ctl00$rad_ThuTiet',
      'rad_ThuTiet',
    );

    return await callApi(
      `default.aspx?page=thoikhoabieu&sta=1&id=${params.userId}`,
      'post',
      formData,
      true,
    );
  }

  async function handleGetData(params: any) {
    const htmlData = await getHtmlData(params);
    return htmlData;
  }

  async function handleExtraction(htmlData: any) {
    if (htmlData !== '') {
      if (
        htmlData?.includes(
          `<script language="JavaScript">window.onload=function(){alert('Server đang tải lại dữ liệu. Vui lòng trở lại sau 15 phút!');}</script></form>`,
        )
      ) {
        /// trả về dữ liệu trên local
        const retrieveData = await retrieve(_dataExtraction);
        return retrieveData;
      } else {
        let id = 0;
        let $ = cheerio.load(htmlData);
        let col: any = [];
        let dataConvert: any = [];
        // get many table element
        $('.grid-roll2 > table').each((index: any, elm: any) => {
          $ = cheerio.load(elm);

          // get many td elm in table elm
          $('tbody > tr > td').each(function (i: any, e: any) {
            let textElementTd = $(e).text();

            // DSSV is td element tail
            if (textElementTd.includes('DSSV')) {
              // get td text element helpful
              const dataHelpful = {
                id: id++,
                code: col[0], // mã môn học
                nameSubject: col[1], // tên môn học
                group: col[2], // nhóm môn học
                numberCredit: col[3], // số tín chỉ
                dayOfWeek: convertTextToNumberDay(col[8]), // ngày học trong tuần
                startLearn: +col[9], // tiết bắt đầu
                numberLesson: Number(col[10]), // số tiết học
                room: col[11], // phòng học
                dateLearn: getLearnWeeksFromListWeek('24/01/2022', col[13]), //ngày trong tuần phải học
              };

              dataConvert.push(dataHelpful);
              col = [];
            } else {
              col.push(textElementTd);
            }
          });
        });

        return dataConvert;
      }
    }
  }

  useEffect(() => {
    (async () => {
      const htmlData = await handleGetData(code);

      /// bóc tách dữ liệu
      const dataExtraction = await handleExtraction(htmlData);

      dispatch(pushDataExtraction(dataExtraction));
    })();
  }, []);

  // header
  const [weekDays, setWeekDays] = useState(getListDays(getMonday(new Date())));
  const [moveDate, setMoveDate] = useState(moment());
  const [dateLearn, setDateLearn] = useState();

  useEffect(() => {
    setDateLearn(filterDayOfWeekFromData(data, weekDays[0]));
  }, [weekDays, data]);

  const handleBackPress = useCallback(() => {
    setWeekDays(getListDays(getMondayBeginWeek(weekDays[0])));
  }, [weekDays]);

  const handleNextPress = useCallback(() => {
    setWeekDays(getListDays(getMondayAfterWeek(weekDays[0])));
  }, [weekDays]);

  const handleMoveDate = useCallback(
    dateActive => {
      setMoveDate(dateActive);
      setIndexBtnActive(0);
    },
    [weekDays],
  );

  // main
  const [indexBtnActive, setIndexBtnActive] = useState(0);

  const handleBtnMorning = useCallback(() => {
    setIndexBtnActive(0);
  }, [indexBtnActive]);

  const handleBtnAfternoon = useCallback(() => {
    setIndexBtnActive(1);
  }, [indexBtnActive]);

  // get info display view
  useEffect(() => {
    if (data.length > 0) {
      const dataMorningAfternoon = filterMorningAfternoon(
        filterSubjectsDay(moveDate, data),
      );

      dispatch(pushDataMorningAfternoon(dataMorningAfternoon));
    }
  }, [data, moveDate]);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <>
          {/* lịch học */}
          <Header
            weekDays={weekDays}
            handleBackPress={handleBackPress}
            handleNextPress={handleNextPress}
            handleMoveDate={handleMoveDate}
            moveDate={moveDate}
            dateLearn={dateLearn}
          />

          {/* Danh sách tiết học */}
          <Main
            indexBtnActive={indexBtnActive}
            handleBtnMorning={handleBtnMorning}
            handleBtnAfternoon={handleBtnAfternoon}
          />
        </>
      ) : (
        <View
          style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: NORMAL_PADDING,
    backgroundColor: colors.white,
  },
});

export default ScheduleScreen;
