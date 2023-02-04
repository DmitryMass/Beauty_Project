import { studySliceActions } from './../slices/studySlice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { employeesSliceAction } from '../slices/employeeSlice';

const actions = {
  ...studySliceActions,
  ...employeesSliceAction,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
