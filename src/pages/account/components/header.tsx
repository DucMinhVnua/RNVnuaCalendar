import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Image from 'react-native-scalable-image';

import icons from '../../../constant/icons';
import images from '../../../constant/images';
import {NORMAL_PADDING} from '../../../assets/styles/scale';
import {scale} from 'react-native-size-matters';
import colors from '../../../assets/styles/colors';
import typos from '../../../assets/styles/textStyles';

const Header = ({data, navigation}: any) => {
  return (
    <View style={styles.wrapperHeader}>
      <Image
        source={images.bannerAccount}
        width={Dimensions.get('window').width}
      />
      <View style={styles.wrapperInfo}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('InfoDetail', {
              data: data,
            });
          }}
          style={styles.wrapperName}
          activeOpacity={0.8}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.wrapperIconName}>
            <icons.DoubleArrowRightIcon />
          </View>
        </TouchableOpacity>
        <Text style={styles.major}>{data.myClass}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapperHeader: {
    marginBottom: scale(50),
  },
  wrapperInfo: {
    position: 'absolute',
    bottom: scale(-30),
    right: 0,
    left: 0,
    backgroundColor: colors.white,
    padding: NORMAL_PADDING,
    marginHorizontal: scale(20),
    borderRadius: scale(8),
    alignItems: 'center',

    /* ===== shadow ===== */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wrapperName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    ...typos.titleLarge,
  },
  wrapperIconName: {
    position: 'absolute',
    right: scale(-30),
  },
  major: {
    ...typos.titleTiny,
    color: colors.description,
    marginTop: scale(5),
  },
});
