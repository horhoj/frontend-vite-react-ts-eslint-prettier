import { actions, reducer } from './todoListSlice';
import * as thunks from './thunks';

export const todoListSlice = { actions, reducer, thunks } as const;
