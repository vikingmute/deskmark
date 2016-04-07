import * as storage from 'utils/firebaseStorage';

//sync actions
export const SELECT_ENTRY = 'SELECT_ENTRY';
export const CREATE_NEW_ENTRY = 'CREATE_NEW_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export function createNewEntry() {
  return {type: CREATE_NEW_ENTRY};
}

export function editEntry(id) {
  return {type: EDIT_ENTRY, id};
}

export function cancelEdit() {
  return {type: CANCEL_EDIT};
}

//async actions
//GET /api/entries
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';

function requestEntries() {
  return {type: REQUEST_ENTRIES};
}

function receiveEntries(json) {
  return {type: RECEIVE_ENTRIES, entries: json};
}

export function fetchEntries() {
  return function(dispatch) {
    dispatch(requestEntries());
    storage.getAll()
      .then(items => dispatch(receiveEntries(items)));
  };
}

//GET /api/entries/${id}
export const REQUEST_ENTRY = 'REQUEST_ENTRY';
export const RECEIVE_ENTRY = 'RECEIVE_ENTIRY';

function requestEntry() {
  return {type: REQUEST_ENTRY};
}

function receiveEntry(json) {
  return {type: RECEIVE_ENTRY, entry: json};
}

export function selectEntry(id) {
  return function(dispatch) {
    dispatch(requestEntry());
    storage.getEntry(id)
      .then(item => dispatch(receiveEntry(item)));
  };
}

//POST /api/entries/ & put /api/entries/${id}
export const UPDATE_ENTRIES = 'UPDATE_ENTRIES';
export const UPDATE_SAVED_ENTRY = 'UPDATE_SAVED_ENTRY';
export const REQUEST_UPDATE_ENTRY = 'REQUEST_UPDATE_ENTRY';

function requestUpdateEntry() {
  return {type: REQUEST_UPDATE_ENTRY};
}
function updateSavedEntry(entry) {
  return {type: UPDATE_SAVED_ENTRY, entry};
}
function updateEntries(entries) {
  return {type: UPDATE_ENTRIES, entries};
}

export function saveEntry(entry) {
  const {title, content, id} = entry;
  return function(dispatch) {
    dispatch(requestUpdateEntry());
    if (id) {
      //更新流程
      storage.updateEntry(id, title, content)
        .then((entry) => dispatch(updateSavedEntry(entry)))
        .then(() => storage.getAll())
        .then(entries => dispatch(updateEntries(entries)));
    } else {
      //创建流程
      storage.insertEntry(title, content)
        .then(entry => dispatch(updateSavedEntry(entry)))
        .then(() => storage.getAll())
        .then(entries => dispatch(updateEntries(entries)));
    }
  };
}

//DELETE /api/entries/${id}
export const REQUEST_DELETE_ENTRY = 'REQUEST_DELETE_ENTRY';
export const UPDATE_DELETED_ENTRY = 'UPDATE_DELETED_ENTRY';

function requestDeleteEntry() {
  return {type: UPDATE_DELETED_ENTRY};
}
function updateDeletedEntry(id) {
  return {type: UPDATE_DELETED_ENTRY, id};
}
export function deleteEntry(id) {
  return function(dispatch) {
    dispatch(requestDeleteEntry());
    storage.deleteEntry(id)
      .then(item => dispatch(updateDeletedEntry(item)));
  };
}
