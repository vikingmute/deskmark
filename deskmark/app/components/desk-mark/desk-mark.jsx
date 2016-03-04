import './desk-mark.scss';

import React from 'react';
import uuid from 'uuid';
import List from 'components/list/list';
import Editor from 'components/editor/editor';
import Shower from 'components/editor/shower';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selectedId: null,
      editing: false
    };

    this.selectItem = this.selectItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.createItem = this.createItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  selectItem(id) {
    if (id === this.state.selectedId) {
      return;
    }

    this.setState({
      selectedId: id,
      editing: false
    });
  }

  saveItem(item) {
    let items = this.state.items;

    // new item
    if (!item.id) {
      item.id = uuid.v4();
      item.time = new Date().getTime();
      items = [...items, item];
    // existed item
    } else {
      items = items.map(
        exist => (
          exist.id === item.id
          ? {
            ...exist,
            ...item
          }
          : exist
        )
      );
    }

    this.setState({
      items,
      editing: false
    });
  }

  deleteItem(id) {
    if (!id) {
      return;
    }

    this.setState({
      items: this.state.items.filter(
        result => result.id !== id
      )
    });
  }

  createItem() {
    this.setState({
      selectedId: null,
      editing: true
    });
  }

  editItem(id) {
    this.setState({
      selectedId: id,
      editing: true
    });
  }

  cancelEdit() {
    this.setState({ editing: false });
  }

  render() {

    let { items, selectedId, editing } = this.state;

    let selected = selectedId && items.find(item => item.id === selectedId);

    let mainPart = editing
      ? <Editor
          item={selected}
          onSave={this.saveItem}
          onCancel={this.cancelEdit}
        />
      : <Shower
          item={selected}
          onEdit={this.editItem}
          onDelete={this.deleteItem}
        />;

    return (
      <section className="desk-mark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">Deskmark App</a>
        </nav>
        <div className="container">
          <div className="row">
            <List
              items={this.state.items}
              onSelect={this.selectItem}
              onCreate={this.createItem}
            />
            {mainPart}
          </div>
        </div>
      </section>
    );
  }
}
