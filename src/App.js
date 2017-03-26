import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      txt: ''
    };
  }

  txtChange(event){
    this.setState({
      txt: event.target.value
    });
  }

  render() {
    let textValue = this.state.txt || 'some pre-defined text';

    return (
      <div className="App">
        <input type="text" onChange={this.txtChange.bind(this)}/>
        <h3>This is { textValue }</h3>
      </div>
    );
  }
}

export default App;
