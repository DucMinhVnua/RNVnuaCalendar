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

    if (+date || +date === 0) {
      return {
        isLearn: true,
        date: moment(dateConvertLastWeek).toISOString(),
      };
    } else {
      return {
        isLearn: false,
        date: moment(dateConvertLastWeek).toISOString(),
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

// input: list week hiện tại, data extraction, output: những ngày có lịch học trong tuần
export function filterDateLearnInWeek(data: any, monday: any) {
  if (data.length > 0) {
    let learnDates: any = [];

    monday = moment(monday).format('YYYY/MM/DD');

    data.map((item: any) => {
      item.dateLearn.map((dateMonday: any) => {
        /// get date(thứ 2) từ object dateLearn
        const date = dateMonday.date;

        /// format date -> YYYY/MM/DD
        const dateFormat = moment(date)
          .subtract('1', 'days')
          .format('YYYY/MM/DD');

        const conditionDate =
          moment(monday).toISOString() === moment(dateFormat).toISOString();

        /// cộng index lấy ra ngày học trong tuần
        let dayOfWeek;

        if (item.dayOfWeek === 0) {
          dayOfWeek = moment(dateFormat).add('7', 'days');
        } else {
          dayOfWeek = moment(dateFormat).add(`${item.dayOfWeek}`, 'days');
        }

        /// tìm môn học có tuần bắt đầu bằng thứ 2 truyền vào
        if (
          conditionDate &&
          learnDates.includes(
            moment(dayOfWeek).subtract('1', 'days').format('YYYY/MM/DD'),
          ) == false
        ) {
          learnDates.push(
            moment(dayOfWeek).subtract('1', 'days').format('YYYY/MM/DD'),
          );
        }
      });
    });

    console.log(learnDates);
    console.log('\n ===================');

    return learnDates;
  }
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

// Lọc dữ liệu trường hợp các tiết học trùng tiết
export function convertSubjectSame(data: any) {
  let dataMorningAfternoon = {};
  const dataNew: any = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
  };
  for (let key in data) {
    data[key].forEach((subject: any, index: any) => {
      // vd numberLesson = 2, startLearn = 4 => so tiet phai hoc = numberLesson + startLearn - 1, 2 + 4 - 1 = hoc tiet 4,5
      for (
        let i = subject.startLearn;
        i <= subject.startLearn + subject.numberLesson - 1;
        i++
      ) {
        dataNew[i].push(subject);
      }
      dataMorningAfternoon[key] = dataNew;
    });
  }

  return dataMorningAfternoon;
}

export function convertTimeZero(date: any) {
  var m = moment(date).utcOffset(0);
  m.set({hour: 0, minute: 0, second: 0, millisecond: 0});
  m.format();

  return m;
}
