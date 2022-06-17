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

const ScheduleScreen = ({responseHTML}: any) => {
  // api
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.schedule.dataExtraction);

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
