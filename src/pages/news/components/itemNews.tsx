import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {URL_BASE} from '../../../api';

import colors from '../../../assets/styles/colors';
import typos from '../../../assets/styles/textStyles';

const ItemNews = ({item}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => Linking.openURL(`${URL_BASE}/${item.link}`)}
      style={styles.wrapper}>
      <Text style={styles.news}>{item.notification}</Text>
      <Text style={styles.timeNews}>
        {item.dateTitle.includes('(') ? item.dateTitle : `(${item.dateTitle})`}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemNews;

const styles = StyleSheet.create({
  wrapper: {},
  news: {
    ...typos.titleSmall,
    lineHeight: verticalScale(25),
  },
  timeNews: {
    ...typos.titleTiny,
    alignSelf: 'flex-end',
    color: colors.colorFull09,
  },
});
