import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import colors from '../../../assets/styles/colors';
import typos from '../../../assets/styles/textStyles';
import {useAppSelector} from '../../../hooks/hooks-redux';
import LectureSchedule from './lectureSchedule';

const Main = ({indexBtnActive, handleBtnMorning, handleBtnAfternoon}: any) => {
  const dataMorningAfterOfDay = useAppSelector(
    state => state.schedule.dataMorningAfterOfDay,
  );

  return (
    <View style={styles.container}>
      {/* Button sáng chiều */}
      <View style={styles.wrapperDoubleButtonChange}>
        <TouchableOpacity
          style={styles.wrapperButton}
          activeOpacity={0.8}
          onPress={handleBtnMorning}>
          <Text
            style={[
              styles.textButton,
              indexBtnActive === 0 ? styles.btnActive : styles.btnNotActive,
            ]}>
            Sáng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wrapperButton}
          activeOpacity={0.8}
          onPress={handleBtnAfternoon}>
          <Text
            style={[
              styles.textButton,
              indexBtnActive === 1 ? styles.btnActive : styles.btnNotActive,
            ]}>
            Chiều
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lịch lecture */}
      <LectureSchedule
        data={
          indexBtnActive === 0
            ? dataMorningAfterOfDay.morning
            : dataMorningAfterOfDay.afternoon
        }
        indexBtnActive={indexBtnActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: moderateScale(20),
  },
  wrapperDoubleButtonChange: {
    flexDirection: 'row',
    backgroundColor: colors.colorFull09,
    borderRadius: moderateScale(8),
  },
  wrapperButton: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(3),
  },
  textButton: {
    width: '100%',
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(8),
    textAlign: 'center',
    ...typos.buttonSmall,
  },
  btnNotActive: {
    color: colors.white,
    backgroundColor: colors.colorFull09,
  },
  btnActive: {
    color: colors.colorFull09,
    backgroundColor: colors.white,
  },
});

export default React.memo(Main);
