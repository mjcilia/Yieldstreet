import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './ITodoState'

export const NAMESPACE: string = 'TODO';

// Assign Initial Todo State
const initialState: TodoState = {
  count: 0
};

/**
 * Todo:Increment Reducer
 * 
 * @param { TodoState } state
 * @returns { TodoState }
 */
const increment = (state: TodoState) => {
  state.count += 1;
}

/**
 * Todo:Decrement Reducer
 * 
 * @param { TodoState } state
 * @returns { TodoState }
 */
const decrement = (state: TodoState) => {
  state.count -= 1;
}

/**
 * Todo:incrementByAmount Reducer
 * 
 * @param { TodoState } state
 * @param { PayloadAction<number> } action
 * @returns { TodoState }
 */
const incrementByAmount = (state: TodoState, action: PayloadAction<number>) => {
  state.count += action.payload;
}

// Create TodoSlice
export const todoSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    increment,
    decrement,
    incrementByAmount
  },
});
