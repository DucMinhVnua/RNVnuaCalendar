import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';

// components
import Schedule from './schedule';
import {
  getListDays,
  getMonday,
  getMondayAfterWeek,
  getMondayBeginWeek,
} from '../../../util/time';

const Main = () => {
  const [weekDays, setWeekDays] = useState(getListDays(getMonday(moment())));

  function handleBackPress() {
    setWeekDays(getListDays(getMondayBeginWeek(weekDays[0])));
  }

  function handleNextPress() {
    setWeekDays(getListDays(getMondayAfterWeek(weekDays[0])));
  }

  // getListDays trả về 1 mảng gồm tất cả ngày trong tuần dạng moment()
  return (
    <View style={styles.container}>
      <Schedule
        weekDays={weekDays}
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {},
});
