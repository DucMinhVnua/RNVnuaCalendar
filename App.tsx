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
import BottomNavigation from './src/navigation/bottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import AccountNavigation from './src/navigation/accountNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
          {/* <WelcomeScreen /> */}
          {/* <JoinNowScreen /> */}
          {/* <LoginScreen /> */}
          <AccountNavigation />
        </View>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default App;
