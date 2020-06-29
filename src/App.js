import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      monsters: [
        {
          id:"00",
          name:"Frankenstein"
        },
        {
          id:"01",
          name:"Dracula"
        },
        {
          id:"02",
          name:"Zombie"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
     {this.state.monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)}
    </div>
    )
  }
}

export default App