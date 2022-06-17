import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';

import colors from '../../assets/styles/colors';

/* ===== components ===== */
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-redux';
import {removeValue, retrieve, storeData} from '../../localStorage';
import {_dataAccount, _dataExtraction} from '../../constant/localKeys';
import {dataExt} from '../../redux/schedule-redux';
import {getAPI} from '../../api/account-api';
import {
  splitClassAndMajors,
  splitNameAndBirthDay,
} from '../../util/supportAccount';
import {saveCode} from '../../redux/login-redux';

const cheerio = require('react-native-cheerio');

const AccountScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const code = useAppSelector(state => state.login.code);

  const fetchDataHtml = async (code: any) => {
    return await getAPI(`Default.aspx?page=thoikhoabieu&sta=1&id=${code}`);
  };

  const dataExtraction = async (dataHtml: any, maCode: any) => {
    if (
      dataHtml?.includes(
        `<script language="JavaScript">window.onload=function(){alert('Server đang tải lại dữ liệu. Vui lòng trở lại sau 15 phút!');}</script></form>`,
      )
    ) {
      /// trả về dữ liệu trên local
      const retrieveData = await retrieve(_dataAccount);
      return retrieveData;
    } else {
      let $ = cheerio.load(dataHtml);

      if (+maCode) {
        const code = $(
          '#ctl00_ContentPlaceHolder1_ctl00_lblContentMaSV',
        ).text();
        const name = splitNameAndBirthDay(
          await $('#ctl00_ContentPlaceHolder1_ctl00_lblContentTenSV').text(),
        ).name;
        const birthDay = splitNameAndBirthDay(
          $('#ctl00_ContentPlaceHolder1_ctl00_lblContentTenSV').text(),
        ).birthDay;

        const myClass = splitClassAndMajors(
          $('#ctl00_ContentPlaceHolder1_ctl00_lblContentLopSV').text(),
        ).class;
        const majors = splitClassAndMajors(
          $('#ctl00_ContentPlaceHolder1_ctl00_lblContentLopSV').text(),
        ).majors;

        return {
          code,
          name,
          birthDay,
          myClass,
          majors,
        };
      } else {
        const code = $(
          '#ctl00_ContentPlaceHolder1_ctl00_lblContentMaSV',
        ).text();
        const name = $(
          `Gv.${$('#ctl00_ContentPlaceHolder1_ctl00_lblContentTenSV')}`,
        ).text();

        return {
          code,
          name,
        };
      }
    }
  };

  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const dataHtml = await fetchDataHtml(code);
      const dataExt = await dataExtraction(dataHtml, code);

      // đẩy dữ liệu lên local
      await storeData(_dataAccount, dataExt);

      setData(dataExt);
    })();
  }, []);

  async function handleLogout() {
    dispatch(dataExt([]));
    dispatch(saveCode(''));
    await removeValue(_dataExtraction);
    await removeValue(_dataAccount);
    navigation.navigate('JoinNow');
  }

  return (
    <View style={styles.container}>
      {data ? (
        <>
          {/* header */}
          <Header data={data} navigation={navigation} />

          {/* main */}
          <Main navigation={navigation} />

          {/* footer */}
          <Footer onPress={handleLogout} />
        </>
      ) : (
        <View
          style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
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
