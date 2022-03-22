import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Image from 'react-native-scalable-image';

import images from '../../../constant/images';

const ImageBanner = () => {
  return (
    <View style={styles.wrapperImage}>
      {/* <Image
        width={Dimensions.get('window').width}
        source={images.bannerLogin}
      /> */}
      <View style={styles.wrapperLogo}>
        <Image source={images.logoVnua} width={120} />
      </View>
    </View>
  );
};

export default ImageBanner;

const styles = StyleSheet.create({
  wrapperImage: {},
  wrapperLogo: {
    alignItems: 'center',
  },
});
