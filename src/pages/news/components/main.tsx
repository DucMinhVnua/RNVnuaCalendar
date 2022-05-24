import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../../assets/styles/colors';
import {NORMAL_PADDING} from '../../../assets/styles/scale';
import {useAppSelector} from '../../../hooks/hooks-redux';

// components
import ItemNews from './itemNews';

const Main = () => {
  const dataExtraction = useAppSelector(state => state.news.dataExtraction);

  function renderNews({item}: any) {
    return (
      <View style={styles.wrapperItemNews}>
        <ItemNews item={item} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: moderateScale(30),
              fontSize: 20,
              fontWeight: '700',
              textTransform: 'uppercase',
            }}>
            Thông báo học viện
          </Text>
        }
        showsVerticalScrollIndicator={false}
        data={dataExtraction}
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
