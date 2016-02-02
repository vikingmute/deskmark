import React from 'react';
import marked from 'marked';
export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editMode: false};
    let time = this.props.item.time;
    this.formatTime = new Date(time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    this.openEditor = this.openEditor.bind(this);
  }
  openEditor() {
    this.props.onOpenEditor(this.props.item);
  }
  render() {
    return (
      <a href="#"  className="list-group-item item-component" onClick={this.openEditor}>
        <span className="label label-default label-pill pull-xs-right">{this.formatTime}</span>
        {this.props.item.title}
      </a>
    )
  }
}
