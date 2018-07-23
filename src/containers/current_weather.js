import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentWeather extends React.Component {

  render() {
    return (
      <div className="weather-container">
      	<div className="weather-container-inner">
	      	<img src={this.props.weather ? 'https://openweathermap.org/img/w/' + this.props.weather.list[0].weather[0].icon + '.png' : ''} />
	        <h1>{this.props.weather ? this.props.weather.list[0].weather[0].description : ''}</h1>
          <h1>{this.props.weather ? this.props.weather.list[0].main.temp : ''} {this.props.weather ? <span> &#8451;</span> : '' }</h1>
        </div>
      </div>
      );
  }
};

function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(CurrentWeather);