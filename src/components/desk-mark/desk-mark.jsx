import './desk-mark.scss';

import React from 'react';
import storage from 'utils/storage';
import List from 'components/list/list';
import Create from 'components/creator/creator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: storage.getAll()
    };
    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }
  createItem(item) {
    storage.insertEntry(item.title, item.content);
    this.setState({items: storage.getAll() });
  }
  deleteItem(item) {
    storage.deleteEntry(item.id);
    this.setState({items: storage.getAll() });
  }
  saveItem(id, title, content) {
    storage.updateEntry(id, title, content);
    this.setState({items: storage.getAll() });
  }
  render() {
    return (
      <section className="desk-mark-component">
        <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a class="navbar-brand" href="#">Deskmark App</a>
        </nav>
        <div className="container">
            <Create onCreateItem={this.createItem}/>
            <List items={this.state.items} onDeleteItem={this.deleteItem} onSaveItem={this.saveItem}/>
        </div>
      </section>
    );
  }
}
