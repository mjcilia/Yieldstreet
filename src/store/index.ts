import {
  Action,
  configureStore,
  ConfigureStoreOptions,
  ThunkAction,
} from "@reduxjs/toolkit";
import { TODO_NAMESPACE } from "./IAppState";
import todoReducer from "./todo";

/**
 * Assign Store Config
 *
 * @constant { ConfigureStoreOptions } config
 */
const config: ConfigureStoreOptions = {
  reducer: {
    [TODO_NAMESPACE]: todoReducer,
  },
  devTools: true,
};

/**
 * Configure Redux Store
 *
 * @constant store
 */
export const store = configureStore(config);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
