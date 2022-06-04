import {createSlice} from '@reduxjs/toolkit';

interface loginState {
  code: any;
}

// Define the initial state using that type
const initialState: loginState = {
  code: '',
};

export const loginSlice = createSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveCode: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const {saveCode} = loginSlice.actions;

export default loginSlice.reducer;
