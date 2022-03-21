import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Image from 'react-native-scalable-image';

import images from '../../constant/images';

/* ===== styles ===== */
import {scaleVertical} from '../../assets/styles/scale';

/* ===== components ===== */
import Main from './components/main';
import GroupButton from './components/groupButton';

export interface propsGroupButton {
  handleJoinNow(params: any): void;
  handleLogin(params: any): void;
}

const WelcomeScreen = () => {
  /* ===== Đăng nhập bằng MSV ===== */
  function handleJoinNow() {
    console.log('đến màn đăng nhập msv');
  }

  /* ===== Đăng nhập bằng tài khoản mật khẩu ===== */
  function handleLogin() {
    console.log('đến màn đăng nhâp tk, mk');
  }

  function renderGroupButton() {
    const props: propsGroupButton = {
      handleJoinNow,
      handleLogin,
    };

    return <GroupButton btnGroups={props} />;
  }

  return (
    <View style={styles.container}>
      <Image source={images.welcome} width={Dimensions.get('window').width} />
      <Main />
      {renderGroupButton()}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: scaleVertical(300),
  },
});
