import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const actions = {
  // ...slice
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
