import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {moderateScale} from 'react-native-size-matters';
import typos from '../assets/styles/textStyles';

const InfoBottomLine = ({nameInfo, Icon, label}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapperInfo}>
        {Icon}
        <Text style={{paddingLeft: moderateScale(10)}}>{nameInfo}</Text>
      </View>
    </View>
  );
};

export default InfoBottomLine;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  label: {
    ...typos.titleSmall,
  },
  wrapperInfo: {
    paddingBottom: moderateScale(10),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});
