import storage from 'utils/storage';
import {FETCH_POSTS, SAVE_ENTRY, DELETE_ENTRY} from '../actions';

const initialState = {
  data: []
};

export default function items(state=initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, {'data': storage.getAll()});
    case SAVE_ENTRY:
      const {title, content, id} = action.data;
      if (id) {
        storage.updateEntry(id, title, content);
      } else {
        storage.insertEntry(title, content);
      }
      return Object.assign({}, state, {'data': storage.getAll()});
    case DELETE_ENTRY:
      storage.deleteEntry(action.id);
      return Object.assign({}, state, {'data': storage.getAll()});
    default:
      return state;
  }
}
