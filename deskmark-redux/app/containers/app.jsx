import React, {PropTypes}from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import List from '../components/list';
import Editor from '../components/editor';
import * as ItemActions from '../actions';
import './app.scss';

const propTypes = {
  main: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {main, actions} = this.props;
    return (
      <section className="desk-mark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">Deskmark App</a>
        </nav>
        <div className="container">
          <div className="row">
            <List items={main.items} actions={actions} />
            <Editor item={main.item} actions={actions} />
          </div>
        </div>
      </section>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    main: state.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ItemActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
