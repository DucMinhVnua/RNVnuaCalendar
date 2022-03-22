import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NORMAL_PADDING} from '../../../../../assets/styles/scale';
import typos from '../../../../../assets/styles/textStyles';
import colors from '../../../../../assets/styles/colors';

const Header = () => {
  return (
    <Text style={styles.titleContact}>
      Để nhanh chóng hỗ trợ các bạn về sản phẩm. Vui lòng chọn các kênh liên hệ
      dưới đây.
    </Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  titleContact: {
    textAlign: 'center',
    paddingHorizontal: NORMAL_PADDING,
    ...typos.titleSmall,
    color: colors.description,
  },
});
