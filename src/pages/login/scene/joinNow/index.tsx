import {StyleSheet, View} from 'react-native';
import React from 'react';

/* ===== components ===== */
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import {moderateScale} from 'react-native-size-matters';
import {NORMAL_PADDING} from '../../../../assets/styles/scale';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const JoinNowScreen = () => {
  function handleLogin() {}

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.wrapperHeader}>
        <Header />
      </View>
      <View style={styles.wrapperMain}>
        <Main />
      </View>
      <View style={styles.wrapperFooter}>
        <Footer handleLogin={handleLogin} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default JoinNowScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  wrapperHeader: {
    marginTop: moderateScale(50),
  },
  wrapperMain: {
    marginTop: moderateScale(30),
    paddingHorizontal: NORMAL_PADDING,
  },
  wrapperFooter: {
    flex: 1,
    marginBottom: moderateScale(20),
    paddingHorizontal: NORMAL_PADDING,
  },
});
