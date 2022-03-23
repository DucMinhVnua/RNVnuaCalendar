import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import icons from '../../../../../constant/icons';
import typos from '../../../../../assets/styles/textStyles';
import colors from '../../../../../assets/styles/colors';
import {NORMAL_PADDING} from '../../../../../assets/styles/scale';
import {moderateScale} from 'react-native-size-matters';

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperForm}>
        <Text style={styles.label}>Nhập tài khoản</Text>
        <View style={styles.wrapperInput}>
          <View style={styles.wrapperIcon}>
            <icons.UserIcon />
          </View>
          <TextInput placeholder="Tài khoản" style={styles.input} />
        </View>
      </View>
      <View style={styles.wrapperForm}>
        <Text style={styles.label}>Nhập mật khảu</Text>
        <View style={styles.wrapperInput}>
          <View style={styles.wrapperIcon}>
            <icons.LockIcon />
          </View>
          <TextInput
            placeholder="Mật khẩu"
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapper: {},
  wrapperForm: {
    marginTop: moderateScale(20),
  },
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
