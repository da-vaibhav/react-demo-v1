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
