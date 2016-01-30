import React from 'react';
import Item from './item';

import './list.scss';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
        if (this.props.items.length === 0 ) {
          return (
            <div className="list-component">
              <h2>no entries right now</h2>
            </div>
          )
        } else {
          return (
            <div className="list-component">
              {
                this.props.items.map(function(item) {
                  return <Item item={item}
                            onDeleteItem={this.props.onDeleteItem}
                            onSaveItem={this.props.onSaveItem}/>
                }.bind(this))
              }
            </div>
          )
        }

  }
}
