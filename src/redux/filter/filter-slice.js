import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setNewFilter: (_, { payload }) => payload,
  },
});

export const { setNewFilter } = filterSlice.actions;

export default filterSlice.reducer;
