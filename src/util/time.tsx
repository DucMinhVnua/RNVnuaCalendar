import moment from 'moment';
import {addDay, subtractDay} from './schedule';

export function getValueFromDate(date: string, type: string) {
  if (date && type) {
    switch (type) {
      case 'date':
        return new Date(date).getDate();
      case 'month':
        return new Date(date).getMonth() + 1;
      case 'year':
        return new Date().getFullYear();
      default:
        return '';
    }
  }
}

export function getToday() {
  const dateNew = new Date();
  return new Date(dateNew.setHours(0, 0, 0, 0));
}

export function getListDays(monday: any) {
  const listDayOfWeek = [];
  for (let index = 0; index < 7; index++) {
    listDayOfWeek.push(addDay(monday, index));
  }
  return listDayOfWeek;
}

export function getMonday(dateCurrent: any) {
  const dateMoment = moment(dateCurrent, 'MM/DD/YYYY')
    .startOf('isoWeek')
    .utcOffset(0)
    .set({hour: 0, minute: 0, second: 0, millisecond: 0})
    .add(1, 'days')
    .toISOString();

  const date = new Date(dateMoment);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function getMondayBeginWeek(mondayDateCurrent: any) {
  const dateNew = new Date(mondayDateCurrent);
  return subtractDay(dateNew, 7);
}

export function getMondayAfterWeek(mondayDateCurrent: any) {
  const dateNew = new Date(mondayDateCurrent);
  return addDay(dateNew, 7);
}
