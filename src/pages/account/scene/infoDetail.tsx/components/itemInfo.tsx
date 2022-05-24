import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {SvgProps} from 'react-native-svg';

import typos from '../../../../../assets/styles/textStyles';
import colors from '../../../../../assets/styles/colors';

interface Props {
  label: string;
  nameInfo: string;
  IconInfo: FC<SvgProps>;
}

const ItemInfo = ({label, IconInfo, nameInfo}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapperInfo}>
        <View style={{width: 20}}>
          <IconInfo />
        </View>
        <Text style={styles.nameInfo}>{nameInfo}</Text>
      </View>
    </View>
  );
};

export default ItemInfo;

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: moderateScale(5),
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  label: {
    ...typos.titleSmall,
    color: colors.description,
  },
  wrapperInfo: {
    flexDirection: 'row',
    marginTop: moderateScale(5),
    alignItems: 'center',
  },
  nameInfo: {
    paddingLeft: moderateScale(10),
  },
});
