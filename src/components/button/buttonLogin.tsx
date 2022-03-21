import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';
import {NORMAL_PADDING} from '../../assets/styles/scale';
import typos from '../../assets/styles/textStyles';

interface Props {
  textButton: string;
  backgroundColor?: string;
  onPress(params: any): void;
}

const ButtonLogin = ({
  textButton,
  backgroundColor = colors.colorFull09,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.btn, {backgroundColor}]}>
      <Text style={styles.title}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLogin;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: NORMAL_PADDING,
    borderRadius: 8,
  },
  title: {
    ...typos.bodyLarge,
    color: colors.white,
  },
});
