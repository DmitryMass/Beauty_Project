import { TypeRootState } from '../store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;

export default useTypedSelector;
