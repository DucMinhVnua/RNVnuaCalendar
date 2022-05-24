import {StyleSheet, View} from 'react-native';
import React from 'react';

import colors from '../../../../assets/styles/colors';
import icons from '../../../../constant/icons';
import {NORMAL_PADDING} from '../../../../assets/styles/scale';
import {moderateScale} from 'react-native-size-matters';

/* ===== component ===== */
import ItemInfo from './components/itemInfo';
import Header from './components/header';
import Main from './components/main';

const InfoDetailScreen = ({navigation, route}: any) => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <Main data={route.params.data} />
    </View>
  );
};

export default InfoDetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
