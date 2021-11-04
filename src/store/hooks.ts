import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '.';

/**
 * To be used throughout the app instead of plain `useDispatch` and `useSelector`. They are
 * not part of the store index.ts file as to avoid circular dependencies.
 * https://redux.js.org/usage/usage-with-typescript.
 * 
 * @constant useAppDispatch A pre-typed useDispatch hook as to Type Store Middleware (namely Thunks). 
 * @constant useAppSelector A pre-typed useSelector hook. Saves on importing RootState every time.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
