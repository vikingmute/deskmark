import * as ActionTypes from '../actions';

const initialState = {
  data: [],
  isFetching: false
};

export default function items(state=initialState, action) {
  switch (action.type) {
    case ActionTypes.START_FETCH_POSTS:
      return Object.assign({}, state, {'isFetching': true});
    case ActionTypes.FINISH_FETCH_POSTS:
      return Object.assign({}, state, {'data': action.items, 'isFetching': false});
    case ActionTypes.START_SAVE_ENTRY:
      return Object.assign({}, state, {'isFetching': true});
    case ActionTypes.UPDATE_SAVED_ENTRIES:
      return Object.assign({}, state, {'data': action.items, 'isFetching': false});
    case ActionTypes.START_DELETE_ENTRY:
      return Object.assign({}, state, {'isFetching': true});
    case ActionTypes.FINISH_DELETE_ENTRY:
      return Object.assign({}, state, {'data': action.items, 'isFetching': false});
    default:
      return state;
  }
}
