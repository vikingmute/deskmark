import React from 'react';
import Item from './item';

import './list.scss';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list-component col-md-4 list-group">
        <a href="#" onClick={this.props.onOpenEmptyEditor} className="list-group-item create-entry">
          + 创建新的文章
        </a>
        {
          this.props.items.map(function(item) {
            return <Item item={item}
                      onOpenEditor={this.props.onOpenEditor}/>
          }.bind(this))
        }
      </div>
    )
  }

}
