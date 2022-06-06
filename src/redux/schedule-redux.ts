import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {postAPI} from '../api/lectureSchedule-api';
import type {RootState} from '../store';
import {
  convertSubjectSame,
  convertTextToNumberDay,
  getLearnWeeksFromListWeek,
} from '../util/schedule';
const cheerio = require('react-native-cheerio');

// Define the initial state using that type
const initialState: any = {
  responseHTML: '',
  dataExtraction: [],
  dataMorningAfterOfDay: {},
  isErrorSever: false,
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    pushDataExtraction: (state, action) => {
      let id = 0;
      let $ = cheerio.load(action.payload);
      let col: any = [];
      let dataConvert: any = [];
      if ($('.grid-roll2 > table').html()) {
        // get many table element
        $('.grid-roll2 > table').each((index: any, elm: any) => {
          $ = cheerio.load(elm);

          // get many td elm in table elm
          $('tbody > tr > td').each(function (i: any, e: any) {
            let textElementTd = $(e).text();

            // DSSV is td element tail
            if (textElementTd.includes('DSSV')) {
              // get td text element helpful
              const dataHelpful = {
                id: id++,
                code: col[0], // mã môn học
                nameSubject: col[1], // tên môn học
                group: col[2], // nhóm môn học
                numberCredit: col[3], // số tín chỉ
                dayOfWeek: convertTextToNumberDay(col[8]), // ngày học trong tuần
                startLearn: +col[9], // tiết bắt đầu
                numberLesson: Number(col[10]), // số tiết học
                room: col[11], // phòng học
                dateLearn: getLearnWeeksFromListWeek('24/01/2022', col[13]), //ngày trong tuần phải học
              };

              dataConvert.push(dataHelpful);
              col = [];
            } else {
              col.push(textElementTd);
            }
          });
        });
      } else {
        $('.base > table > tbody > tr').each((index: any, elm: any) => {
          const trElem = cheerio.load(elm);
          if (trElem('td').attr('valign') === 'top') {
            if (trElem('td').text().trim() === '') {
              Alert.alert('Server đang bảo trì vui lòng thử lại sau');
            }
          }
        });
      }
      state.dataExtraction = dataConvert;
    },
    pushDataMorningAfternoon: (state, action) => {
      state.dataMorningAfterOfDay = convertSubjectSame(action.payload);
    },
  },
});

export const {pushDataExtraction, pushDataMorningAfternoon} =
  scheduleSlice.actions;

export default scheduleSlice.reducer;
