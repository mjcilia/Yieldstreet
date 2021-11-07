import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { SURVEY_NAMESPACE } from "./store.state";
import surveyReducer from "./survey";

/**
 * Assign Store Config
 *
 * @constant { ConfigureStoreOptions } config
 */
const config: ConfigureStoreOptions = {
  reducer: {
    [SURVEY_NAMESPACE]: surveyReducer,
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
