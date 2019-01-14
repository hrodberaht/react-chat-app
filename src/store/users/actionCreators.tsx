import * as types from './types';
import { ActionInterface } from './reducer';

export const addUser = (user: number): ActionInterface => ({
  type: types.ADD_USER,
  payload: user
});
