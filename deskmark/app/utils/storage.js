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
  saveAll(results) {
    window.localStorage.setItem('deskmark', JSON.stringify(results));
  },
  getEntry(id) {
    let results = this.getAll();
    let entry = results.find(result => result.id === id);
    return entry;
  },
  insertEntry(title, content) {
    let results = this.getAll();
    let id = uuid.v4();
    let entry = {id, title, content, 'time': new Date().getTime()};
    results.push(entry);
    this.saveAll(results);
    return entry;
  },
  deleteEntry(id) {
    let results = this.getAll();
    let index = results.map(function(entry) {return entry.id;}).indexOf(id);
    if (index != -1) {
      results.splice(index, 1);
      this.saveAll(results);
    }
  },
  updateEntry(id, title, content) {
    let results = this.getAll();
    let entry =  results.find(function(result) {
      return result.id === id;
    });
    entry.title = title;
    entry.content = content;
    this.saveAll(results);
  }
};

export default storage;
