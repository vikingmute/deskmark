import React from 'react';
import marked from 'marked';
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
    this.createItem = this.createItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.enterEditMode = this.enterEditMode.bind(this);
    this.quitEditMode = this.quitEditMode.bind(this);
  }
  createItem() {
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    this.props.actions.createEntry(title, content);
  }
  saveItem() {
    let {item, actions} = this.props;
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    actions.editEntry(item.id, title, content);
    this.quitEditMode();
  }
  enterEditMode() {
    this.setState({
      editMode: true
    })
  }
  quitEditMode() {
    this.setState({
      editMode: false
    })
  }
  render() {
    let editMode = this.state.editMode;
    let item = this.props.item;
    if (item.title) {
      if (editMode) {
        return (
          <div>
            <input ref="title" defaultValue={item.title} placeholder="enter the title here"/>
            <textarea ref="content" placehoder="enter the content here" defaultValue={item.title}/>
            <button onClick={this.saveItem}>Save</button>
          </div>
        )
      } else {
        return (
          <div>
            <button onClick={this.enterEditMode}>Edit</button>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        )
      }

    } else {
      return (
        <div>
          <input ref="title" placeholder="enter the title here"/>
          <textarea ref="content" placehoder="enter the content here"></textarea>
          <button onClick={this.createItem}>Create</button>
        </div>
      )
    }

  }
}
