const ConfigKey = '82d6dc51726be0cb208decd76795e86f';

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
