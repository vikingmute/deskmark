import React from 'react';
import marked from 'marked';
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
    let content = this.refs.content.value;
    this.setState({editMode: false});
    this.props.onSaveItem(this.props.item.id, title, content);
  }
  render() {
    let editMode = this.state.editMode;
    if (editMode) {
      return (
        <div className="item-component">
          <input ref="title" defaultValue={this.props.item.title}/><br/>
          <textarea ref="content" defaultValue={this.props.item.content}/><br/>
          <button onClick={this.saveEdit}>Save</button>
          <button onClick={this.cancelEdit}>Cancel</button>
        </div>
      )
    } else {
      let html = marked(this.props.item.content);
      return (
        <div className="item-component">
          <h3>{this.props.item.title}</h3>
          <div className="item-text">
            <div dangerouslySetInnerHTML={{__html: html}} />
          </div>
          <button onClick={this.switchEdit}>Edit</button>
          <button onClick={this.deleteItem}>Delete</button>
        </div>
      )
    }
  }
}
