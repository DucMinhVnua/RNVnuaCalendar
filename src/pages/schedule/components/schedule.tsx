import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import ButtonIcon from '../../../components/button/buttonIcon';
import icons from '../../../constant/icons';
import {WEEKDAYS} from '../../../constant/schedule';
import typos from '../../../assets/styles/textStyles';
import colors from '../../../assets/styles/colors';
import {getToday, getValueFromDate} from '../../../util/time';
import moment from 'moment';

const Schedule = ({
  weekDays = [],
  onBackPress,
  onNextPress,
  onPress,
  moveDate,
  dateLearn,
}: any) => {
  const backgroundColorActive = {
    backgroundColor: colors.colorFull09,
  };

  // console.log('dateLearn: ', dateLearn);
  // console.log('weekDays: ', weekDays);

  function handleDayOfWeeks(index: any, item: any, weekDays: any) {
    if (moveDate?.toString() === weekDays[index].toString()) {
      return (
        <Text style={[typos.bodySmall, {color: colors.white}]}>{item}</Text>
      );
    } else if (
      dateLearn?.includes(moment(weekDays[index]).format('YYYY/MM/DD'))
    ) {
      return (
        <Text style={[typos.bodySmall, {color: colors.colorFull07}]}>
          {item}
        </Text>
      );
    } else {
      return (
        <Text style={[typos.bodySmall, {color: colors.placeholder}]}>
          {item}
        </Text>
      );
    }
  }

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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress(weekDays[index])}
            key={index}
            style={[
              {
                flex: 1,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              },
              moveDate?.toString() === weekDays[index].toString() &&
                backgroundColorActive,
            ]}>
            {handleDayOfWeeks(index, item, weekDays)}

            <Text
              style={[
                typos.bodySmall,
                {
                  color:
                    getToday().toString() === weekDays[index].toString()
                      ? colors.buttonBg
                      : colors.bodyText,
                },
                moveDate?.toString() === weekDays[index].toString() && {
                  color: colors.white,
                },
              ]}>
              {getValueFromDate(weekDays[index], 'date')}
            </Text>
          </TouchableOpacity>
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
