import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import List from '../components/list';
import Editor from '../components/editor';
import * as ItemActions from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {main, actions} = this.props;
    return (
      <div>
        <Editor item={main.item} actions={actions}/>
        <List items={main.items} actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    main: state.data
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ItemActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
