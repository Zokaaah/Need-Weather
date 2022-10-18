import './App.css';
import bkg from "./images/bkg.jpg"

import React, {useState} from 'react'
import styles from '../src/Styles/index.module.css'

const api = {
  key: "fd1e121652c7ab46db85dd2da4181d31",

  baseURL: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const date = new Date().toLocaleString();

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

 
  return (
    <div className="App">
      <main>
        {(typeof weather.main != "undefined") ?(
                  <div className={styles.local_container}>
                <div className={styles.local}>{weather.name}, {weather.sys.country}</div>
                <div className={styles.data}>{date}</div>
            </div>
):('')}

            <div className={styles.search_box}>
                <input type="text"
                 className={styles.search_bar}
                placeholder='Digite o nome da cidade'
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyUp={search}
                   />
            </div>

           
            {(typeof weather.main != "undefined") ?(

            <div className={styles.Weather_container}>
                <div className={styles.temp}>{Math.round(weather.main.temp)}{"°"}</div>
                <div className={styles.weather}>{weather.weather[0].main}</div>

            </div>
            ):('')}
        </main>
    </div>
  );
}

export default App;
