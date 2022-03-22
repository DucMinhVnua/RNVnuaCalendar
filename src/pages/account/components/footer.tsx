import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {ButtonLogin} from '../../../components';

interface Props {
  onPress(params: any): void;
}

const Footer = ({onPress}: Props) => {
  return (
    <View style={styles.wrapperFooter}>
      <ButtonLogin textButton="Đăng xuất" onPress={onPress} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  wrapperFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
});
