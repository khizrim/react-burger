import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../utils/types';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
