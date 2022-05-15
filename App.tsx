import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {store} from './src/store';
import {Provider} from 'react-redux';

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
    <Provider store={store}>
      <View style={styles.container}>
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
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
