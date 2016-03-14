import uuid from 'uuid';

const STORAGE = window.localStorage;
const STORAGE_KEY = 'deskmark';

export function getAll () {
  return new Promise((resolve, reject) => {
    let results = STORAGE.getItem(STORAGE_KEY);

    try {
      resolve(
        results
        ? JSON.parse(results)
        : []
      );
    } catch (e) {
      resolve([]);
    }
  });
}

export function saveAll (results) {
  return new Promise((resolve, reject) => {
    STORAGE.setItem(
      STORAGE_KEY,
      JSON.stringify(results)
    );

    resolve();
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
