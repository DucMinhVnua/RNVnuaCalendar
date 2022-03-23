import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import typos from '../../../../../assets/styles/textStyles';
import colors from '../../../../../assets/styles/colors';

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textContent}>
        Vnua Calendar là ứng dụng xem lịch, xem thông tin mới nhất trên trang
        đào tạo của Học viện Nông nghiệp Việt Nam.
      </Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapper: {},
  textContent: {
    ...typos.titleSmall,
    fontWeight: '500',
    color: colors.bodyText,
  },
});
