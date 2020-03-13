import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component.jsx';

class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "asc1"
        },
        {
          name: "Dracula",
          id: "asc2"
        },
        {
          name: "Zombie",
          id: "as1w"
        },
      ],
      searchField: '',
      action: false,
    };
  }

  componentDidUpdate(state) {
    // console.log(this.state)
  }

  componentDidMount() {

    this.filteredMonsters ()
    
  }

  filteredMonsters () {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      let {monsters} = this.state;
      var newData = Object.assign({monsters:monsters}, {monsters: users});
      this.setState(newData);
    }); 
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    });
  }

  render() {

    let {monsters, searchField} = this.state;
    
    const filteredMonsters  = monsters.filter(monster => {
     return  monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    
    return (<div className='App'>
      <h1>
        Monsters Rolodex
      </h1>

      <SearchBox placeholder='search monster' handleChange={this.onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>);
  }
}

export default App;
