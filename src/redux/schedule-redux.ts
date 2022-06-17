import {createSlice} from '@reduxjs/toolkit';
import {convertSubjectSame} from '../util/schedule';

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
    dataExt: (state, action) => {
      state.dataExtraction = action.payload;
    },
    pushDataMorningAfternoon: (state, action) => {
      state.dataMorningAfterOfDay = convertSubjectSame(action.payload);
    },
  },
});

export const {dataExt, pushDataMorningAfternoon} = scheduleSlice.actions;

export default scheduleSlice.reducer;
