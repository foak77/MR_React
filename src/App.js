import React, { Component } from 'react'
import './App.css';
import { CardList } from "../src/components/CardList/CardList"
import { SearchBox } from "../src/components/SearchBox/SearchBox"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonters = monsters.filter ( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
       <SearchBox 
       placeholder = "search monsters"
       handleChange= {e => this.setState({ searchField: e.target.value })}
       />
        <CardList monsters={filteredMonters} />
    </div>
    )
  }
}

export default App