import React, {
  Component
} from "react";

import {
  CardList
} from "./components/card-list/card-list.component";

import {
  SearchBox
} from "./components/search-box/searchbox.component";


import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''

    };
    // State Binding
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({
        monsters: users
      }));
  }

  handleChange = e => {
    //In case of arrow functions this keyword scope is 
    //automatically bound to parent where it is called for first time 
    this.setState({
      searchfield: e.target.value
    });
  }

  render() {
    const {
      monsters,
      searchfield
    } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return ( < div className = "App" >
      <
      h1 > Monsters Rolodex < /h1 > <
      SearchBox placeholder = 'search monsters'
      handleChange = {
        this.handleChange
      }
      /> <
      CardList monsters = {
        filteredMonsters
      }
      /></div >
    );
  }
}
export default App;