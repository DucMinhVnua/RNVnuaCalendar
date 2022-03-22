import {StyleSheet, View} from 'react-native';
import React from 'react';

import {NORMAL_PADDING} from '../../../../../assets/styles/scale';
import icons from '../../../../../constant/icons';

/* ===== component ===== */
import ItemContact from './itemContact';

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperItemContact}>
        <ItemContact
          IconContact={icons.EmailIcon}
          nameContact="support@gmail.com"
          label="Email"
        />
      </View>
      <View style={styles.wrapperItemContact}>
        <ItemContact
          IconContact={icons.PhoneIcon}
          nameContact="19001006"
          label="Hotline"
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapper: {},
  wrapperItemContact: {
    paddingBottom: NORMAL_PADDING,
  },
});
