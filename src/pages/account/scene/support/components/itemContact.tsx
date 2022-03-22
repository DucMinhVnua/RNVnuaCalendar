import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import icons from '../../../../../constant/icons';
import typos from '../../../../../assets/styles/textStyles';
import colors from '../../../../../assets/styles/colors';
import {moderateScale} from 'react-native-size-matters';
import {SvgProps} from 'react-native-svg';

interface Props {
  label: string;
  nameContact: string;
  IconContact: FC<SvgProps>;
}

const ItemContact = ({
  IconContact = icons.EmailIcon,
  label,
  nameContact,
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapperContact}>
        <IconContact />
        <Text style={styles.contact}>{nameContact}</Text>
      </View>
    </View>
  );
};

export default ItemContact;

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: moderateScale(10),
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  label: {
    ...typos.titleSmall,
    color: colors.description,
  },
  wrapperContact: {
    flexDirection: 'row',
    marginTop: moderateScale(5),
    alignItems: 'center',
  },
  contact: {
    paddingLeft: moderateScale(10),
  },
});
