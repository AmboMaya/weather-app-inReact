import React, { Component } from 'react'
import Search from './Search'
import WeatherDetails from './WeatherDetails'
import '../App.css'
// import Forecast from './Forecast'

class App extends Component {
  state = {
    weather: null,
    forecast: null
  }

  setWeatherDetails = (weather) => {
    this.setState ({weather})
  }

  setWeatherForecast = (forecast) => {
    this.setState({forecast})
  }

  render(){
    return (
      <div className='App'>
        <h1>React weather app prototype</h1>
        <Search className='searchField' onWeatherLoaded={this.setWeatherDetails} onForecastLoaded={this.setWeatherForecast}/>
        {this.state.weather ? 
          <WeatherDetails 
            temperature={this.state.weather.temperature} 
            humidity={this.state.weather.humidity} 
            city={this.state.weather.city}
            country={this.state.weather.country}
            description={this.state.weather.description}
            minTemperature={this.state.weather.temp_min}
            maxTemperature={this.state.weather.temp_max}
            pressure={this.state.weather.pressure}
            error={this.state.weather.error}/> 
            : null 
        }
      
        {/* <Forecast /> */}
        {/* {this.state.weather ?
          <Forecast 
              day={this.state.forecast.date}
              temperature={this.state.forecast.temp}
              description={this.state.forecast.description}
              />
            : null
        } */}
      </div>
    )
  }
  
}

export default App
