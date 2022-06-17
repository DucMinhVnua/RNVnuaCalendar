import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Image from 'react-native-scalable-image';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import images from '../../constant/images';

/* ===== components ===== */
import Main from './components/main';
import GroupButton from './components/groupButton';
import {retrieve, storeData} from '../../localStorage';
import {_firstApp} from '../../constant/localKeys';

export interface propsGroupButton {
  handleJoinNow(params: any): void;
  handleLogin(params: any): void;
}

const WelcomeScreen = ({navigation}: any) => {
  const [isLoading, setLoading] = useState(true);

  useLayoutEffect(() => {
    (async () => {
      const isFirstApp = await retrieve(_firstApp);

      if (isFirstApp === true) {
        navigation.navigate('JoinNow');
        // navigation.navigate('bottom');
      } else {
        setLoading(false);
      }
    })();
  }, []);

  useLayoutEffect(() => {
    (async () => {
      await storeData(_firstApp, true);
    })();
  }, []);

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
    <>
      {!isLoading ? (
        <View style={styles.container}>
          <Image
            source={images.welcome}
            width={Dimensions.get('window').width}
          />
          <Main />
          {renderGroupButton()}
        </View>
      ) : (
        <View
          style={{alignItems: 'center', justifyContent: 'center', flexGrow: 1}}>
          <ActivityIndicator />
        </View>
      )}
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
