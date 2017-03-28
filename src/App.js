import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      data_available: false
    };

    this.forSubmit = this.forSubmit.bind(this);
  }

  forSubmit(event){
    event.preventDefault();
  }

  render() {

    const available_str = 'available';
    const not_available_str = 'not available';

    return (
      <div className="App">
        <form onSubmit={this.forSubmit}>
          <input type="text" ref="cityInput" />
          <button type="submit">Search</button>
        </form>
        <h3>
          Search result {this.state.data_available ? available_str : not_available_str }
        </h3>
      </div>

    );
  }
}

export default App;
