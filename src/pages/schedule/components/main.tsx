import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// components
import Schedule from './schedule';

const Main = () => {
  function handleBackPress() {}

  function handleNextPress() {}

  return (
    <View style={styles.container}>
      <Schedule
        weekDays={[]}
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {},
});
