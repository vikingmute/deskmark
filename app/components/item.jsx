import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editMode: false};
    this.deleteItem = this.deleteItem.bind(this);
    this.switchEdit = this.switchEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }
  deleteItem(item) {
    this.props.onDeleteItem(this.props.item);
  }
  switchEdit() {
    this.setState({editMode: true});
  }
  cancelEdit() {
    this.setState({editMode: false});
  }
  saveEdit() {
    let title = this.refs.title.value;
    this.setState({editMode: false});
    this.props.onSaveItem(this.props.item, title);
  }
  render() {
    let editMode = this.state.editMode;
    if (editMode) {
      return (
        <div>
          <input ref="title" defaultValue={this.props.item.title}/>
          <button onClick={this.saveEdit}>Save</button>
          <button onClick={this.cancelEdit}>Cancel</button>
        </div>
      )
    } else {
      return (
        <div>{this.props.item.title}
          <button onClick={this.switchEdit}>Edit</button>
          <button onClick={this.deleteItem}>Delete</button>
        </div>
      )
    }
  }
}
