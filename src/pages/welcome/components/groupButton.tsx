import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

/* ===== componets ===== */
import {ButtonLogin} from '../../../components';

/* ===== styles ===== */
import colors from '../../../assets/styles/colors';
import {NORMAL_PADDING} from '../../../assets/styles/scale';
import {propsGroupButton} from '..';

interface Props {
  btnGroups: propsGroupButton;
}

const GroupButton = ({btnGroups}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperBtnFirst}>
        <ButtonLogin
          textButton="Tham gia ngay"
          onPress={btnGroups.handleJoinNow}
          backgroundColor={colors.colorFull10}
        />
      </View>
      {/* <ButtonLogin textButton="Đăng nhập" onPress={btnGroups.handleLogin} /> */}
    </View>
  );
};

export default GroupButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: NORMAL_PADDING,
    bottom: 0,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: moderateScale(10),
  },
  wrapperBtnFirst: {
    marginBottom: NORMAL_PADDING,
  },
});
