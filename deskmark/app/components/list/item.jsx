import React, {PropTypes} from 'react';
import marked from 'marked';

const propTypes = {
  item: PropTypes.object.isRequired,
  onOpenEditor: PropTypes.func.isRequired
};

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {item, onOpenEditor} = this.props;
    let formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    return (
      <a href="#"
        className="list-group-item item-component"
        onClick={() => onOpenEditor(item) }>
        <span className="label label-default label-pill pull-xs-right">
          {formatTime}
        </span>
        {item.title}
      </a>
    )
  }
}

Item.propTypes = propTypes;

export default Item;
