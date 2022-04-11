import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../assets/styles/colors';
import {NORMAL_PADDING} from '../../assets/styles/scale';
import {
  getListDays,
  getMonday,
  getMondayAfterWeek,
  getMondayBeginWeek,
} from '../../util/time';
import {postAPI} from '../../api/lectureSchedule-api';

// Components
import Header from './components/header';
import Main from './components/main';
import {getLearnWeeks} from '../../util/schedule';

const cheerio = require('react-native-cheerio');

const ScheduleScreen = () => {
  // api
  const [dataApi, setDataApi] = useState();

  useEffect(() => {
    handleGetData();

    getLearnWeeks();
  }, []);

  async function handleGetData() {
    const formData = customFormData();

    const response = await getData(formData);

    if (response) {
      dataExtraction(response);
    }
  }

  function customFormData() {
    let formData = new FormData();
    formData.append(
      '__EVENTTARGET',
      'ctl00$ContentPlaceHolder1$ctl00$rad_ThuTiet',
    );
    formData.append(
      'ctl00$ContentPlaceHolder1$ctl00$rad_ThuTiet',
      'rad_ThuTiet',
    );

    return formData;
  }

  async function getData(body: any) {
    return await postAPI(
      'default.aspx?page=thoikhoabieu&sta=1&id=637747',
      body,
    );
  }

  function dataExtraction(data: any) {
    // console.log(data);
  }

  // header
  const [weekDays, setWeekDays] = useState(getListDays(getMonday(moment())));
  const [moveDate, setMoveDate] = useState();

  const handleBackPress = useCallback(() => {
    setWeekDays(getListDays(getMondayBeginWeek(weekDays[0])));
  }, [weekDays]);

  const handleMoveDate = useCallback(
    dateActive => {
      setMoveDate(dateActive);
    },
    [weekDays],
  );

  const handleNextPress = useCallback(() => {
    setWeekDays(getListDays(getMondayAfterWeek(weekDays[0])));
  }, [weekDays]);

  // main
  const [indexBtnActive, setIndexBtnActive] = useState(0);

  const handleBtnMorning = useCallback(() => {
    setIndexBtnActive(0);
  }, [indexBtnActive]);

  const handleBtnAfternoon = useCallback(() => {
    setIndexBtnActive(1);
  }, [indexBtnActive]);

  return (
    <View style={styles.container}>
      {/* Lịch học */}
      <Header
        weekDays={weekDays}
        handleBackPress={handleBackPress}
        handleNextPress={handleNextPress}
        handleMoveDate={handleMoveDate}
        moveDate={moveDate}
      />

      {/* Danh sách tiết học */}
      <Main
        indexBtnActive={indexBtnActive}
        handleBtnMorning={handleBtnMorning}
        handleBtnAfternoon={handleBtnAfternoon}
      />
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
