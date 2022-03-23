import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Image from 'react-native-scalable-image';
import images from '../../../../../constant/images';

const Header = () => {
  return (
    <Image
      source={images.bannerInfoDetail}
      width={Dimensions.get('window').width}
    />
  );
};

export default Header;

const styles = StyleSheet.create({});
