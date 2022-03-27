import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// components
import Main from './components/main';
import {NORMAL_PADDING} from '../../assets/styles/scale';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../assets/styles/colors';

const NewsScreen = () => {
  function handleClickItemNews() {
    console.log('Click item news');
  }

  return (
    <View style={styles.container}>
      {/* header */}
      {/* main */}
      <View style={styles.wrapperMain}>
        <Main onPress={handleClickItemNews} />
      </View>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapperMain: {
    paddingHorizontal: NORMAL_PADDING - 5,
    paddingVertical: moderateScale(10),
  },
});
