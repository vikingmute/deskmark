import React, {Component, PropTypes} from 'react';
import Item from './item';
import CreateBar from './createBar';
import './list.scss';

const propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {items, actions} = this.props;
    return (
      <div className="list-component col-md-4 list-group">
        <CreateBar {...actions}/ >
        {items.map(function(item) {
          return <Item key={item.id} item={item} {...actions}/ >;
        })}
      </div>
    );
  }
}

List.propTypes = propTypes;

export default List;
