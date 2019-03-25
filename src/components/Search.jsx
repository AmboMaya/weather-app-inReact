import React, { Component } from 'react'
import request from 'superagent'


const apiKey = "30f7d6bf3fa61ff34cadd980de4c718c"

class Search extends Component {
    state = {
        inputCity: '',
        searchedCity: ''
    }

    searchHandler = (e) => {
        this.setState({inputCity : e.target.value})
    }

    handleSubmit = (e) => {
        this.setState({searchedCity : this.state.inputCity}, this.fetchWeather, this.fetchweatherForecast)
        e.preventDefault()
    }

    fetchWeather = () => {
        request.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchedCity}&appid=${apiKey}&units=metric`)
            .then(res => {
                console.log(res)
                let data = res.body
                this.props.onWeatherLoaded({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    pressure: data.main.pressure,
                })
            })
            .catch(err => {
                if(err) {
                    alert('Unable to find city')
                }
        })
    }

    //*** Left here on purpose to show progress on forecast ***//
    // fetchweatherForecast = () => {
    //     request.get(`api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.props.searchedCity}&appid=${apiKey}mode=xml&units=metric&cnt=5`)
    //         .then(res => {
    //             console.log(res)
    //             let data = res.body
    //             this.props.onForecastLoaded(
    //                 data.list.map(day => ({
    //                     date: day.dt,
    //                     temp: day.temp.max,
    //                     description: day.weather[0].description})
    //                 )
    //             )
    //         })
    // }


    render() {
        return (
            <div className='searchField'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type='text' name='search' placeholder='search city'
                            onChange={this.searchHandler}
                            value={this.state.inputCity} />
                    </label>
                    <button type='submit' value='Submit'> Find City </button>
                </form>
            </div>
        )
    }
}

export default Search
