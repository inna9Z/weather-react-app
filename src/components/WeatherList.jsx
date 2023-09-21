
import axios from 'axios';

import { useEffect, useState } from 'react';
import Loading from '../components/Loading.jsx';
import Weather from '../components/Weather.jsx';
import './WeatherList.css'

const WeatherList = () => {
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getWeather = async () => {
            try {
                const res = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=50.8503&longitude=4.3517&hourly=temperature_2m');
                if (res.status === 200) {
                    setWeatherInfo(res.data);
                } else {
                    throw new Error(`Failed to get weather ${res.status}`);
                }
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        };
        getWeather();

    }, []);
    return (
        <div >
            {loading && <Loading />}
            {error && <p className="error">{error}</p>}
            {weatherInfo && <Weather weather={weatherInfo} />}

        </div>
    )
}



export default WeatherList
