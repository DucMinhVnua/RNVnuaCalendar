import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AboutAppScreen,
  InfoDetailScreen,
  SupportScreen,
} from '../pages/account/scene';
import AccountScreen from '../pages/account';
import BottomNavigation from './bottomNavigation';

const AccountNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="bottom"
        component={BottomNavigation}
      />
      <Stack.Screen
        options={{
          title: 'Thông tin',
        }}
        name="InfoDetail"
        component={InfoDetailScreen}
      />
      <Stack.Screen
        options={{
          title: 'Hỗ trợ',
        }}
        name="Support"
        component={AboutAppScreen}
      />
      <Stack.Screen
        options={{
          title: 'Về ứng dụng',
        }}
        name="AboutApp"
        component={SupportScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigation;

const styles = StyleSheet.create({});
