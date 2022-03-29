import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NORMAL_PADDING} from '../../../assets/styles/scale';
import typos from '../../../assets/styles/textStyles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperDateTitle}>
        <Text style={styles.date}>22</Text>
        <Text style={styles.timePicker}>Thứ 4/thg 11/2021</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
  wrapperDateTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    paddingRight: NORMAL_PADDING,
    ...typos.h3,
  },
  timePicker: {},
});
