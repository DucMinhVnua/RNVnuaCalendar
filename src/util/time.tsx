import moment from 'moment';

export function getValueFromDate(date: string, type: string) {
  if (date && type) {
    const momentDate = moment.utc(date, 'DD/MM/YYYY');

    switch (type) {
      case 'date':
        return momentDate.date();
      case 'month':
        return momentDate.month() + 1;
      case 'year':
        return momentDate.year();
      default:
        return '';
    }
  }
}

export function getToday() {
  return moment()
    .utcOffset(0)
    .set({hour: 0, minute: 0, second: 0, millisecond: 0});
}

export function getListDays(monday: any) {
  const listDayOfWeek = [];
  for (let index = 0; index < 7; index++) {
    listDayOfWeek.push(moment(monday).add(index, 'days'));
  }
  return listDayOfWeek;
}

export function getMonday(dateCurrent: any) {
  return moment(dateCurrent, 'MM/DD/YYYY')
    .startOf('isoWeek')
    .utcOffset(0)
    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    .add(1, 'days');
}

export function getMondayBeginWeek(mondayDateCurrent: any) {
  return getMonday(moment(mondayDateCurrent).subtract(7, 'days')).subtract(1, 'days');
}

export function getMondayAfterWeek(mondayDateCurrent: any) {
  return getMonday(moment(mondayDateCurrent).add(7, 'days')).subtract(1, 'days');
}
