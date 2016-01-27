import uuid from 'uuid';
/*
{
  deskmark: [
  {id:'1234-..', title: 'hello', content: 'funk music'}
  ]
}
*/
let storage = {
  getAll() {
    let results = window.localStorage.getItem('deskmark');
    if (results) {
      try (JSON.parse(results)) {
        return JSON.parse(results);
      } catch (e) {
        console.error(e);
      }
    } else {
      return [];
    }
  },
  getEntry(id) {
    let results = this.getAll();
    return results.find(function(result) {
      return result.id === id;
    })
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
    let entry = this.getEntry(id);
    let index = results.indexOf(entry);
    if (index != -1) {
      results.splice(index, 1);
      window.localStorage.setItem('deskmark', JSON.stringify(results));
    }
  },
  updateEntry(id, data) {
    let entry = this.getEntry(id);
    entry.title =
  }
}

export storage;
