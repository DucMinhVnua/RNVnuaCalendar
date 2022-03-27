import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import colors from '../../../assets/styles/colors';
import typos from '../../../assets/styles/textStyles';

export interface PropsOnPress {
  onPress(params: any): void;
}

const ItemNews = ({onPress}: PropsOnPress) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.wrapper}>
      <Text style={styles.news}>
        Thông báo về việc xét và công nhận tốt nghiệp Đại học, Cao đẳng hệ chính
        quy đợt 30/03/2022
      </Text>
      <Text style={styles.timeNews}>(23/03/2022)</Text>
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
    color: colors.description,
    alignSelf: 'flex-end',
    color: colors.colorFull09,
  },
});
