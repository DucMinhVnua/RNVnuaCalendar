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
  return moment.utc().add(7, 'hours').format('DD/MM/YYYY');
}
