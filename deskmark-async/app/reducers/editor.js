/*
 * @file reducers for editor
 */

import * as ActionTypes from 'actions';

const initialState = {
  isEditing: false,
  selectedId: null
};

const { pending, fulfilled } = ActionTypes;

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case ActionTypes.SELECT_ENTRY:
      return {
        ...state,
        isEditing: false,
        selectedId: payload
      };

    case ActionTypes.CREATE_NEW_ENTRY:
      return {
        ...state,
        isEditing: true,
        selectedId: null
      };

    case ActionTypes.EDIT_ENTRY:
      return {
        ...state,
        isEditing: true,
        selectedId: payload
      };

    case ActionTypes.CANCEL_EDIT:
      return {
        ...state,
        isEditing: false
      };

    case fulfilled(ActionTypes.SAVE_ENTRY):
      return {
        ...state,
        isEditing: false,
        selectedId: state.selectedId || payload.id
      };

    case fulfilled(ActionTypes.DELETE_ENTRY):
      return {
        ...state,
        isEditing: false,
        selectedId: null
      };

    default:
      return state;
  }
}
