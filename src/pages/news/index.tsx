import {Alert, Linking, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';

// components
import Main from './components/main';
import {NORMAL_PADDING} from '../../assets/styles/scale';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../assets/styles/colors';
import {fetchDataHTML, pushDataExtraction} from '../../redux/news-redux';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks/hooks-redux';

const NewsScreen = () => {
  const dispatch = useDispatch();
  const responseHTML = useAppSelector(state => state.news.responseHTML);

  useEffect(() => {
    dispatch(fetchDataHTML());
  }, []);

  useEffect(() => {
    if (responseHTML) {
      dispatch(pushDataExtraction(responseHTML));
    }
  }, [responseHTML]);

  return (
    <View style={styles.container}>
      {/* main */}
      <View style={styles.wrapperMain}>
        <Main />
      </View>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
  wrapperMain: {
    flexGrow: 1,
    paddingHorizontal: NORMAL_PADDING - 5,
    paddingVertical: moderateScale(10),
  },
});
