import {StyleSheet, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

/* ===== components ===== */
import FormLogin from './components/formLogin';
import ImageLogo from './components/imageLogo';

const LoginScreen = () => {
  function handleLogin() {
    console.log('login');
  }

  function renderFormLogin() {
    const props = {
      handleLogin,
    };

    return <FormLogin {...props} />;
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageLogo />
        {renderFormLogin()}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
