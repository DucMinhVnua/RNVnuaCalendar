import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ButtonLogin} from '../../../../../components';

interface Props {
  handleLogin(params: any): void;
}

const Footer = ({handleLogin}: Props) => {
  return (
    <View style={styles.wrapper}>
      <ButtonLogin textButton="Tham gia ngay" onPress={handleLogin} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
