import * as storage from 'utils/storage';

export const SELECT_ITEM = 'SELECT_ITEM';
export const CREATE_NEW_ENTRY = 'CREATE_NEW_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export function selectItem(id) {
  return {type: SELECT_ITEM, id};
}

export function createNewEntry() {
  return {type: CREATE_NEW_ENTRY};
}

export function editEntry() {
  return {type: EDIT_ENTRY};
}

export function cancelEdit() {
  return {type: CANCEL_EDIT};
}

export const START_DELETE_ENTRY = 'START_DELETE_ENTRY';
export const FINISH_DELETE_ENTRY = 'FINISH_DELETE_ENTRY';

function startDeleteEntry() {
  return {type: START_DELETE_ENTRY};
}

function finishDeleteEntry(items) {
  return {type: FINISH_DELETE_ENTRY, items};
}

export function deleteEntry(id) {
  return function(dispatch) {
    dispatch(startDeleteEntry());
    storage.deleteEntry(id)
    .then(() => storage.getAll())
    .then((items) => dispatch(finishDeleteEntry(items)));
  };
}

export const START_FETCH_POSTS = 'START_FETCH_POSTS';
export const FINISH_FETCH_POSTS = 'FINISH_FETCH_POSTS';

//获取文章列表的异步方法
function startFetchPosts() {
  return {type: START_FETCH_POSTS};
}

function finishFetchPosts(items) {
  return {type: FINISH_FETCH_POSTS, items};
}

export function fetchPosts(){
  return function(dispatch) {
    dispatch(startFetchPosts());
    storage.getAll()
      .then(items => dispatch(finishFetchPosts(items)));
  };
}

export const START_SAVE_ENTRY = 'START_SAVE_ENTRY';
export const UPDATE_SAVED_ENTRIES = 'UPDATE_SAVE_ENTRIES';
export const UPDATE_SAVED_ENTRY = 'UPDATE_SAVED_ENTRY';

function startSaveEntry() {
  return {type: START_SAVE_ENTRY};
}
function updateSavedEntries(items) {
  return {type: UPDATE_SAVED_ENTRIES, items};
}
function updateSavedEntry(id) {
  return {type: UPDATE_SAVED_ENTRY, id};
}
export function saveEntry(item) {
  const {title, content, id} = item;
  return function(dispatch) {
    dispatch(startSaveEntry());
    if (id) {
      //更新流程
      storage.updateEntry(id, title, content)
        .then(() => dispatch(updateSavedEntry(id)))
        .then(() => storage.getAll())
        .then(items => dispatch(updateSavedEntries(items)));
    } else {
      //创建流程
      storage.insertEntry(title, content)
        .then(item => dispatch(updateSavedEntry(item.id)))
        .then(() => storage.getAll())
        .then(items => dispatch(updateSavedEntries(items)));
    }
  };
}
