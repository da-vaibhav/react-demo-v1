import React from 'react'

const CurrentCity = (props) => {
  return (
    <div>
      Your city name 
      {
          props.cityData
        ? `: ${props.cityData.city.name}`
        : ' 🤔'
      }
    </div>
  )
}

export default CurrentCity;
