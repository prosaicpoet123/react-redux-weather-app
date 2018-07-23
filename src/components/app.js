import React, { Component } from 'react';
import Search from '../containers/search';
import CurrentWeather from '../containers/current_weather';

export default class App extends Component {
  render() {
    return (
    	<div>
	      <Search />
	      <CurrentWeather />
	      </div>
    );
  }
}