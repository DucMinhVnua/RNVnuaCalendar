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
import {dataExt, pushDataMorningAfternoon} from '../../redux/schedule-redux';
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
import {_codeApp, _dataExtraction} from '../../constant/localKeys';

const cheerio = require('react-native-cheerio');

const ScheduleScreen = ({responseHTML}: any) => {
  // api
  const dispatch = useAppDispatch();
  // const data = useAppSelector(state => state.schedule.dataExtraction);
  const [data, setData] = useState([]);

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

  async function getHtmlData(code: any) {
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
      `default.aspx?page=thoikhoabieu&sta=1&id=${code}`,
      'post',
      formData,
      true,
    );
  }

  async function handleGetData(code: any) {
    const htmlData = await getHtmlData(code);
    return htmlData;
  }

  async function pushCaptcha(captcha: any, code: any) {
    const formData = new FormData();
    formData.append('ctl00$ContentPlaceHolder1$ctl00$txtCaptcha', '69D5S');
    formData.append(
      'ctl00$ContentPlaceHolder1$ctl00$btnXacNhan',
      'Vào website',
    );
    formData.append(
      '__VIEWSTATE',
      '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',
    );
    formData.append('__VIEWSTATEGENERATOR', 'CA0B0334');
    formData.append('__EVENTTARGET', '');
    formData.append('__EVENTARGUMENT', '');

    await callApi(`/default.aspx`, 'post', formData, true);

    const htmlData = await callApi(
      `default.aspx?page=thoikhoabieu&sta=1&id=${code}`,
      'post',
      '',
    );

    console.log(htmlData);

    if (htmlData !== '') {
      if (
        htmlData?.includes(
          `<script language="JavaScript">window.onload=function(){alert('Server đang tải lại dữ liệu. Vui lòng trở lại sau!');}</script></form>`,
        )
      ) {
        Alert.alert('Server đang bảo trì vui lòng thử lại sau');

        /// trả về dữ liệu trên local
        const retrieveData = await retrieve(_dataExtraction);
        return retrieveData;
      } else {
        let $ = cheerio.load(htmlData);

        // kiểm tra captcha có phải nhập không?
        if ($('#ctl00_ContentPlaceHolder1_ctl00_lblCapcha').html()) {
          const captcha = $(
            '#ctl00_ContentPlaceHolder1_ctl00_lblCapcha',
          ).text();
          pushCaptcha(captcha, code);
        } else {
          let id = 0;

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
                  dateLearn: getLearnWeeksFromListWeek('15/08/2022', col[13]), //ngày trong tuần phải học
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
  }

  async function handleExtraction(htmlData: any, params: any) {
    if (htmlData !== '') {
      if (
        htmlData?.includes(
          `<script language="JavaScript">window.onload=function(){alert('Server đang tải lại dữ liệu. Vui lòng trở lại sau!');}</script></form>`,
        )
      ) {
        Alert.alert('Server đang bảo trì');

        /// trả về dữ liệu trên local
        const retrieveData = await retrieve(_dataExtraction);
        return retrieveData;
      } else {
        let $ = cheerio.load(htmlData);

        // kiểm tra captcha có phải nhập không?
        if ($('#ctl00_ContentPlaceHolder1_ctl00_lblCapcha').html()) {
          const captcha = $(
            '#ctl00_ContentPlaceHolder1_ctl00_lblCapcha',
          ).text();
          return await pushCaptcha(captcha, params);
        } else {
          let id = 0;
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
                  dateLearn: getLearnWeeksFromListWeek('15/08/2022', col[13]), //ngày trong tuần phải học
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
  }

  useEffect(() => {
    (async () => {
      const codeLocal = await retrieve(_codeApp);

      if (codeLocal) {
        console.log('codeLocal', codeLocal);
        const htmlData = await handleGetData(codeLocal);

        /// bóc tách dữ liệu
        const dataExtraction = await handleExtraction(htmlData, codeLocal);

        console.log(dataExtraction);

        setData(dataExtraction);
      }
    })();
  }, []);

  console.log(
    'Data: =================================================================== ',
    data,
  );

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
