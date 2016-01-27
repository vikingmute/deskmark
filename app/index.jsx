//import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import storage from './utils/storage';
import List from './components/list';
import Create from './components/create';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: storage.getAll()
    };
    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }
  createItem(item) {
    this.setState({items: this.state.items.concat([item])});
  }
  deleteItem(item) {
    let index = this.state.items.indexOf(item);
    if (index != -1) {
      this.state.items.splice(index, 1);
      this.setState({items: this.state.items});
    }
  }
  saveItem(item, title) {
    let index = this.state.items.indexOf(item);
    if (index != -1) {
      this.state.items[index].title = title;
      this.setState({items: this.state.items});
    }
  }
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Deskmark App</h3>
          <Create onCreateItem={this.createItem}/>
          <List items={this.state.items} onDeleteItem={this.deleteItem} onSaveItem={this.saveItem}/>
        </section>
      </div>
    );
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
