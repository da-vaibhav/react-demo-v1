import React, { Component } from 'react';
import './App.css';
import { requestUsersLocation, fetchGeoData } from './utils';
import WeatherData from './WeatherData';
import CurrentCity from './CurrentCity';

class App extends Component {
  constructor(){
    super();

    this.state = {
      data_available: false,
      location_available: false,
      location_data: {
        lat: null,
        long: null
      },
      response_data: null
    };

    this.forSubmit = this.forSubmit.bind(this);
  }

  forSubmit(event){
    event.preventDefault();
    requestUsersLocation()
    .then((location_data) => {
      this.setState({
        location_available: true,
        location_data: {
          lat: location_data.lat,
          lon: location_data.lon
        }
      });
      return { latitude: location_data.lat,
               longitude: location_data.lon
            };
    })
    .then(fetchGeoData)
    .then((data) => {
      this.setState({
        data_available: true,
        response_data: data
      })
    });
  }

  render() {

    const available_str = ' available';
    const not_available_str = ' not available';

    return (
      <div className="App">
        <form onSubmit={this.forSubmit}>
          <input type="text" ref="cityInput" />
          <button type="submit">Search</button>
        </form>
        <h3>
          Your location is
          { this.state.location_available
            ? (` Lat:${this.state.location_data.lat} Lon:${this.state.location_data.lon}`)
            : not_available_str }
        </h3>

        <h3>
          Search result {this.state.data_available ? available_str : not_available_str }
        </h3>

        <CurrentCity cityData={this.state.response_data}/>

        <WeatherData data={this.state.response_data} />
      </div>

    );
  }
}

export default App;
