import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {SvgProps} from 'react-native-svg';

interface Props {
  Icon: FC<SvgProps>;
  onPress(params: any): void;
}

const ButtonIcon = ({Icon, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({});
