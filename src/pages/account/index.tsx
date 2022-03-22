import {StyleSheet, View} from 'react-native';
import React from 'react';

import colors from '../../assets/styles/colors';

/* ===== components ===== */
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const AccountScreen = () => {
  function handleLogout() {}

  return (
    <View style={styles.container}>
      {/* header */}
      <Header name="Nguyễn Đức Minh" major="K63ATTT" />

      {/* main */}
      <Main />

      {/* footer */}
      <Footer onPress={handleLogout} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
