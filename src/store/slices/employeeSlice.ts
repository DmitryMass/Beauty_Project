import { createSlice } from '@reduxjs/toolkit';

type TimeData = string;

interface IInitialState {
  employee: string | null;
  employeeWorkTime: TimeData[] | [];
}

const initialState: IInitialState = {
  employee: null,
  employeeWorkTime: [],
};

export const employeesSlice = createSlice({
  name: 'employeesSlice',
  initialState,
  reducers: {
    setEmployees: (state, { payload }) => {
      state.employee = payload;
    },
    setEmployeeTime: (state, { payload }) => {
      const item = state.employeeWorkTime.find((el) => el === payload);
      if (item) {
        state.employeeWorkTime = state.employeeWorkTime;
        return;
      }
      state.employeeWorkTime = [...state.employeeWorkTime, payload];
    },
    deleteEmployeeTime: (state, { payload }) => {
      state.employeeWorkTime = state.employeeWorkTime.filter(
        (item) => item !== payload
      );
    },
    clearEmployeeTime: (state) => {
      state.employeeWorkTime = [];
    },
  },
});

export const employeesSliceAction = employeesSlice.actions;
export const employeesSliceReducer = employeesSlice.reducer;
