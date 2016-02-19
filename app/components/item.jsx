import React, {Component} from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {item, deleteEntry, openEditor} = this.props;
    return (
      <li>
        <a href="javascript:void(0)" onClick={() => openEditor(item.id)}>{item.title}</a>
        <button onClick={() => deleteEntry(item.id)}>Delete</button>
      </li>
    )
  }
}
