import {get} from '../utils/ajax';

function requestPosts() {
  return {
    type: 'REQUEST_POSTS'
  };
}

function receivePosts(json) {
  return {
    type: 'RECEIVE_POSTS',
    posts: json
  };
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestPosts());
    get('http://localhost:8080/api/posts').then((data) => {
      console.log(data);
      dispatch(receivePosts(data));
    });
  };
}

export function createEntry(title, content) {
  return { type: 'createEntry', title, content };
}

export function deleteEntry(id) {
  return { type: 'deleteEntry', id };
}

export function saveEntry(id, title, content) {
  return { type: 'saveEntry', id, title, content };
}

export function openEditor(id) {
  return { type: 'openEditor', id};
}

export function openEmptyEditor(id) {
  return {type: 'openEmptyEditor'};
}

export function cancelCreate() {
  return {type: 'cancelCreate'};
}
