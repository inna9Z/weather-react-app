
import PropTypes from 'prop-types';
import Day from '../components/Day.jsx';
import organizeWeather from '../utils/OrganizeWeather.js';

import './Weather.css'


const Weather = ({ weather }) => {
    const weatherData = organizeWeather(weather);

    return (
        <div >
            <div className="day-hours">Day | Hours</div>
            {weatherData.days &&
                Object.entries(weatherData.days).map(([key, value], index) => (
                    <Day key={index} day={key} dayInfo={value} />
                ))}
        </div>
    );
};

Weather.propTypes = {
    weather: PropTypes.object.isRequired,
};

export default Weather
