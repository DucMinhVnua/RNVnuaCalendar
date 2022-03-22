import React from 'react';
import {StyleSheet, View} from 'react-native';

/* ===== components ===== */
import FunctionsAccout from './functionsAccout';
import {moderateVerticalScale} from 'react-native-size-matters';
import icons from '../../../constant/icons';

const Main = () => {
  function handleSupport() {}

  function handleAboutApp() {}

  function handleAsync() {}

  return (
    <View style={styles.wrapperMain}>
      <FunctionsAccout
        IconLeft={icons.PhoneCallingIcon}
        nameFunction="Hỗ trợ"
        onPress={handleSupport}
      />
      <FunctionsAccout
        IconLeft={icons.PythonIcon}
        nameFunction="Về ứng dụng"
        onPress={handleAboutApp}
      />
      <FunctionsAccout
        isNavigate={false}
        IconLeft={icons.VersionIcon}
        nameFunction="Phiên bản"
      />
      <FunctionsAccout
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
