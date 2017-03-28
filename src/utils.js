const ConfigKey = '82d6dc51726be0cb208decd76795e86f';
// const ConfigKey = 'd0161a30c8b63e155e4e8be1ebbe7f54';
// const ConfigKey = 'a02b544ea4aac2a0e3b5b529fd0f9ab4';
// const ConfigKey = '87e05f1f368be8d9a22c0a427865565d';
// new account key
// const ConfigKey = '06c586c11aa27db76e5445c34026c909';

export function requestUsersLocation () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      let CoordinatesData = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };
      resolve(CoordinatesData);
    }, (err) => {
      console.log(err);
      reject('Access denied. Please provide access to your location.');
    });
  });
}

export const API_BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
let count = 'cnt=14';

export function fetchGeoData ({latitude, longitude}) {
  console.log('fetching geo data ', latitude, longitude);

  let queryURL = `${API_BASE_URL}/?`;
  let lat = `lat=${latitude}`;
  let lon = `lon=${longitude}`;

  return new Promise((resolve, reject) => {
    fetch(`${queryURL}${lat}&${lon}&${count}&APPID=${ConfigKey}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    });
  });
}
