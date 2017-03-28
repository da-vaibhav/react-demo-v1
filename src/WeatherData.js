import React from 'react';

// stateless function Component
// relies completely on props(arguments passed to it) and returns html from it

const WeatherData = (props) => {
  let listEl;

  if(props.data) {
    listEl = props.data.list.map((el, id) => {
     return(
       <li key={id}>
        {el.weather[0].description}
       </li>
     );
   });
  }

  return (
    <ul>
      {listEl}
    </ul>
  )
}

export default WeatherData;
