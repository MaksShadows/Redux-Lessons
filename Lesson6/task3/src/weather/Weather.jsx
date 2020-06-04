import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { weatherDataSelector } from "./weather.selectors";
import * as weatherActions from "./weather.actions";

const Weather = ({ weatherData }) => {

    if(!weatherData){
        return null
    }

    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {weatherData.map((cityObj) => (
                    <li key={cityObj.id} className="city">
                        <span className="city__name">{cityObj.name}</span>
                        <span className="city__temperature">
                            {`${cityObj.temperature} F`}
                        </span>
                    </li>
                ))}
            </ul>
        </main>
    );
};

Weather.propTypes = {
    getWeatherData: PropTypes.func.isRequired,
    weatherData: PropTypes.shape()
};

const mapState = (state) => {
    return {
        weatherData: weatherDataSelector(state),
    };
};

const mapDispatch = {
    getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
