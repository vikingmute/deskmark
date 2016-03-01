import './desk-mark.scss';

import React from 'react';
import * as storage from 'utils/storage';
import List from 'components/list/list';
import Editor from 'components/editor/editor';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      item: null
    };

    this.refreshList = this.refreshList.bind(this);
    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.openEmptyEditor = this.openEmptyEditor.bind(this);
    this.cancelCreate = this.cancelCreate.bind(this);
  }

  refreshList() {
    return storage.getAll()
      .then(items => this.setState({ items }));
  }

  createItem({ title, content }) {
    return storage.insertEntry(title, content)
      .then(item => this.setState({ item }))
      .then(this.refreshList);
  }

  deleteItem({ id }) {
    return storage.deleteEntry(id)
      .then(() => this.setState({ item: null }))
      .then(this.refreshList);
  }

  saveItem(id, title, content) {
    return storage.updateEntry(id, title, content)
      .then(() => storage.getEntry(id))
      .then(item => this.setState({ item }))
      .then(this.refreshList);
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

  componentDidMount() {
    this.refreshList();
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
