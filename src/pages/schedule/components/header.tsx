import React, {memo} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import {NORMAL_PADDING} from '../../../assets/styles/scale';
import typos from '../../../assets/styles/textStyles';
import Schedule from './schedule';

const Header = ({
  weekDays,
  handleBackPress,
  handleNextPress,
  handleMoveDate,
  moveDate,
}: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.wrapperDateTitle}>
        <Text style={styles.date}>22</Text>
        <Text style={styles.timePicker}>Thứ 4/thg 11/2021</Text>
      </View>

      <Schedule
        weekDays={weekDays}
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
        onPress={handleMoveDate}
        moveDate={moveDate}
      />
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    
  },
  wrapperDateTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(10)
  },
  date: {
    paddingRight: NORMAL_PADDING,
    ...typos.h3,
  },
  timePicker: {},
});
