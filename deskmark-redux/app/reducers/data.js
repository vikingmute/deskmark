import storage from 'utils/storage';
const initialState = {
  item: {},
  items: storage.getAll()
};

export default function items(state=initialState, action) {
  switch (action.type) {
    case 'createEntry':
      let item = storage.insertEntry(action.title, action.content);
      return {
        items: storage.getAll(),
        item: item
      }
    case 'deleteEntry':
      storage.deleteEntry(action.id);
      return {
        items: storage.getAll(),
        item: {}
      }
    case 'editEntry':
      let entry = storage.updateEntry(action.id, action.title, action.content);
      return {
        items: storage.getAll(),
        item: entry
      }
    case 'openEditor':
      let currentItem = storage.getEntry(action.id);
      return {
        items: storage.getAll(),
        item: currentItem
      }

    default:
      return state;
  }
}
