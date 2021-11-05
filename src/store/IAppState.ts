import { ITodoState } from "./todo/ITodoState";

export const TODO_NAMESPACE = "TODO";

export interface AppState {
  [TODO_NAMESPACE]: ITodoState;
}
