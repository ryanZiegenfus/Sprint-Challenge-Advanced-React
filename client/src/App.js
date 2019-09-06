import React from 'react';
import './App.css';
import axios from "axios";
import CardList from "./CardList";
import DarkMode from "./DarkMode";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {data: []},
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then (res => this.setState({person: res}))
  }

  render() {
      return (
        <div className="App">
          <DarkMode />
          <CardList className="cardList" person={this.state.person.data}/>
        </div>
      );
  }
}

export default App;
