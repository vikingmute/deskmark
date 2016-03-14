import React, {PropTypes}from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import List from 'components/List';
import ItemShowLayer from 'components/ItemShowLayer';
import ItemEditor from 'components/ItemEditor';
import * as actionCreators from '../actions';
import './app.scss';

const propTypes = {
  main: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {actions} = this.props;
    actions.fetchPosts();
  }
  render() {
    const {main, actions} = this.props;
    let editing = main.editor.isEditing;
    let selectedId = main.editor.selectedId;
    let item;
    if (selectedId) {
      item = main.items.data.find((item) => item.id === selectedId);
    }
    let mainPart = editing
      ? <ItemEditor
          item={item}
          onSave={actions.saveEntry}
          onCancel={actions.cancelEdit}
        />
      : <ItemShowLayer
          item={item}
          onEdit={actions.editEntry}
          onDelete={actions.deleteEntry}
        />;
    return (
      <section className="desk-mark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">Deskmark App</a>
        </nav>
        <div className="container">
          <div className="row">
            <List
              items={main.items.data}
              onSelect={actions.selectItem}
              onCreate={actions.createNewEntry}
            />
            {mainPart}
          </div>
        </div>
      </section>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    main: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
