import React, {Component} from 'react';
import Item from './item';

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {items, actions} = this.props;
    console.log(items);
    return (
      <div>
        <h1> this is my list</h1>
        {items.map(function(item) {
          return <Item key={item.id} item={item} {...actions}/>
        })}
      </div>
    )
  }
}
