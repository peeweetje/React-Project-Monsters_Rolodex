import './App.css';
import './index.css';

import React, {useState, useEffect}from 'react';

import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';

const App = () => {
  const[monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState("");

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));


   const handleChange = (e) => {
   setSearchField(e.target.value)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, []);


    return(
    <div className="App">
      <h1>monsters rolodex</h1>
      <SearchBar className="search" placeholder="search monsters" handleChange={handleChange}/>
     <CardList className="card-list" monsters={filteredMonsters}/>
    </div>
    )
  
    }

export default App;
