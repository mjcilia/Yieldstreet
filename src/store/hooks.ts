import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from ".";

/**
 * To be used throughout the app instead of plain `useDispatch`. It is not part of the
 * store index.ts file as to avoid circular dependencies.
 * https://redux.js.org/usage/usage-with-typescript.
 *
 * @constant useAppDispatch A pre-typed useDispatch hook as to Type Store Middleware (namely Thunks).
 */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

/**
 * To be used throughout the app instead of plain `useSelector`. It is not part of the
 * store index.ts file as to avoid circular dependencies.
 * https://redux.js.org/usage/usage-with-typescript.
 *
 * @constant useAppSelector A pre-typed useSelector hook. Saves on importing RootState every time.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
