import {combineReducers} from 'redux';

const postsState = {
  isFetching: false,
  items: []
};

const personState = {
  isFetching: false,
  items: []
};
function posts(state=postsState, action) {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts
      });
    default:
      return state;
  }
}

function persons(state=personState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
  persons
});

export default rootReducer;
