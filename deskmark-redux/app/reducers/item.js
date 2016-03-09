import storage from 'utils/storage';
import * as ActionTypes from '../actions';

const initialState = {
  data: {},
  isEditing: false
};

export default function item(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SELECT_ITEM:
      let currentItem = {data: storage.getEntry(action.id)};
      return Object.assign({}, state, currentItem);
    case ActionTypes.SAVE_ENTRY:
      let saveItem = {data: action.data, isEditing: false};
      return Object.assign({}, state, saveItem);
    case ActionTypes.CREATE_NEW_ENTRY:
      let newItem = {data: {'title': '', 'content': ''}, isEditing: true};
      return Object.assign({}, state, newItem);
    case ActionTypes.EDIT_ENTRY:
      return Object.assign({}, state, {isEditing: true});
    case ActionTypes.DELETE_ENTRY:
      return Object.assign({}, state, {data: {}, isEditing: false});
    case ActionTypes.CANCEL_EDIT:
      return Object.assign({}, state, {isEditing: false});
    default:
      return state;
  }
}
