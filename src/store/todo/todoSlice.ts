import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TODO_NAMESPACE, AppState } from "../IAppState";
import { ITodoState } from "./ITodoState";

/**
 * @constant { ITodoState } initialState
 */
const initialState: ITodoState = {
  count: 0,
};

/**
 * TODO Increment Reducer
 *
 * @param { TodoState } state
 * @returns { TodoState }
 */
const increment = (state: ITodoState) => {
  state.count += 1;
};

/**
 * TODO Decrement Reducer
 *
 * @param { TodoState } state
 * @returns { TodoState }
 */
const decrement = (state: ITodoState) => {
  state.count -= 1;
};

/**
 * TODO incrementByAmount Reducer
 *
 * @param { TodoState } state
 * @param { PayloadAction<number> } action
 * @returns { TodoState }
 */
const incrementByAmount = (
  state: ITodoState,
  action: PayloadAction<number>
) => {
  state.count += action.payload;
};

/**
 * selectCount Selector
 *
 * @param { RootState } state
 * @returns number
 */
export const selectCount = (state: AppState): number =>
  state[TODO_NAMESPACE].count;

// Create TodoSlice
export const todoSlice = createSlice({
  name: TODO_NAMESPACE,
  initialState,
  reducers: {
    increment,
    decrement,
    incrementByAmount,
  },
});
