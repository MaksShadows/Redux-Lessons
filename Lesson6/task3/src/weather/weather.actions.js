import getWeatherData from "./weather.gateway";


export const WEATHER_DATA_RECEIVED = "WEATHER/WEATHER_DATA_RECEIVED";

export const weatherDataReceived = (weatherData) => {
    return {
        type: WEATHER_DATA_RECEIVED,
        payload: {
            weatherData,
        },
    };
};


export const getWeatherData = () => {
    return function (dispatch) {
        fetchWeatherData()
            .then(weatherData => dispatch(weatherDataReceived(weatherData)))
    }
}