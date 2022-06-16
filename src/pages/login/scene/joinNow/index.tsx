import {
  ActivityIndicator,
  Alert,
  BackHandler,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';

/* ===== components ===== */
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import {moderateScale} from 'react-native-size-matters';
import {NORMAL_PADDING} from '../../../../assets/styles/scale';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppDispatch, useAppSelector} from '../../../../hooks/hooks-redux';
import {pushDataExtraction} from '../../../../redux/schedule-redux';
import {callApi} from '../../../../api/lectureSchedule-api';
import {retrieve, storeData} from '../../../../localStorage';
import {_dataExtraction} from '../../../../constant/localKeys';
import {
  convertTextToNumberDay,
  getLearnWeeksFromListWeek,
} from '../../../../util/schedule';
import {saveCode} from '../../../../redux/login-redux';

const cheerio = require('react-native-cheerio');

const JoinNowScreen = ({navigation, route}: any) => {
  const [isLoading, setLoading] = useState(false);

  // useLayoutEffect(() => {
  //   (async () => {
  //     const dataLocal = await retrieve(_dataExtraction);

  //     if (dataLocal) {
  //       if (dataLocal.length > 0) {
  //         navigation.push('bottom');
  //       }
  //     } else {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const dispatch = useAppDispatch();

  /// giá trị input code
  const [value, setValue] = useState('');

  /// nhận giá trị input code
  function onChangeText(value: any) {
    setValue(value);
  }

  async function getHtmlData(params: any) {
    return await callApi(
      `default.aspx?page=thoikhoabieu&sta=1&id=${params.userId}`,
      'post',
      '',
    );
  }

  async function handleGetData(params: any) {
    const htmlData = await getHtmlData(params);
    return htmlData;
  }

  async function handleExtraction(htmlData: any) {
    if (htmlData !== '') {
      if (
        htmlData?.includes(
          `<script language="JavaScript">window.onload=function(){alert('Server đang tải lại dữ liệu. Vui lòng trở lại sau!');}</script></form>`,
        )
      ) {
        Alert.alert('Server đang bảo trì!');

        /// trả về dữ liệu trên local
        const retrieveData = await retrieve(_dataExtraction);
        return retrieveData;
      } else {
        let id = 0;
        let $ = cheerio.load(htmlData);
        let col: any = [];
        let dataConvert: any = [];
        // get many table element
        $('.grid-roll2 > table').each((index: any, elm: any) => {
          $ = cheerio.load(elm);

          // get many td elm in table elm
          $('tbody > tr > td').each(function (i: any, e: any) {
            let textElementTd = $(e).text();

            // DSSV is td element tail
            if (textElementTd.includes('DSSV')) {
              // get td text element helpful
              const dataHelpful = {
                id: id++,
                code: col[0], // mã môn học
                nameSubject: col[1], // tên môn học
                group: col[2], // nhóm môn học
                numberCredit: col[3], // số tín chỉ
                dayOfWeek: convertTextToNumberDay(col[8]), // ngày học trong tuần
                startLearn: +col[9], // tiết bắt đầu
                numberLesson: Number(col[10]), // số tiết học
                room: col[11], // phòng học
                dateLearn: getLearnWeeksFromListWeek('24/01/2022', col[13]), //ngày trong tuần phải học
              };

              dataConvert.push(dataHelpful);
              col = [];
            } else {
              col.push(textElementTd);
            }
          });
        });

        return dataConvert;
      }
    }
  }

  async function handleLogin() {
    if (value.trim() !== '') {
      const params = {
        userId: value.trim(),
      };

      /// get html from website
      const htmlData = await handleGetData(params);

      /// bóc tách dữ liệu
      const dataExtraction = await handleExtraction(htmlData);

      /// push store
      // await storeData(_dataExtraction, dataExtraction);

      console.log(typeof dataExtraction);
      if (typeof dataExtraction !== 'undefined') {
        if (dataExtraction.length > 0) {
          dispatch(saveCode(value.trim()));
          navigation.push('bottom');
        } else {
          Alert.alert('Vui lòng nhập lại mã!');
        }
      } else {
        Alert.alert('Chưa có dữ liệu cũ!');
      }
    }
  }

  return (
    <>
      {isLoading ? (
        <View
          style={{alignItems: 'center', justifyContent: 'center', flexGrow: 1}}>
          <ActivityIndicator />
        </View>
      ) : (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          <View style={styles.wrapperHeader}>
            <Header />
          </View>
          <View style={styles.wrapperMain}>
            <Main value={value} onChangeText={onChangeText} />
          </View>
          <View style={styles.wrapperFooter}>
            <Footer handleLogin={handleLogin} />
          </View>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

export default JoinNowScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  wrapperHeader: {
    marginTop: moderateScale(50),
  },
  wrapperMain: {
    marginTop: moderateScale(30),
    paddingHorizontal: NORMAL_PADDING,
  },
  wrapperFooter: {
    flex: 1,
    marginBottom: moderateScale(20),
    paddingHorizontal: NORMAL_PADDING,
  },
});
