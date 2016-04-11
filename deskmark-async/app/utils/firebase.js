/*
 * @file firebase storage helpers
 */

const FIREBASE_SCRIPT_URL = 'https://cdn.firebase.com/js/client/2.2.1/firebase.js';
const FIREBASE_DATA_URL = 'https://deskmark-demo.firebaseio.com/entries/';

export const Firebase = new Promise((resolve, reject) => {
  let script = Object.assign(document.createElement('script'), {
    src: FIREBASE_SCRIPT_URL,
    charset: 'utf-8',
    onload: () => resolve(window.Firebase),
    onerror: (err) => reject(err)
  });
  document.head.appendChild(script);
});

export function ref (name) {
  return Firebase.then(
    Firebase => new Firebase(FIREBASE_DATA_URL + name + '/')
  );
}

export function fetch (name) {
  return ref(name).then(
    ref => new Promise(
      (resolve, reject) => ref.once(
        'value',
        snapshot => resolve(snapshot.val()),
        reject
      )
    )
  );
}

export function save (name, data) {
  return ref(name).then(
    ref => new Promise(
      (resolve, reject) => ref.set(
        data,
        err => (
          err
          ? reject(err)
          : resolve()
        )
      )
    )
  );
}
