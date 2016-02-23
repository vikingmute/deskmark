import './desk-mark.scss';

import React from 'react';
import storage from 'utils/storage';
import List from 'components/list/list';
import Editor from 'components/editor/editor';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: storage.getAll(),
      item: null
    };
    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.openEmptyEditor = this.openEmptyEditor.bind(this);
    this.cancelCreate = this.cancelCreate.bind(this);
  }
  createItem(item) {
    let entry = storage.insertEntry(item.title, item.content);
    this.setState({items: storage.getAll(), item: entry});
  }
  deleteItem(item) {
    storage.deleteEntry(item.id);
    this.setState({items: storage.getAll(), item: null});
  }
  saveItem(id, title, content) {
    storage.updateEntry(id, title, content);
    let entry = storage.getEntry(id);
    this.setState({items: storage.getAll(), item: entry});
  }
  openEditor(item) {
    this.setState({item: item});
  }
  openEmptyEditor() {
    let emptyEntry = {
      'title': '',
      'content': ''
    };
    this.setState({item: emptyEntry});
  }
  cancelCreate() {
    this.setState({item: null});
  }
  render() {
    return (
      <section className="desk-mark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">Deskmark App</a>
        </nav>
        <div className="container">
          <div className="row">
            <List items={this.state.items}
              onOpenEditor={this.openEditor}
              onOpenEmptyEditor={this.openEmptyEditor}/>
            <Editor item={this.state.item}
              onDeleteItem={this.deleteItem}
              onSaveItem={this.saveItem}
              onCreateItem={this.createItem}
              onCancelCreate={this.cancelCreate}/>
          </div>
        </div>
      </section>
    );
  }
}
