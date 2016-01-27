import React from 'react';
import marked from 'marked'
export default class Create extends React.Component{
  constructor(props) {
    super(props);
    this.createItem = this.createItem.bind(this);
    this.previewItem = this.previewItem.bind(this);
    this.state = {preview: ''};
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
  previewItem() {
    let value = this.refs.item.value;
    let html = marked(value);
    this.setState({preview: html});
  }
  createItem() {
    let value = this.refs.item.value;
    if (value != '') {
      this.props.onCreateItem({"id": 3, "title": value});
    }
  }
  render() {
    return (
      <div>
        <input ref="title" placeholder="enter your title"/><br/>
        <textarea ref="item" placeholder="enter the task">
        </textarea>
        <div>
          <div dangerouslySetInnerHTML={{__html: this.state.preview}} />
        </div>
        <button onClick={this.createItem}>Create</button>
        <button onClick={this.previewItem}>Preview</button>
      </div>
    )
  }
}
