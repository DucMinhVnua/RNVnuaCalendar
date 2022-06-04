import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

/* ===== styles ===== */
import typos from '../../../assets/styles/textStyles';
import colors from '../../../assets/styles/colors';
import {NORMAL_PADDING} from '../../../assets/styles/scale';

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleWelcome}>
        Chào mừng bạn đến với Vnua Calendar
      </Text>
      <Text style={styles.titleNote}>Vui lòng nhấn tham gia ngay xem lịch</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: moderateScale(20),
    alignItems: 'center',
    paddingHorizontal: NORMAL_PADDING,
  },
  titleWelcome: {
    ...typos.h6,
    textAlign: 'center',
  },
  titleNote: {
    marginTop: moderateScale(10),
    ...typos.titleSmall,
    color: colors.description,
  },
});
