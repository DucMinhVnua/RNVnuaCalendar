import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../../assets/styles/colors';
import {NORMAL_PADDING} from '../../../assets/styles/scale';

// components
import ItemNews, {PropsOnPress} from './itemNews';

const Main = ({onPress}: PropsOnPress) => {
  const arrayFake = Array(20).fill(1);

  function renderNews({item}: any) {
    return (
      <View style={styles.wrapperItemNews}>
        <ItemNews onPress={onPress} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={arrayFake}
        keyExtractor={(item, index) => `news + ${index}`}
        renderItem={renderNews}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapper: {},
  wrapperItemNews: {
    paddingHorizontal: NORMAL_PADDING,
    paddingVertical: moderateScale(10),
    borderRadius: 8,
    borderColor: colors.border,
    backgroundColor: colors.white,
    marginBottom: moderateScale(10),
    marginHorizontal: moderateScale(5),

    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 5,
  },
});
