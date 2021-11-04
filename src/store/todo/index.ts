import { todoSlice } from './todoSlice'

// Todo Actions
export const { increment, decrement, incrementByAmount } = todoSlice.actions;

// Todo Selectors
export { selectCount } from './todoSelector'

// Todo Reducer
export default todoSlice.reducer;