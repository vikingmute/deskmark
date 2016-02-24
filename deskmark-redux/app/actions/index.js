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
