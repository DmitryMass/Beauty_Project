import { IGroup } from './../../types/admin';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  courses: IGroup[] | [];
}

const initialState: IInitialState = {
  courses: [],
};

export const studySlice = createSlice({
  name: 'studySlice',
  initialState,
  reducers: {
    setCourses: (state, { payload }) => {
      const course = state.courses.find(({ type }) => type === payload.type);
      if (!course) {
        state.courses = [...state.courses, payload];
      } else {
        const newArr = [...state.courses];
        const courseIdx = newArr.findIndex(({ type }) => type === payload.type);
        newArr.splice(courseIdx, 1);

        state.courses = [payload, ...newArr];
      }

      //   state.courses = state.courses.filter((course: IGroup) =>
      //     course.type === payload.type ? payload : course
      //   );
    },
  },
});

export const studySliceActions = studySlice.actions;
export const studySliceReducer = studySlice.reducer;
