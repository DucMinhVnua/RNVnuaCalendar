import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import icons from '../../../../../constant/icons';
import typos from '../../../../../assets/styles/textStyles';
import colors from '../../../../../assets/styles/colors';
import {NORMAL_PADDING} from '../../../../../assets/styles/scale';

const Main = ({value, onChangeText}: any) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Nhập mã</Text>
      <View style={styles.wrapperInput}>
        <View style={styles.wrapperIcon}>
          <icons.UserIcon />
        </View>
        <TextInput
          placeholder="Nhập mã"
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapper: {},
  label: {
    ...typos.titleSmall,
    color: colors.description,
  },
  wrapperInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  wrapperIcon: {
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: NORMAL_PADDING,
  },
});
