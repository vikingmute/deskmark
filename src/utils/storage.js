import uuid from 'uuid';

let storage = {
  getAll() {
    let results = window.localStorage.getItem('deskmark');
    if (results) {
      return JSON.parse(results);
    } else {
      return [];
    }
  },
  insertEntry(title, content) {
    let results = this.getAll();
    let id = uuid.v4();
    let entry = {'id': id, 'title': title, 'content': content};
    results.push(entry);
    window.localStorage.setItem('deskmark', JSON.stringify(results));
  },
  deleteEntry(id) {
    let results = this.getAll();
    let index = results.map(function(entry) {return entry.id}).indexOf(id);
    if (index != -1) {
      results.splice(index, 1);
      window.localStorage.setItem('deskmark', JSON.stringify(results));
    }
  },
  updateEntry(id, title, content) {
    let results = this.getAll();
    let entry =  results.find(function(result) {
      return result.id === id;
    });
    entry.title = title;
    entry.content = content;
    window.localStorage.setItem('deskmark', JSON.stringify(results));
  }
}

export default storage;
