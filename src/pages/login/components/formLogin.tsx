import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import icons from '../../../constant/icons';
import {moderateScale} from 'react-native-size-matters';

/* ===== styles ===== */
import {NORMAL_PADDING} from '../../../assets/styles/scale';
import typos from '../../../assets/styles/textStyles';
import colors from '../../../assets/styles/colors';
import {ButtonLogin} from '../../../components';

/* ===== components ===== */

interface Props {
  handleLogin(params: any): void;
}

const FormLogin = ({handleLogin}: Props) => {
  /* ===== Form này hiển thị khi người dùng nhấn vào tham gia ngay ===== */
  function renderFormJoinNow() {
    return (
      <View style={styles.wrapperForm}>
        <Text style={styles.label}>Nhập mã</Text>
        <View style={styles.wrapperInput}>
          <View style={styles.wrapperIcon}>
            <icons.UserIcon />
          </View>
          <TextInput placeholder="Nhập mã" style={styles.input} />
        </View>
      </View>
    );
  }

  /* ===== Form này hiển thị khi người dùng nhấn vào đăng nhập ===== */
  function renderFormLogin() {
    return (
      <View>
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
  }

  return (
    <View style={styles.container}>
      {/* {renderFormJoinNow()} */}
      {renderFormLogin()}
      <View style={styles.wrapperBtn}>
        <ButtonLogin
          textButton="Tham gia ngay"
          backgroundColor={colors.colorFull03}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(30),
    padding: NORMAL_PADDING,
    flex: 1,
  },
  wrapperForm: {
    paddingTop: moderateScale(10),
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
  wrapperBtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
