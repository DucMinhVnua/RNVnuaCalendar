import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../../../assets/styles/colors';
import {NORMAL_PADDING} from '../../../../assets/styles/scale';

/* ===== components ===== */
import Header from './components/header';
import Main from './components/main';

const AboutAppScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={styles.wrapperMain}>
        <Main />
      </View>
    </View>
  );
};

export default AboutAppScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapperMain: {
    marginTop: moderateScale(20),
    paddingHorizontal: NORMAL_PADDING,
  },
});
