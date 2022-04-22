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
import {
  pushDataExtraction,
  fetchDataHTML,
  pushDataMorningAfternoon,
} from '../../redux/schedule-redux';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-redux';
import {filterMorningAfternoon, filterSubjectsDay} from '../../util/schedule';

const ScheduleScreen = () => {
  // api
  const dispatch = useAppDispatch();
  const responseHTML = useAppSelector(state => state.schedule.responseHTML);
  const data = useAppSelector(state => state.schedule.dataExtraction);

  // get data
  useEffect(() => {
    handleGetData();
  }, []);

  function handleGetData() {
    const formData = customFormData();

    const params = {
      userId: '637747',
      body: formData,
    };

    dispatch(fetchDataHTML(params));
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

  useEffect(() => {
    if (responseHTML) {
      extraction(responseHTML);
    }
  }, [responseHTML]);

  function extraction(data: any) {
    dispatch(pushDataExtraction(data));
  }

  useAppSelector(state => state.schedule.dataExtraction);

  // header
  const [weekDays, setWeekDays] = useState(getListDays(getMonday(moment())));
  const [moveDate, setMoveDate] = useState(moment());

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
