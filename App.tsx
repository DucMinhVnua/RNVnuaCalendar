import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

/* ===== Before rendering any navigation stack ===== */
import {enableScreens} from 'react-native-screens';
enableScreens();

/* ===== Screen component ===== */
import LoginScreen from './src/pages/login';
import WelcomeScreen from './src/pages/welcome';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LoginScreen />
      {/* <WelcomeScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
