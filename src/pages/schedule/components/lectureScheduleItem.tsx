import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {moderateScale} from 'react-native-size-matters';
import colors from '../../../assets/styles/colors';
import typos from '../../../assets/styles/textStyles';
import icons from '../../../constant/icons';

const LectureScheduleItem = ({item, index, indexBtnActive}: any) => {
  // trường hợp nhiều môn học trong 1 tiết
  if (item.length > 1) {
    return (
      <View style={styles.containerItem}>
        <View style={styles.wrapperLeft}>
          <Text style={styles.lesson}>
            Tiết {indexBtnActive === 0 ? index + 1 : index + 6}
          </Text>
        </View>
        <View style={{flexGrow: 1}}>
          {item.map((subjects: any, index: any) => (
            <React.Fragment key={index}>
              <View style={[styles.wrapperRight, {marginBottom: 5}]}>
                <View style={styles.wrapperInfo}>
                  <icons.BookGrayIcon />
                  <Text style={styles.content}>{subjects.nameSubject}</Text>
                </View>
                <View style={styles.wrapperInfo}>
                  <icons.RoomScheduleIcon />
                  <Text style={styles.content}>{subjects.room}</Text>
                </View>
              </View>
            </React.Fragment>
          ))}
        </View>
        <View style={styles.circle}></View>
      </View>
    );
  }

  return (
    <>
      {item.map((subjects: any, indexItem: any) => (
        <View style={styles.containerItem} key={indexItem}>
          <View style={styles.wrapperLeft}>
            <Text style={styles.lesson}>
              Tiết {indexBtnActive === 0 ? index + 1 : index + 6}
            </Text>
          </View>
          <View style={styles.wrapperRight}>
            <View style={styles.wrapperInfo}>
              <icons.BookGrayIcon />
              <Text style={styles.content}>{subjects.nameSubject}</Text>
            </View>
            <View style={styles.wrapperInfo}>
              <icons.RoomScheduleIcon />
              <Text style={styles.content}>{subjects.room}</Text>
            </View>
          </View>
          <View style={styles.circle}></View>
        </View>
      ))}
    </>
  );
};

export default LectureScheduleItem;

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.border,
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScale(20),
  },
  wrapperLeft: {
    paddingRight: moderateScale(30),
    minWidth: moderateScale(80),
  },
  lesson: {
    ...typos.titleSmall,
  },
  wrapperRight: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: moderateScale(16),

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  wrapperInfo: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingLeft: moderateScale(10),
  },
  circle: {
    width: moderateScale(10),
    height: moderateScale(10),
    backgroundColor: colors.colorFull11,
    borderRadius: 50,
    position: 'absolute',
    left: moderateScale(-5),
  },
});
