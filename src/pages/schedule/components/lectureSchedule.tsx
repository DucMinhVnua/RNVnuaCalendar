import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {convertSubjectSame} from '../../../util/schedule';

import LectureScheduleItem from './lectureScheduleItem';

const LectureSchedule = ({data, indexBtnActive}: any) => {
  const [dataSubject, setDataSubject] = useState({});

  useEffect(() => {
    if (data) {
      setDataSubject(convertSubjectSame(data));
    }
  }, [data]);

  function renderLectureScheduleItem({item, index}: any) {
    return (
      <LectureScheduleItem
        item={item}
        index={index}
        indexBtnActive={indexBtnActive}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        contentContainerStyle={{
          paddingLeft: moderateScale(16),
        }}
        data={Object.values(dataSubject) || []}
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
