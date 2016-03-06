/*
 * @file component shower
 */

/* eslint react/no-danger: 0 */

import './shower.scss';

import React, {PropTypes} from 'react';
import marked from 'marked';

const propTypes = {
  item: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

class Editor extends React.Component {

  render() {
    let { item, onEdit, onDelete } = this.props;

    if (item && item.id) {
      let content = marked(item.content);
      return (
        <div className="col-md-8 shower-component">
          <div className="control-area">
            <button onClick={() => onEdit(item.id)} className="btn btn-primary">编辑</button>
            <button onClick={() => onDelete(item.id)} className="btn btn-danger">删除</button>
          </div>
          <h2>{item.title}</h2>
          <div className="item-text">
            <div dangerouslySetInnerHTML={{__html: content}} />
          </div>
        </div>
      );
    }

    return (
      <div className="col-md-8 shower-component">
        <div className="no-select">请选择左侧列表里面的文章</div>
      </div>
    );
  }

}

Editor.propTypes = propTypes;

export default Editor;
