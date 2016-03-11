/*
 * @file component List
 */

import React, {PropTypes} from 'react';
import ListItem from 'components/ListItem';
import CreateBar from 'components/CreateBar';

const propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired
};

function List ({ items, onSelect, onCreate }) {
  items = items.map(
    item => (
      <ListItem
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

List.propTypes = propTypes;

export default List;