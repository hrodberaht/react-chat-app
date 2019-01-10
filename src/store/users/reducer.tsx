import * as types from './types';

interface UserInterface {
  name: string;
  email: string;
  password: string;
}

interface ActionInterface {
  type: string;
  payload: any;
}

const initialState: Array<UserInterface> = [];

const users = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, action.payload];
    case types.UPDATE_USER:
      return [...state, action.payload];
    default:
      state;
  }
};
