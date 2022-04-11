import moment from 'moment';

// Lấy thứ thứ 2 theo tuần học dạng --34567890--3
export function getLearnWeeks(
  dateStart = '24/01/2022',
  listWeek = '--34567890--3',
) {
  const dateConvert = moment(dateStart, 'DD/MM/YYYY').format();
  let dateConvertLastWeek = moment(dateConvert)
    .add(1, 'days')
    .subtract(7, 'days');

  let listDateSplit = listWeek.split('');

  const schedule = listDateSplit.map(date => {
    dateConvertLastWeek = moment(dateConvertLastWeek).add(7, 'days');

    if (+date) {
      return {
        isLearn: true,
        date: dateConvertLastWeek.toISOString(),
      };
    } else {
      return {
        isLearn: false,
        date: dateConvertLastWeek.toISOString(),
      };
    }
  });

  return schedule;
}
