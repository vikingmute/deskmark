/*
 * @file reducers for entries' list
 */

import * as ActionTypes from 'actions';

const initialState = {
  isFetching: false,
  data: []
};

const { pending, fulfilled } = ActionTypes;

export default function (state=initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case pending(ActionTypes.FETCH_ENTRY_LIST):
      return {
        ...state,
        isFetching: true
      };

    case fulfilled(ActionTypes.FETCH_ENTRY_LIST):
      return {
        ...state,
        isFetching: false,
        data: payload
      };

    default:
      return state;
  }
}
