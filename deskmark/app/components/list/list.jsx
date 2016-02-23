import React, {PropTypes} from 'react';
import Item from './item';
import CreateBar from './createBar';
import './list.scss';

const propTypes = {
  items: PropTypes.array.isRequired,
  onOpenEditor: PropTypes.func.isRequired
};

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let items = this.props.items.map(item => {
      return (
        <Item item={item}
          key={item.id}
          onOpenEditor={this.props.onOpenEditor} />
      );
    });

    return (
      <div className="list-component col-md-4 list-group">
        <CreateBar onOpenEmptyEditor={this.props.onOpenEmptyEditor}/ >
        {items}
      </div>
    );
  }
}

List.propTypes = propTypes;

export default List;
