import React from 'react';
import {View, StyleSheet} from 'react-native';
import {store} from './src/store';
import {Provider} from 'react-redux';

/* ===== Before rendering any navigation stack ===== */
import {enableScreens} from 'react-native-screens';
enableScreens();

/* ===== Screen component ===== */
import {NavigationContainer} from '@react-navigation/native';
import AccountNavigation from './src/navigation/accountNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
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
