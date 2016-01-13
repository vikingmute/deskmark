import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Deskmark App</h3>
        </section>
    </div>
    );
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
