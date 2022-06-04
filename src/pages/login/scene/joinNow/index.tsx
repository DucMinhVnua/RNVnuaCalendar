import {Alert, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

/* ===== components ===== */
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import {moderateScale} from 'react-native-size-matters';
import {NORMAL_PADDING} from '../../../../assets/styles/scale';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppDispatch, useAppSelector} from '../../../../hooks/hooks-redux';
import {
  fetchDataHTML,
  pushDataExtraction,
} from '../../../../redux/schedule-redux';

const JoinNowScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  /// html chưa bóc tách sau khi login
  const responseHTML = useAppSelector(state => state.schedule.responseHTML);

  /// nếu có dữ liệu login => bóc tách
  useEffect(() => {
    console.log(responseHTML);
    if (responseHTML) {
      extraction(responseHTML);
    }
  }, [responseHTML]);

  /// dispatch extraction html
  function extraction(data: any) {
    dispatch(pushDataExtraction(data));
  }

  /// html sau khi bóc tách
  const dataExtraction = useAppSelector(
    (state: any) => state.schedule.dataExtraction,
  );

  /// kiểm tra trang đang bảo trì
  const errorServer = useAppSelector(
    (state: any) => state.schedule.errorServer,
  );

  /// nếu server lỗi thì hiển thị thông báo xem lịch off
  useEffect(() => {
    if (errorServer) {
      Alert.alert('Server đang bảo trì, bạn có muốn xem lịch không?');
    }
  }, [errorServer]);

  /// giá trị input code
  const [value, setValue] = useState('');

  /// nhận giá trị input code
  function onChangeText(value: any) {
    setValue(value);
  }

  /// lưu trữ click login
  const [isPress, setIsPress] = useState(false);

  /// xử lý dữ liệu sau khi bóc tách
  useEffect(() => {
    if (isPress) {
      if (dataExtraction.length > 0) {
        console.log(dataExtraction);
      } else {
        console.log('Sai mật khẩu');
      }
    }
  }, [dataExtraction]);

  console.log('dataExtraction: ', dataExtraction);

  /// xử lý login
  function handleLogin() {
    setIsPress(true);
    handleGetData();
    // navigation.navigate('bottom');
  }

  function handleGetData() {
    const formData = customFormData();

    const params = {
      userId: value,
      body: formData,
    };

    dispatch(fetchDataHTML(params));
  }

  function customFormData() {
    let formData = new FormData();
    formData.append(
      '__EVENTTARGET',
      'ctl00$ContentPlaceHolder1$ctl00$rad_ThuTiet',
    );
    formData.append(
      'ctl00$ContentPlaceHolder1$ctl00$rad_ThuTiet',
      'rad_ThuTiet',
    );

    return formData;
  }

  return (
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
