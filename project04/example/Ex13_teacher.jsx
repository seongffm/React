import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import './Ex13.css';

const Ex13 = () => {

    const [city, setCity] = useState('')
    const [temp, setTemp] = useState(0)
    const [feelsLike, setFeelsLike] = useState(0)
    const [cloud, setCloud] = useState('')

    useEffect(() => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=Banff&appid=603aa562f93c1b6e5fb4e7596aa820d5`;

        axios
            .get(url)
            .then(res => {

                console.log(res.data) // 데이터 확인 용도

                setCity(res.data. name); // 도시 이름
                setTemp(parseInt(res.data.main.temp - 273)) // 현재 온도
                setFeelsLike(parseInt(res.data.main.feels_like - 273)) // 체감 온도
                console.log(res.data.clouds.all) // 구름의 양

                if (res.data.clouds.all <= 30) {
                    setCloud('🌞 맑음 🌞')
                } else if (res.data.clouds.all <= 60) {
                    setCloud('💨 약간 흐림 💨')
                } else {
                    setCloud('🌚 흐림 🌚')
                }
            })
    }, []);

    return (
        <div className="weather-container">
            <h1>🛫 오늘의 날씨는? 🛫</h1>
            <p>✨도시: {city}✨</p>
                <div className="weather-info">
                    <p className="temperature"> 현재 기온: {temp}°C </p>
                    <p className="feels-like"> 체감 기온: {feelsLike}°C </p>
                        <p className="cloudiness">{cloud}</p>
                </div>
        </div>
    );
}

export default Ex13;
