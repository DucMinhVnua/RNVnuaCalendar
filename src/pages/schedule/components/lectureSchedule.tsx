import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import images from '../../../constant/images';

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

  return (
    <View style={styles.container}>
      {data ? (
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
      ) : (
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: moderateScale(50),
          }}>
          <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: 'center',
            }}
            source={images.khongCoLichHoc}
          />
        </View>
      )}
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
