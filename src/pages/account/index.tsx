import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import colors from '../../assets/styles/colors';

/* ===== components ===== */
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import {pushDataExtraction} from '../../redux/account-redux';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-redux';
import {removeValue} from '../../localStorage';
import {_dataExtraction} from '../../constant/localKeys';

const AccountScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const responseHTML = useAppSelector(state => state.account.responseHTML);
  const data = useAppSelector(state => state.account.dataExtraction);

  useEffect(() => {
    if (responseHTML) {
      dispatch(pushDataExtraction(responseHTML));
    }
  }, [responseHTML]);

  async function handleLogout() {
    await removeValue(_dataExtraction);
    navigation.navigate('JoinNow');
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header data={data} navigation={navigation} />

      {/* main */}
      <Main navigation={navigation} />

      {/* footer */}
      <Footer onPress={handleLogout} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
