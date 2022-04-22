import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import LectureScheduleItem from './lectureScheduleItem';

const LectureSchedule = ({data, indexBtnActive}: any) => {
  function renderLectureScheduleItem({item}: any) {
    return <LectureScheduleItem item={item} indexBtnActive={indexBtnActive} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingLeft: moderateScale(16),
        }}
        data={data}
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
