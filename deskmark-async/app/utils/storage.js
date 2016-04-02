import uuid from 'uuid';
import {
  subscribe as subscribeToFirebase,
  save as saveToFirebase
} from './firebase';

let currentResults = null;

var inited = new Promise((resolve, reject) => {
  subscribeToFirebase(data => {
    currentResults = data || [];
    resolve();
  });
});

export function getAll () {
  return inited.then(() => currentResults);
}

export function saveAll (results) {
  return new Promise((resolve, reject) => {
    saveToFirebase(results).then(
      () => resolve(),
      reject
    );
  });
}

export function getEntry (id) {
  return getAll()
    .then(
      results => results.find(
        result => result.id === id
      )
    );
}

export function insertEntry (title, content) {
  let entry = {
    title,
    content,
    id: uuid.v4(),
    time: new Date().getTime()
  };

  return getAll()
    .then(results => [...results, entry])
    .then(saveAll)
    .then(() => entry);
}

export function deleteEntry (id) {
  return getAll()
    .then(
      results => results.filter(
        result => result.id !== id
      )
    )
    .then(saveAll);
}

export function updateEntry (id, title, content) {
  return getAll()
    .then(
      results => results.map(
        result => (
          result.id === id
          ? {
            ...result,
            title,
            content
          }
          : result
        )
      )
    )
    .then(saveAll);
}
