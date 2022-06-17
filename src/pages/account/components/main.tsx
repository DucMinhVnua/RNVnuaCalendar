import React from 'react';
import {Alert, Linking, StyleSheet, View} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

/* ===== components ===== */
import FunctionsAccount from './functionsAccount';
import {moderateVerticalScale} from 'react-native-size-matters';
import icons from '../../../constant/icons';
import {useAppSelector} from '../../../hooks/hooks-redux';
import {addDay} from '../../../util/schedule';
import {learnTimes} from '../../../constant/learnTime';

const Main = ({navigation}: any) => {
  function handleSupport() {
    navigation.navigate('Support');
  }

  function handleAboutApp() {
    navigation.navigate('AboutApp');
  }

  const dataCalendars = useAppSelector(state => state.schedule.dataExtraction);

  function handleSetEventCalendar({title, startDate, endDate}: any) {
    RNCalendarEvents.saveEvent(title, {
      startDate: startDate,
      endDate: endDate,
    });
  }

  // function addHourToDate(
  //   dateEmptyHour: any,
  //   startLearn: any,
  //   endLearn: number,
  // ) {
  //   if (startLearn) {
  //     return {
  //       startDate: new Date(
  //         dateEmptyHour.setHours(learnTimes[`${startLearn}`].startDate.hour),
  //       ),
  //       endDate: new Date(
  //         dateEmptyHour.setMinutes(learnTimes[`${startLearn}`].startDate.min),
  //       ),
  //     };
  //   } else {
  //     return {
  //       startDate: dateEmptyHour.setHours(
  //         dateEmptyHour.setHours(learnTimes[`${endLearn}`].endDate.hour),
  //       ),
  //       endDate: dateEmptyHour.setMinutes(
  //         dateEmptyHour.setHours(learnTimes[`${endLearn}`].endDate.min),
  //       ),
  //     };
  //   }
  // }

  function handleAsyncCalendarFromDatas(dataCalendars: any) {
    dataCalendars.map((itemData: any) => {
      const nameSubject = itemData.nameSubject;
      const room = itemData.room;
      const mondays = itemData.dateLearn;
      const startLearn = itemData.startLearn;
      const numberLesson = itemData.numberLesson;

      mondays.map((wrapperObjectMonday: any) => {
        const monday = wrapperObjectMonday.date;
        const title = `${nameSubject}\n-${room}`;
        // const startDate = addHourToDate(new Date(monday), startLearn, 0);
        // const endDate = addHourToDate(addDay(monday, 6), 1, numberLesson);

        // console.log({
        //   startDate,
        //   // endDate,
        // });

        // handleSetEventCalendar({title, startDate, endDate});
        // RNCalendarEvents.removeEvent('1');
        // console.log('done');
      });
    });
  }

  async function handleAsync() {
    // RNCalendarEvents.requestPermissions().then(
    //   result => {
    //     if (result === 'authorized') {
    //       handleAsyncCalendarFromDatas(dataCalendars);
    //     } else {
    //       Linking.openSettings();
    //     }
    //   },
    //   result => {
    //     console.error(result);
    //   },
    // );
  }

  return (
    <View style={styles.wrapperMain}>
      <FunctionsAccount
        IconLeft={icons.PhoneCallingIcon}
        nameFunction="Hỗ trợ"
        onPress={handleSupport}
      />
      <FunctionsAccount
        IconLeft={icons.PythonIcon}
        nameFunction="Về ứng dụng"
        onPress={handleAboutApp}
      />
      <FunctionsAccount
        isNavigate={false}
        IconLeft={icons.VersionIcon}
        nameFunction="Phiên bản"
      />
      <FunctionsAccount
        IconLeft={icons.AsyncIcon}
        nameFunction="Đồng bộ"
        onPress={handleAsync}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapperMain: {
    margin: moderateVerticalScale(20),
  },
});
