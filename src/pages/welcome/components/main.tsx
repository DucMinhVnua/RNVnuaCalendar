import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

/* ===== styles ===== */
import typos from '../../../assets/styles/textStyles';
import colors from '../../../assets/styles/colors';
import {NORMAL_PADDING, scaleModerate} from '../../../assets/styles/scale';

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleWelcome}>
        Chào mừng bạn đến với Vnua Calendar
      </Text>
      <Text style={styles.titleNote}>
        Bạn có thể đăng nhập hoặc vào xem lịch trực tiếp
      </Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: scaleModerate(20),
    alignItems: 'center',
    paddingHorizontal: NORMAL_PADDING,
  },
  titleWelcome: {
    ...typos.h6,
    textAlign: 'center',
  },
  titleNote: {
    marginTop: scaleModerate(10),
    ...typos.titleSmall,
    color: colors.description,
  },
});
