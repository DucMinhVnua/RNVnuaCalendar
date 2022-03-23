import {StyleSheet, View} from 'react-native';
import React from 'react';
import Image from 'react-native-scalable-image';
import {scale} from 'react-native-size-matters';

import images from '../../../constant/images';

const ImageLogo = () => {
  return (
    <View style={styles.wrapperLogo}>
      <Image source={images.logoVnua} width={120} />
    </View>
  );
};

export default ImageLogo;

const styles = StyleSheet.create({
  wrapperLogo: {
    alignItems: 'center',
  },
});
