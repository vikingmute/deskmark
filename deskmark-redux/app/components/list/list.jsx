/*
 * @file component list
 */

import './list.scss';

import React, {PropTypes} from 'react';
import Item from './item';
import CreateBar from './create-bar';

const propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired
};

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { items, onSelect, onCreate } = this.props;

    items = items.map(
      item => (
        <Item
          item={item}
          key={item.id}
          onClick={() => onSelect(item.id)}
        />
      )
    );

    return (
      <div className="list-component col-md-4 list-group">
        <CreateBar onClick={onCreate} />
        {items}
      </div>
    );
  }
}

List.propTypes = propTypes;

export default List;
