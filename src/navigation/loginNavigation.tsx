import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../pages/welcome';
import {JoinNowScreen} from '../pages/login';

const LoginNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="JoinNow"
        component={JoinNowScreen}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigation;

const styles = StyleSheet.create({});
