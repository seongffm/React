import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import './Ex13.css';

const Ex13 = () => {

    /** 
     * 화면에 실시간으로 날씨를 띄워보자. 
     * 
     * 1) 단톡에 올라온 주소로 url을 선언하자
     * 2) 화면이 렌더링 된 직후, 해당 url에 비동기적 통신을 해서 데이터를 가져오자. 
     *   - useEffect, axios 
     * 3) 데이터를 가져오는데 성공했다면, 해당 데이터들을 화면에 반영시켜보자. 
     *   - 기온 : 켈빈온도 - 273 => 섭씨온도 
     *   - 구름 : 0~30 맑음 / 31~60 약간 흐림 / 61~ 흐림 
     * 4) 다 된 사람들은 단톡방에 완료 체크 후, 디자인 자유롭게~ 
     *   - 디자인까지 완료된 사람들은 단톡방에 캡쳐해서 업로드 
     * 
     * Warning!! 
     * (1) import 하기 ★제발~ 
     * (2) 데이터를 꼭 console에 천천히, 한단계씩 출력해보고 접근하기 
     */

    const [weather, setWeather] = useState(null);
    const [weather2, setWeather2] = useState(null);

    useEffect(() => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=603aa562f93c1b6e5fb4e7596aa820d5`;

        let url2 = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=603aa562f93c1b6e5fb4e7596aa820d5`;

        axios
            .get(url)
            .then(res => {
                setWeather(res.data);
            })
        axios
            .get(url2)
            .then(res2 => {
                setWeather2(res2.data);
            })
    }, []);

    return (
        <div className="weather-container">
            <h1>🛫 오늘의 날씨는? 🛫</h1>
            <p>✨도시: seoul✨</p>
            {weather ? (
                <div className="weather-info">
                    <p className="temperature"> 현재 기온: {Math.round(weather.main.temp - 273.15)}°C </p>
                    <p className="feels-like"> 체감 기온: {Math.round(weather.main.feels_like - 273.15)}°C </p>
                    {weather.clouds && weather.clouds.all !== undefined && (
                        <p className="cloudiness">
                            {weather.clouds.all <= 30 ? '🌞 맑음' : (weather.clouds.all <= 60 ? '💨 약간 흐림 💨' : '🌚 흐림')}
                        </p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <br />
            <hr />
            <h1>🛫 오늘의 날씨는? 🛫</h1>
            <p>✨도시: Vancouver✨</p>
            {weather2 ? (
                <div className="weather-info">
                    <p className="temperature"> 현재 기온: {Math.round(weather2.main.temp - 273.15)}°C </p>
                    <p className="feels-like"> 체감 기온: {Math.round(weather2.main.feels_like - 273.15)}°C </p>
                    {weather2.clouds && weather2.clouds.all !== undefined && (
                        <p className="cloudiness">
                            {weather2.clouds.all <= 30 ? '🌞 맑음' : (weather2.clouds.all <= 60 ? '💨 약간 흐림 💨' : '🌚 흐림')}
                        </p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Ex13;
