import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {postAPI} from '../api/lectureSchedule-api';
import type {RootState} from '../store';
import {
  convertSubjectSame,
  convertTextToNumberDay,
  getLearnWeeks,
} from '../util/schedule';
const cheerio = require('react-native-cheerio');

// thunk
export const fetchDataHTML = createAsyncThunk(
  'schedule/fetchDataHTML',
  async (params: any, thunkAPI) => {
    const response = await postAPI(
      `default.aspx?page=thoikhoabieu&sta=1&id=${params.userId}`,
      params.body,
    );
    return response;
  },
);

// Define the initial state using that type
const initialState: any = {
  responseHTML: '',
  dataExtraction: [],
  dataMorningAfterOfDay: {},
  errorServer: false,
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
        /// lỗi trên server
        state.errorServer = false;

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
                dateLearn: getLearnWeeks('24/01/2022', col[13]), //ngày trong tuần phải học
              };

              dataConvert.push(dataHelpful);
              col = [];
            } else {
              col.push(textElementTd);
            }
          });
        });
      } else {
        console.log('server đang lỗi');
        state.errorServer = true;
      }

      state.dataExtraction = dataConvert;
    },
    pushDataMorningAfternoon: (state, action) => {
      state.dataMorningAfterOfDay = convertSubjectSame(action.payload);
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchDataHTML.fulfilled, (state: any, action: any) => {
      // Add user to the state array
      state.responseHTML = action.payload;
    });
  },
});

export const {pushDataExtraction, pushDataMorningAfternoon} =
  scheduleSlice.actions;

export default scheduleSlice.reducer;
