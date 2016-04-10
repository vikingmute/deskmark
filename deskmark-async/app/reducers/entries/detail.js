/*
 * @file reducers for entries' detail
 */

import * as ActionTypes from 'actions';

const initialState = {};

const { pending, fulfilled } = ActionTypes;

export default function (state=initialState, action) {
  const { type, payload } = action;
  let id, entry;

  switch (type) {

    case pending(ActionTypes.FETCH_ENTRY):
      id = payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetching: true
        }
      };

    case fulfilled(ActionTypes.FETCH_ENTRY):
      entry = payload;
      return {
        ...state,
        [entry.id]: {
          data: entry,
          isFetching: false
        }
      };

    case pending(ActionTypes.SAVE_ENTRY):
      id = payload.id;
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetching: true
        }
      };

    case fulfilled(ActionTypes.SAVE_ENTRY):
      entry = payload;
      return {
        ...state,
        [entry.id]: {
          data: entry,
          isFetching: false
        }
      };

    case pending(ActionTypes.DELETE_ENTRY):
      id = payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetching: true
        }
      };

    case fulfilled(ActionTypes.DELETE_ENTRY):
      id = payload;
      return {
        ...state,
        [id]: {
          data: null,
          isFetching: false
        }
      };

    default:
      return state;
  }
}
