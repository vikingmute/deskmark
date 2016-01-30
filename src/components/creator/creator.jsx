import React from 'react';
import marked from 'marked';

import './creator.scss';

export default class Create extends React.Component{
  constructor(props) {
    super(props);
    this.state = {'preview': '', 'show': false};
    this.createItem = this.createItem.bind(this);
    this.previewItem = this.previewItem.bind(this);
    this.toggleInterface = this.toggleInterface.bind(this);
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }
  toggleInterface() {
    let {show, preview} = this.state;
    this.setState({'show': !show, 'preview': preview});
  }
  previewItem() {
    let value = this.refs.item.value;
    let html = marked(value);
    this.setState({preview: html});
  }
  createItem() {
    let value = this.refs.title.value;
    let content = this.refs.item.value;
    if (value != '') {
      this.refs.title.value = '';
      this.refs.item.value = '';
      this.toggleInterface();
      this.props.onCreateItem({"title": value, "content": content});
    }
  }
  render() {
    if (this.state.show) {
      return (
        <div className="creator-component">
          <input ref="title" placeholder="enter your title"/><br/>
          <textarea ref="item" placeholder="enter the task">
          </textarea>
          <div>
            <div dangerouslySetInnerHTML={{__html: this.state.preview}} />
          </div>
          <button onClick={this.createItem}>Post</button>
          <button onClick={this.previewItem}>Preview</button>
          <button onClick={this.toggleInterface}>Cancel</button>
        </div>
      )
    } else {
      return (
        <div className="creator-component">
          <button onClick={this.toggleInterface}>Create New Entry</button>
        </div>
      )
    }

  }
}
