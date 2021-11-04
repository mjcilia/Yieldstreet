import {
  Action,
  configureStore,
  ConfigureStoreOptions,
  ThunkAction
} from '@reduxjs/toolkit';
import todoReducer from './todo';
import { NAMESPACE as TODO_NAMESPACE } from './todo/todoSlice';

// Assign Store Configuration
const config: ConfigureStoreOptions = {
  reducer: {
    [TODO_NAMESPACE]: todoReducer
  },
  devTools: true
}

// Configure Store
export const store = configureStore(config);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
