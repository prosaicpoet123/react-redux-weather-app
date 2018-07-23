import axios from 'axios';

const API_KEY = 'aefcdfa06577932c04e6034774701898';
const UNITS = 'metric';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=${UNITS}&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city}`;

	const request = axios.get(url)
	.catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}