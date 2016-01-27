import React from 'react';
import Item from './item';
export default class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
        if (this.props.items.length === 0 ) {
          return (
            <h2>no entries right now</h2>
          )
        } else {
          return (
            <ul>
              {
                this.props.items.map(function(item) {
                  return <li key={item.id}>
                      <Item item={item}
                            onDeleteItem={this.props.onDeleteItem}
                            onSaveItem={this.props.onSaveItem}/>
                    </li>
                }.bind(this))
              }
            </ul>
          )
        }

  }
}
