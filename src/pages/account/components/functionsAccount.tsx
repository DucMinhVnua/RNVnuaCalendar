import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import icons from '../../../constant/icons';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../../assets/styles/colors';
import typos from '../../../assets/styles/textStyles';

const FunctionsAccount = ({
  isNavigate = true,
  IconLeft = icons.PhoneCallingIcon,
  nameFunction = 'Hỗ trợ',
  onPress = () => {},
}) => {
  function renderIconNavigate() {
    if (isNavigate) {
      return (
        <View style={styles.wrapperRight}>
          <icons.ArrowRightIcon />
        </View>
      );
    } else {
      return (
        <View style={styles.wrapperRight}>
          <Text>1.0.0</Text>
        </View>
      );
    }
  }

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.wrapperIconLeft}>
        <IconLeft />
      </View>
      <View style={styles.wrapperNameFunction}>
        <Text style={styles.nameFunction}>{nameFunction}</Text>
      </View>
      {renderIconNavigate()}
    </TouchableOpacity>
  );
};

export default FunctionsAccount;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderBottomColor: colors.border,
    borderBottomWidth: moderateScale(1),
    paddingVertical: moderateScale(10),
    alignItems: 'center',
  },
  wrapperIconLeft: {
    marginRight: moderateScale(10),
  },
  wrapperNameFunction: {},
  nameFunction: {
    ...typos.titleSmall,
  },
  wrapperRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
