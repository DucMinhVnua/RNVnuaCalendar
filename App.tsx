import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

/* ===== Before rendering any navigation stack ===== */
import {enableScreens} from 'react-native-screens';
enableScreens();

/* ===== Screen component ===== */
import WelcomeScreen from './src/pages/welcome';
import AccountScreen from './src/pages/account';
import {
  AboutAppScreen,
  InfoDetailScreen,
  SupportScreen,
} from './src/pages/account/scene';
import {JoinNowScreen, LoginScreen} from './src/pages/login';
import NewsScreen from './src/pages/news';
import ScheduleScreen from './src/pages/schedule';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* <WelcomeScreen /> */}
      {/* <AccountScreen /> */}
      {/* <SupportScreen /> */}
      {/* <AboutAppScreen /> */}
      {/* <InfoDetailScreen /> */}
      {/* <JoinNowScreen /> */}
      {/* <LoginScreen /> */}
      {/* <NewsScreen /> */}
      <ScheduleScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
