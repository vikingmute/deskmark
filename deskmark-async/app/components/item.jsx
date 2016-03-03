import React, {Component, PropTypes} from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  deleteEntry: PropTypes.func.isRequired,
  openEditor: PropTypes.func.isRequired
};

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {item, deleteEntry, openEditor} = this.props;
    let formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    return (
      <a href="javascript:void(0)"
        className="list-group-item item-component"
        onClick={() => openEditor(item.id)}>
        <span className="label label-default label-pill pull-xs-right">
          {formatTime}
        </span>
        {item.title}
      </a>
    );
  }
}

Item.propTypes = propTypes;

export default Item;
