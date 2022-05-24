import React from 'react';
import {StyleSheet, View} from 'react-native';

/* ===== components ===== */
import FunctionsAccount from './functionsAccount';
import {moderateVerticalScale} from 'react-native-size-matters';
import icons from '../../../constant/icons';

const Main = ({navigation}: any) => {
  function handleSupport() {
    navigation.navigate('Support');
  }

  function handleAboutApp() {
    navigation.navigate('AboutApp');
  }

  function handleAsync() {}

  return (
    <View style={styles.wrapperMain}>
      <FunctionsAccount
        IconLeft={icons.PhoneCallingIcon}
        nameFunction="Hỗ trợ"
        onPress={handleSupport}
      />
      <FunctionsAccount
        IconLeft={icons.PythonIcon}
        nameFunction="Về ứng dụng"
        onPress={handleAboutApp}
      />
      <FunctionsAccount
        isNavigate={false}
        IconLeft={icons.VersionIcon}
        nameFunction="Phiên bản"
      />
      <FunctionsAccount
        IconLeft={icons.AsyncIcon}
        nameFunction="Đồng bộ"
        onPress={handleAsync}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapperMain: {
    margin: moderateVerticalScale(20),
  },
});
