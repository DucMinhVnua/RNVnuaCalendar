import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {moderateScale} from 'react-native-size-matters';
import colors from '../../../assets/styles/colors';
import typos from '../../../assets/styles/textStyles';
import icons from '../../../constant/icons';

const LectureScheduleItem = () => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.wrapperLeft}>
        <Text style={styles.lesson}>Tiết 1</Text>
      </View>
      <View style={styles.wrapperRight}>
        <View style={styles.wrapperInfo}>
          <icons.BookGrayIcon />
          <Text style={styles.content}>Cơ sở dữ liệu</Text>
        </View>
        <View style={styles.wrapperInfo}>
          <icons.RoomScheduleIcon />
          <Text style={styles.content}>B102</Text>
        </View>
      </View>
      <View style={styles.circle}></View>
    </View>
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
