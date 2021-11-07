import {
  configureStore,
  ConfigureStoreOptions,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { SURVEY_NAMESPACE } from "./store.state";
import surveyReducer from "./survey";

/**
 * @constant rootReducer
 */
const rootReducer = combineReducers({
  [SURVEY_NAMESPACE]: surveyReducer,
});

/**
 * @constant persistConfig
 */
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Assign Store Config
 *
 * @constant { ConfigureStoreOptions } config
 */
const config: ConfigureStoreOptions = {
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
};

export const store = configureStore(config);
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
