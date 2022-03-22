import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

/* ===== Before rendering any navigation stack ===== */
import {enableScreens} from 'react-native-screens';
enableScreens();

/* ===== Screen component ===== */
import LoginScreen from './src/pages/login';
import WelcomeScreen from './src/pages/welcome';
import AccountScreen from './src/pages/account';
import {SupportScreen} from './src/pages/account/scene';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* <LoginScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <AccountScreen /> */}
      <SupportScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
