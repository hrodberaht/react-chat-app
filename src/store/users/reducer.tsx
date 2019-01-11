import * as types from './types';

export interface StateInterface {
  users: UserInterface[];
}

export interface UserInterface {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface ActionInterface {
  type: string;
  payload: any;
}

const userOne: UserInterface = {
  id: '1234',
  name: 'user one',
  email: 'u@1.pl',
  password: '1234'
};

const initialState: Array<UserInterface> = [userOne];

const users = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, action.payload];
    case types.UPDATE_USER:
      return [...state, action.payload];
    case types.DELETE_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default users;
