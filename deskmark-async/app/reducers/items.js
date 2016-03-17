import {combineReducers} from 'redux';
import * as ActionTypes from '../actions';
const entriesState = {
  isFetching: false,
  entries: []
};
function posts(state=entriesState, action) {
  switch (action.type) {
    //GET /entries
    case ActionTypes.REQUEST_ENTRIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ActionTypes.RECEIVE_ENTRIES:
      return Object.assign({}, state, {
        isFetching: false,
        entries: action.entries
      });
    case ActionTypes.UPDATE_ENTRIES:
      return Object.assign({}, state, {
        isFetching: false,
        entries: action.entries
      });
    default:
      return state;
  }
}


export default posts;
