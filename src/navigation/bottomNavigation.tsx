import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsScreen from '../pages/news';
import ScheduleScreen from '../pages/schedule';
import AccountScreen from '../pages/account';
import icons from '../constant/icons';
import {moderateScale} from 'react-native-size-matters';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#4186df',
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <icons.BellTabIcon width={25} height={25} />
              <Text
                style={{
                  paddingTop: focused ? 6 : 3,
                  color: 'white',
                  fontSize: focused ? 14 : 12,
                }}>
                Bản tin
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <icons.CalendarTabIcon width={25} height={25} />
              <Text
                style={{
                  paddingTop: focused ? 6 : 3,
                  color: 'white',
                  fontSize: focused ? 14 : 12,
                }}>
                Lịch
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <icons.UserTabIcon width={25} height={25} />
              <Text
                style={{
                  paddingTop: focused ? 6 : 3,
                  color: 'white',
                  fontSize: focused ? 14 : 12,
                }}>
                Tài khoản
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
