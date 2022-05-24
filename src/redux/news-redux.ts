import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAPI} from '../api/news-api';
import type {RootState} from '../store';
const cheerio = require('react-native-cheerio');

// thunk
export const fetchDataHTML = createAsyncThunk(
  'news/fetchDataHTML',
  async () => {
    const response = await getAPI(`Default.aspx?page=gioithieu`);

    return response;
  },
);

interface newsState {
  responseHTML: any;
  dataExtraction: Array<any>;
}

// Define the initial state using that type
const initialState: newsState = {
  responseHTML: '',
  dataExtraction: [],
};

export const newsSlice = createSlice({
  name: 'news',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    pushDataExtraction: (state, action) => {
      let id = 0;
      let $ = cheerio.load(action.payload);
      let dataConvert: any = [];

      if ($('.classTable > tbody').html()) {
        // get many table element
        $('.classTable > tbody > tr').each((index: any, elm: any) => {
          const item = cheerio.load(elm);

          const link = item('.TextTitle').attr('href');
          const dateTitle = item('.NgayTitle').text();
          let notification = item('.TextTitle').text();

          if (!notification) {
            notification = item('a').text();
          }

          if (link || (dateTitle && notification)) {
            dataConvert.push({
              link,
              dateTitle,
              notification,
            });
          }
        });

        state.dataExtraction = dataConvert;
      }
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

export const {pushDataExtraction} = newsSlice.actions;

export default newsSlice.reducer;
