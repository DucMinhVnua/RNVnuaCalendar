import React from 'react';
import {View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import colors from '../../assets/styles/colors';
import {NORMAL_PADDING} from '../../assets/styles/scale';

// Components
import Header from './components/header';
import Main from './components/main';

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <Header />
      </View>
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: NORMAL_PADDING,
    backgroundColor: colors.white,
  },
  wrapperHeader: {
    paddingVertical: moderateScale(10),
  },
});

export default ScheduleScreen;
