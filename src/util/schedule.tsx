import moment from 'moment';

// Lấy thứ thứ 2 theo tuần --34567890--3
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

  return schedule.filter(date => date.isLearn === true);
}

// Đổi thứ dạng string => number ("Tư" => 4)
export function convertTextToNumberDay(dayOfWeek: string) {
  switch (dayOfWeek) {
    case 'Hai':
      return 1;
    case 'Ba':
      return 2;
    case 'Tư':
      return 3;
    case 'Năm':
      return 4;
    case 'Sáu':
      return 5;
    case 'Bảy':
      return 6;
    case 'CN':
      return 0;
    default:
      return null;
  }
}

// lọc ra các môn buổi sáng buổi chiều
export function filterMorningAfternoon(data: any) {
  return {
    morning: (() => {
      return data.filter((subject: any) => subject.startLearn < 6);
    })(),
    afternoon: (() => {
      return data.filter((subject: any) => subject.startLearn >= 6);
    })(),
  };
}

// Lọc ra các dữ liệu có thứ bằng date đã chọn
export function filterSubjectsDay(day: any, data: any) {
  let subjectList: any = [];
  data.forEach((date: any) => {
    if (date.dayOfWeek === moment(day).day()) {
      const isError = checkDate(day, date);
      if (!isError) {
        subjectList.push(date);
      }
    }
  });

  return subjectList;
}

// Kiểm tra ngày tích có nằm trong các ngày học không
export function checkDate(date: any, data: any) {
  const sundayLast = getSundayLast(data.dateLearn);
  const mondayFirst = getMondayFirst(data.dateLearn);
  const dateOption = moment(date);

  if (dateOption >= mondayFirst && dateOption <= sundayLast) {
    return false;
  } else return true;
}

// Lấy chủ nhật cuối theo mảng dateLearn
function getSundayLast(data: any) {
  return moment(data[data.length - 1].date).add('6', 'day');
}

// Lấy thứ 2 đầu tiên theo mảng dateLearn
function getMondayFirst(data: any) {
  return moment(data[0].date);
}
