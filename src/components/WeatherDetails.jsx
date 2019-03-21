import React from 'react'

const WeatherDetails = props => (
  <div>
    <ul>
      {props.city && <p>Location: {props.city}</p>}
      {props.temperature && <p> Temperature: {props.temperature} <>&#x2103;</></p>}
      {props.humidity && <p> Humidity: {props.humidity} </p>}
      {props.description && <p> Condition: {props.description} </p>}
      {props.minTemperature && <p>Temp Min: {props.minTemperature} <>&#x2103;</> </p>}
      {props.maxTemperature && <p>Temp Max: {props.maxTemperature} <>&#x2103;</> </p>}
      {props.pressure && <p>Pressure: {props.pressure} hPa</p>}
      {props.error && <p>{props.error}</p>}
    </ul>
  </div>
)

export default WeatherDetails
