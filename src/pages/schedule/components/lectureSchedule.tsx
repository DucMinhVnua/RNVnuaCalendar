import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../../assets/styles/colors';

import LectureScheduleItem from './lectureScheduleItem';

const LectureSchedule = () => {
  function renderLectureScheduleItem({item}) {
    return <LectureScheduleItem />;
  }

  const dataFake = Array(5).fill(1);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingLeft: moderateScale(16),
        }}
        data={dataFake}
        renderItem={renderLectureScheduleItem}
        keyExtractor={(item, index) => `schedule + ${index}`}
      />
    </View>
  );
};

export default React.memo(LectureSchedule);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(-16),
  },
});
