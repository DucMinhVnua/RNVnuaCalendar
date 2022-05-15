import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import LectureScheduleItem from './lectureScheduleItem';

const LectureSchedule = ({data, indexBtnActive}: any) => {
  function renderLectureScheduleItem({item, index}: any) {
    return (
      <>
        {item.length > 0 && (
          <LectureScheduleItem
            item={item}
            index={index}
            indexBtnActive={indexBtnActive}
          />
        )}
      </>
    );
  }

  console.log(data);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingLeft: moderateScale(16),
        }}
        data={
          indexBtnActive === 0
            ? Object.values(data || {}).slice(0, 5)
            : Object.values(data || {}).slice(5)
        }
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
