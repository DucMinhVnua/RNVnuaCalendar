import moment from 'moment';
import React, {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';

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

const ScheduleScreen = () => {
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
