import React from 'react'

const WeatherDetails = props => (
	<React.Fragment>
		<div className='weatherDetails'>
			<h4>Weather Details</h4>
			<p>{props.city}, {props.country}</p>
		<table>
		<thead>
			<tr >
			<th>Temp Min</th>
			<th>Temp Max</th>
			<th>Humidity</th> 
			<th>Pressure</th>
			<th>Condition</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			<td>{props.minTemperature} <>&#x2103;</></td>
			<td>{props.maxTemperature} <>&#x2103;</></td>
			<td>{props.humidity} <>&#37;</></td>
			<td>{props.pressure} hPa</td>
			<td>{props.description}</td>
			</tr>
		</tbody>
		</table>
	</div>
	</React.Fragment>
)

export default WeatherDetails
