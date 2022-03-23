import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {NORMAL_PADDING} from '../../../../../assets/styles/scale';
import icons from '../../../../../constant/icons';

/* ===== component ===== */
import ItemInfo from './itemInfo';

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperItemInfo}>
        <ItemInfo
          label="Mã"
          IconInfo={icons.CodeStudentIcon}
          nameInfo="637747"
        />
      </View>
      <View style={styles.wrapperItemInfo}>
        <ItemInfo
          label="Họ và tên"
          IconInfo={icons.UserGrayIcon}
          nameInfo="Nguyễn Đức Minh"
        />
      </View>
      <View style={styles.wrapperItemInfo}>
        <ItemInfo
          label="Ngày sinh"
          IconInfo={icons.CalendarGrayIcon}
          nameInfo="21/11/00"
        />
      </View>
      <View style={styles.wrapperItemInfo}>
        <ItemInfo
          label="Lớp học"
          IconInfo={icons.BookGrayIcon}
          nameInfo="K63ATTT"
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: moderateScale(30),
    paddingHorizontal: NORMAL_PADDING,
  },
  wrapperItemInfo: {
    marginBottom: moderateScale(10),
  },
});
