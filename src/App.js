import './App.css';
import './index.css';

import React, {Component}from 'react';

import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  handleChange=(e) => {
    this.setState({searchField:e.target.value})
  }

 componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    const{monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
    <div className="App">
      <h1>monsters rolodex</h1>
      <SearchBar className="search" placeholder="search monsters" handleChange={this.handleChange}/>
     <CardList className="card-list" monsters={filteredMonsters}/>
    </div>
    )
  }
}

export default App;
