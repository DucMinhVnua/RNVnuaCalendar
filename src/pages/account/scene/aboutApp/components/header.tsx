import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Image from 'react-native-scalable-image';
import LinearGradient from 'react-native-linear-gradient';
import {verticalScale} from 'react-native-size-matters';

import images from '../../../../../constant/images';

const Header = () => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}
      colors={['#00d4ff', '#0ab3f6']}
      style={styles.wrapper}>
      <Image
        source={images.bannerAboutApp}
        width={Dimensions.get('window').width}
      />
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    minHeight: verticalScale(300),
    justifyContent: 'flex-end',
  },
});
