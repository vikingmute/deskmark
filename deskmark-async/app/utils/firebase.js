/*
 * @file firebase storage helper
 */

const FIREBASE_SCRIPT_URL = 'https://cdn.firebase.com/js/client/2.2.1/firebase.js';
const FIREBASE_DATA_URL = 'https://deskmark-demo.firebaseio.com/';

export const Firebase = new Promise((resolve, reject) => {
  let script = Object.assign(document.createElement('script'), {
    src: FIREBASE_SCRIPT_URL,
    charset: 'utf-8',
    onload: () => resolve(window.Firebase),
    onerror: (err) => reject(err)
  });
  document.head.appendChild(script);
});

export const ref = Firebase.then(
  Firebase => new Firebase(FIREBASE_DATA_URL)
);

export function subscribe (handler) {
  ref.then(ref => {
    ref.on(
      'value',
      snapshot => handler(snapshot.val())
    );
  });
}

export function save (data) {
  return ref.then(
    ref => new Promise((resolve, reject) => {
      ref.set(
        data,
        err => (
          err
          ? reject(err)
          : resolve()
        )
      );
    })
  );
}
