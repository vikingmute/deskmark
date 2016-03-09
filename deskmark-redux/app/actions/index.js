export const SAVE_ENTRY = 'SAVE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const SELECT_ITEM = 'SELECT_ITEM';
export const CREATE_NEW_ENTRY = 'CREATE_NEW_ENTRY';
export const FETCH_POSTS = 'FETCH_POSTS';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export function saveEntry(data) {
  return { type: SAVE_ENTRY, data };
}

export function deleteEntry(id) {
  return { type: DELETE_ENTRY, id };
}

export function selectItem(id) {
  return {type: SELECT_ITEM, id};
}

export function createNewEntry() {
  return {type: CREATE_NEW_ENTRY};
}

export function fetchPosts() {
  return {type: FETCH_POSTS};
}

export function editEntry() {
  return {type: EDIT_ENTRY};
}

export function cancelEdit() {
  return {type: CANCEL_EDIT};
}
