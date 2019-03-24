import React, { Component } from 'react'
import Search from './Search'
import WeatherDetails from './WeatherDetails'
import '../App.css'


class App extends Component {
  state = {
    weather: null,
  }

  setWeatherDetails = (weather) => {
    this.setState ({weather})
  }

  render(){
    return (
      <div className='App'>
        <h1>React weather app prototype</h1>
        <Search className='searchField' onWeatherLoaded={this.setWeatherDetails} />
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
      </div>
    )
  }
  
}

export default App
