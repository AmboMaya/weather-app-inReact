import React from 'react'

const Forecast = (props) => {
    
    return(
    
    <React.Fragment>
		<div className='weatherDetails'>
			<h4>Weather Forecast</h4>
		<table>
		<tbody>
			<tr>
            {/* <td>{props.day}</td>
			<td>{props.temperature} <>&#x2103;</></td>
			<td>{props.description}</td> */}
			</tr>
		</tbody>
		</table>
	</div>
	</React.Fragment>
    )
}

export default Forecast