import * as ActionTypes from '../actions';

const initialState = {
  item: null,
  isEditing: false,
  selectedId: null,
  isFetching: false
};

export default function editor(state = initialState, action) {
  switch (action.type) {
    //GET /entries/${id}
    case ActionTypes.REQUEST_ENTRY:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ActionTypes.RECEIVE_ENTRY:
      return Object.assign({}, state, {
        item: action.entry
      });
    //POST /entries/ or PUT /entries/${id}
    case ActionTypes.UPDATE_SAVED_ENTRY:
      console.log(action);
      return Object.assign({}, state, {
        selectedId: action.id,
        isEditing: false,
        isFetching: false,
        item: action.entry
      });
    //DELETE /entries/${id}
    case ActionTypes.UPDATE_DELETED_ENTRY:
      return Object.assign({}, state, {
        selectedId: null,
        isEditing: false,
        isFetching: false,
        item: null
      });
    case ActionTypes.CREATE_NEW_ENTRY:
      return Object.assign({}, state, {
        selectedId: null,
        isEditing: true,
        isFetching: false,
        item: null
      });
    case ActionTypes.EDIT_ENTRY:
      return Object.assign({}, state, {
        selectedId: action.id,
        isEditing: true
      });
    case ActionTypes.CANCEL_EDIT:
      return Object.assign({}, state, {
        isEditing: false
      });
    default:
      return state;
  }
}
