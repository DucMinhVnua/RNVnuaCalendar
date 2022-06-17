import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {NORMAL_PADDING} from '../../../../../assets/styles/scale';
import icons from '../../../../../constant/icons';

/* ===== component ===== */
import ItemInfo from './itemInfo';

const Main = ({data}: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperItemInfo}>
          <ItemInfo
            label="Mã"
            IconInfo={icons.CodeStudentIcon}
            nameInfo={data?.code}
          />
        </View>
        <View style={styles.wrapperItemInfo}>
          <ItemInfo
            label="Họ và tên"
            IconInfo={icons.UserGrayIcon}
            nameInfo={data?.name.trim()}
          />
        </View>
        {data?.birthDay && (
          <View style={styles.wrapperItemInfo}>
            <ItemInfo
              label="Ngày sinh"
              IconInfo={icons.CalendarGrayIcon}
              nameInfo={data?.birthDay}
            />
          </View>
        )}
        {data?.myClass && (
          <View style={styles.wrapperItemInfo}>
            <ItemInfo
              label="Lớp học"
              IconInfo={icons.BookGrayIcon}
              nameInfo={data?.myClass}
            />
          </View>
        )}
      </View>
    </ScrollView>
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
