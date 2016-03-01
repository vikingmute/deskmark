/* eslint react/no-danger: 0 */
import React, {PropTypes} from 'react';
import marked from 'marked';

import './editor.scss';

const propTypes = {
  item: PropTypes.object,
  onCreateItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onSaveItem: PropTypes.func.isRequired,
  onCancelCreate: PropTypes.func.isRequired
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editMode: false, createMode: false};
    this.deleteItem = this.deleteItem.bind(this);
    this.switchEdit = this.switchEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.createItem = this.createItem.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.item) {
      return;
    }
    if (!nextProps.item.id) {
      this.setState({editMode: true, createMode: true});
    } else {
      this.setState({editMode: false, createMode: false});
    }
  }
  switchEdit() {
    this.setState({editMode: true});
  }
  cancelEdit() {
    this.setState({editMode: false});
    if (this.state.createMode) {
      this.props.onCancelCreate();
    }
  }
  createItem() {
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    this.setState({editMode: false});
    this.props.onCreateItem({'title': title, 'content': content});
  }
  saveEdit() {
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    this.setState({editMode: false});
    this.props.onSaveItem(this.props.item.id, title, content);
  }
  deleteItem() {
    let check = window.confirm('确定要删除文章' + this.props.item.title + '吗?');
    if (check) {
      this.props.onDeleteItem(this.props.item);
    }
  }
  render() {
    let editMode = this.state.editMode;
    let createMode = this.state.createMode;
    let createOrEdit = null;
    if (createMode) {
      createOrEdit = <button onClick={this.createItem} className="btn btn-success">创建</button>;
    } else {
      createOrEdit = <button onClick={this.saveEdit} className="btn btn-success">保存</button>;
    }
    if (this.props.item) {
      if (editMode) {
        return (
          <div className="col-md-8 editor-component">
            <div className="control-area">
              {createOrEdit}
              <button onClick={this.cancelEdit} className="btn secondary">取消</button>
            </div>
            <div className="edit-area">
              <input ref="title" placeholder="请填写标题" defaultValue={this.props.item.title}/>
              <textarea ref="content"
                placeholder="请填写内容"
                defaultValue={this.props.item.content}/>
            </div>
          </div>
        );
      } else {
        let html = marked(this.props.item.content);
        return (
          <div className="col-md-8 editor-component">
            <div className="control-area">
              <button onClick={this.switchEdit} className="btn btn-primary">编辑</button>
              <button onClick={this.deleteItem} className="btn btn-danger">删除</button>
            </div>
            <h2>{this.props.item.title}</h2>
            <div className="item-text">
              <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="col-md-8 editor-component">
          <div className="no-select">请选择左侧列表里面的文章</div>
        </div>
      );
    }
  }
}

Editor.propTypes = propTypes;

export default Editor;
