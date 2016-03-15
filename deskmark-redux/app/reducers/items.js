import {UPDATE_ENTRIES} from '../actions';

const initialState = [];

export default function items(state=initialState, action) {
  switch (action.type) {
    case UPDATE_ENTRIES:
      return action.items;
    default:
      return state;
  }
}
