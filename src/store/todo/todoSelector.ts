import { RootState } from '../';
import { NAMESPACE } from './todoSlice';

/**
 * selectCount Selector
 * 
 * @param { RootState } state
 * @returns number
 */
export const selectCount = 
    (state: RootState): number => state[NAMESPACE].count;