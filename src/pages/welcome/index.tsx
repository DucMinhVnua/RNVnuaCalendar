import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Image from 'react-native-scalable-image';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import images from '../../constant/images';

/* ===== components ===== */
import Main from './components/main';
import GroupButton from './components/groupButton';

export interface propsGroupButton {
  handleJoinNow(params: any): void;
  handleLogin(params: any): void;
}

const WelcomeScreen = ({navigation}: any) => {
  /* ===== Đăng nhập bằng MSV ===== */
  function handleJoinNow() {
    navigation.navigate('JoinNow');
  }

  /* ===== Đăng nhập bằng tài khoản mật khẩu ===== */
  // function handleLogin() {
  //   console.log('đến màn đăng nhâp tk, mk');
  // }

  function renderGroupButton() {
    const props: any = {
      handleJoinNow,
      // handleLogin,
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
});
