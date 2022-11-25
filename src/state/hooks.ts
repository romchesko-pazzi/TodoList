import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { ActionTypeForApp } from '../types/types';

import { RootStateType } from './store';

export const useAppDispatch = () => useDispatch<ThunkDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export type AppThunkType = ThunkAction<void, RootStateType, unknown, ActionTypeForApp>;
export type ThunkDispatchType = ThunkDispatch<RootStateType, unknown, ActionTypeForApp>;
