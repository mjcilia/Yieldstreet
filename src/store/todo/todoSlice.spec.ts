import todoReducer, {
    increment,
    decrement, 
    incrementByAmount
} from "./";
import { TodoState } from "./ITodoState"

describe('counter reducer', () => {
    const initialState: TodoState = {
      count: 2
    };
    it('should handle initial state', () => {
      expect(todoReducer(undefined, { type: 'unknown' })).toEqual({
        count: 0
      });
    });
  
    it('should handle increment', () => {
      const actual = todoReducer(initialState, increment());
      expect(actual.count).toEqual(3);
    });
  
    it('should handle decrement', () => {
      const actual = todoReducer(initialState, decrement());
      expect(actual.count).toEqual(1);
    });
  
    it('should handle incrementByAmount', () => {
      const actual = todoReducer(initialState, incrementByAmount(2));
      expect(actual.count).toEqual(4);
    });
  });