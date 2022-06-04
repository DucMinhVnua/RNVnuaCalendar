import moment from 'moment';

// Lấy thứ thứ 2 theo tuần --34567890--3
export function getLearnWeeks(
  dateStart = '24/01/2022',
  listWeek = '--34567890--3',
) {
  const dateStartConvert = moment(dateStart, 'DD/MM/YYYY').format();
  let dateConvertLastWeek = subtractDay(dateStartConvert, 7);

  let listDateSplit = listWeek.split('');

  const schedule = listDateSplit.map(date => {
    dateConvertLastWeek = addDay(dateConvertLastWeek, 7);

    const dateNew = new Date(dateConvertLastWeek);
    dateNew.setHours(0, 0, 0, 0);

    if (+date || +date === 0) {
      return {
        isLearn: true,
        date: dateNew.getTime(),
      };
    } else {
      return {
        isLearn: false,
        date: dateNew.getTime(),
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
export function filterSubjectsDay(day: any, datas: any) {
  let subjectList: any = [];

  datas.forEach((data: any) => {
    if (data.dayOfWeek === moment(day).day()) {
      const isError = checkDate(day, data);
      if (!isError) {
        subjectList.push(data);
      }
    }
  });

  return subjectList;
}

// input: thứ 2 tuần hiện tại, data extraction, output: những ngày có lịch học trong tuần
export function filterDateLearnInWeek(data: any, monday: any) {
  if (data.length > 0) {
    let learnDates: any = [];

    monday = new Date(monday);
    monday.setHours(0, 0, 0, 0);

    data.map((item: any) => {
      /// kiểm tra thứ 2 pick có tồn tại trong mảng data lấy về không
      const isEmpty = checkDateExist(monday.getTime(), item.dateLearn);

      console.log(item.dayOfWeek === 2 && item);
      if (isEmpty) {
        if (item.dayOfWeek === 0) {
          let dateSunday = addDay(monday, 6).getTime();
          !learnDates.includes(dateSunday) ? learnDates.push(dateSunday) : null;
        } else {
          let dateTime = addDay(monday, item.dayOfWeek - 1).getTime();
          !learnDates.includes(dateTime) ? learnDates.push(dateTime) : null;
        }
      }
    });

    return learnDates;
  }
}

function checkDateExist(date: any, data: any) {
  return data.some((item: any) => item.date === date);
}

// Kiểm tra ngày tích có nằm trong các ngày học không
export function checkDate(date: any, data: any) {
  const sundayLast = getSundayLast(data.dateLearn);
  const mondayFirst = getMondayFirst(data.dateLearn);

  const dateOption = new Date(date);
  dateOption.setHours(0, 0, 0, 0);

  if (
    dateOption.getTime() >= mondayFirst &&
    dateOption.getTime() <= sundayLast
  ) {
    return false;
  } else return true;
}

// Lấy chủ nhật cuối theo mảng dateLearn
function getSundayLast(datas: any) {
  return addDay(datas[datas.length - 1].date, 6).getTime();
}

// Lấy thứ 2 đầu tiên theo mảng dateLearn
function getMondayFirst(data: any) {
  return addDay(data[0].date, 0).getTime();
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

export function addDay(date: any, days: any) {
  let dateNew = new Date(date);
  dateNew.setDate(dateNew.getDate() + days);
  return dateNew;
}

export function subtractDay(date: any, days: any) {
  let dateNew = new Date(date);
  dateNew.setDate(dateNew.getDate() - days);
  return dateNew;
}
