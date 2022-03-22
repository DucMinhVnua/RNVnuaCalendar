import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import colors from '../../../../assets/styles/colors';
import {NORMAL_PADDING} from '../../../../assets/styles/scale';

/* ===== components ===== */
import Header from './components/header';
import Main from './components/main';

const SupportScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperHeader}>
        <Header />
      </View>
      <View style={styles.wrapperMain}>
        <Main />
      </View>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: NORMAL_PADDING,
  },
  wrapperHeader: {
    marginTop: moderateScale(50),
  },
  wrapperMain: {
    marginTop: moderateScale(30),
  },
});
