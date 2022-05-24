import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAPI} from '../api/account-api';
// import {getAPI} from '../api/account-api';
import type {RootState} from '../store';
import {
  splitClassAndMajors,
  splitNameAndBirthDay,
} from '../util/supportAccount';
const cheerio = require('react-native-cheerio');

// thunk
export const fetchDataHTML = createAsyncThunk(
  'account/fetchDataHTML',
  async (params: any, thunkAPI) => {
    const response = await getAPI(
      `Default.aspx?page=thoikhoabieu&sta=1&id=${params.id}`,
    );
    return response;
  },
);

interface accountState {
  responseHTML: any;
  dataExtraction: any;
}

// Define the initial state using that type
const initialState: accountState = {
  responseHTML: '',
  dataExtraction: {},
};

export const accountSlice = createSlice({
  name: 'account',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    pushDataExtraction: (state, action) => {
      let $ = cheerio.load(action.payload);

      const code = $('#ctl00_ContentPlaceHolder1_ctl00_lblContentMaSV').text();
      const name = splitNameAndBirthDay(
        $('#ctl00_ContentPlaceHolder1_ctl00_lblContentTenSV').text(),
      ).name;
      const birthDay = splitNameAndBirthDay(
        $('#ctl00_ContentPlaceHolder1_ctl00_lblContentTenSV').text(),
      ).birthDay;

      const myClass = splitClassAndMajors(
        $('#ctl00_ContentPlaceHolder1_ctl00_lblContentLopSV').text(),
      ).class;
      const majors = splitClassAndMajors(
        $('#ctl00_ContentPlaceHolder1_ctl00_lblContentLopSV').text(),
      ).majors;

      state.dataExtraction = {
        code,
        name,
        birthDay,
        myClass,
        majors,
      };
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

export const {pushDataExtraction} = accountSlice.actions;

export default accountSlice.reducer;
