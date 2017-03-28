import React from 'react'

const CurrentCity = (props) => {
  return (
    <div>
      Your location
      {
          props.cityData
        ? props.cityData.city.name
        : ' 🤔'
      }
    </div>
  )
}

export default CurrentCity;
