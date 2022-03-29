import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

import ButtonIcon from '../../../components/button/buttonIcon';
import icons from '../../../constant/icons';
import {WEEKDAYS} from '../../../constant/schedule';
import typos from '../../../assets/styles/textStyles';
import colors from '../../../assets/styles/colors';
import {getToday, getValueFromDate} from '../../../util/time';

interface Props {
  weekDays: any;
  onBackPress(params: any): void;
  onNextPress(params: any): void;
}

const Schedule = ({weekDays = [], onBackPress, onNextPress}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperBtnLeft}>
        <ButtonIcon Icon={icons.ArrowRightScheduleIcon} onPress={onBackPress} />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {WEEKDAYS.map((item, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[typos.bodySmall, {color: colors.placeholder}]}>
              {item}
            </Text>

            <Text
              style={[
                typos.bodySmall,
                {
                  color:
                    getToday().toString() === weekDays[index].toString()
                      ? colors.buttonBg
                      : colors.bodyText,
                },
              ]}>
              {getValueFromDate(weekDays[index], 'date')}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.wrapperBtnRight}>
        <ButtonIcon Icon={icons.ArrowRightScheduleIcon} onPress={onNextPress} />
      </View>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  wrapperBtnLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '-180deg'}],
    marginRight: moderateScale(5),
  },
  wrapperBtnRight: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: moderateScale(5),
  },
});
