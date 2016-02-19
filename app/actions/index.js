export function createEntry(title, content) {
  return { type: 'createEntry', title, content }
}

export function deleteEntry(id) {
  return { type: 'deleteEntry', id }
}

export function editEntry(id, title, content) {
  return { type: 'editEntry', id, title, content }
}

export function openEditor(id) {
  return { type: 'openEditor', id};
}
