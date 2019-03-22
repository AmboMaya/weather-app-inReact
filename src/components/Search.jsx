import React, { Component } from 'react'
import WeatherDetails from './WeatherDetails'
import request from 'superagent'

// import Forecast from './Forecast'

const apiKey = "30f7d6bf3fa61ff34cadd980de4c718c"
    


class Search extends Component {
    state = { 
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: false,
        temp_min: undefined,
        temp_max: undefined,
        pressure: undefined,
        inputCity: '',
        searchedCity: ''
    }

    searchHandler = (e) => {
        this.setState({inputCity : e.target.value})
    }

    handleSubmit = (e) => {
        this.setState({searchedCity : this.state.inputCity}, this.fetchWeather)
        e.preventDefault()
    }

    fetchWeather = () => {
        request.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchedCity}&appid=${apiKey}&units=metric`)
            .then(res => {
                console.log(res)
                let data = res.body   
                    this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    pressure: data.main.pressure,
                })

                // const data = res.json()
                // if (this.state.searchedCity) {
                //     this.setState({
                //         temperature: data.main.temp,
                //         city: data.name,
                //         humidity: data.main.humidity,
                //         description: data.weather[0].description,
                //         error: ''
                //     })
                // } else {
                //     this.setState({
                //         temperature: undefined,
                //         city: undefined,
                //         humidity: undefined,
                //         description: undefined,
                //         error: 'Unable to find location'
                //     })
                // }
            })
    }

    
    // }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type='text' name='search' placeholder='search city' 
                            onChange={this.searchHandler} 
                            value={this.state.inputCity} />
                    </label>
                    <button type='submit' value='Submit'> Find City </button>
                </form>
                {/* {!this.state.error ? <p>Unable to find location</p> : null} */}
                {!this.state.temperature ? 
                    null :
                    <WeatherDetails temperature={this.state.temperature} 
                        humidity={this.state.humidity} 
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description}
                        minTemperature={this.state.temp_min}
                        maxTemperature={this.state.temp_max}
                        pressure={this.state.pressure}
                        error={this.state.error}/> 
                }
            </div>
        )
    }
}
 
export default Search