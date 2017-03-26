import React, { Component } from 'react';
import './App.css';
import ChildComponent from './childComponent';

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
        <h3>This is { textValue }</h3>
        <ChildComponent onChangeCallback={this.txtChange.bind(this)} />
      </div>
    );
  }
}

export default App;
