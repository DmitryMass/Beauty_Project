import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  employees: [] | null;
}

const initialState: IInitialState = {
  employees: null,
};

export const employeesSlice = createSlice({
  name: 'studySlice',
  initialState,
  reducers: {
    setEmployees: (state, { payload }) => {
      state.employees = payload;
    },
  },
});

export const employeesSliceAction = employeesSlice.actions;
export const employeesSliceReducer = employeesSlice.reducer;
