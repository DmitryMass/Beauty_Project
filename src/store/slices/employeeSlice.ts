import { createSlice } from '@reduxjs/toolkit';

interface TimeData {
  time: string;
  status: boolean;
}

interface IInitialState {
  employees: [] | null;
  employeeWorkTime: TimeData[] | [];
}

const initialState: IInitialState = {
  employees: null,
  employeeWorkTime: [],
};

export const employeesSlice = createSlice({
  name: 'employeesSlice',
  initialState,
  reducers: {
    setEmployees: (state, { payload }) => {
      state.employees = payload;
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
  },
});

export const employeesSliceAction = employeesSlice.actions;
export const employeesSliceReducer = employeesSlice.reducer;
