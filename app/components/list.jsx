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
            <div className="row">
              {
                this.props.items.map(function(item) {
                  return <div className="card" key={item.id}>
                      <Item item={item}
                            onDeleteItem={this.props.onDeleteItem}
                            onSaveItem={this.props.onSaveItem}/>
                        </div>
                }.bind(this))
              }
            </div>
          )
        }

  }
}
