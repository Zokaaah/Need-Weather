import React, { useState } from "react";

import "./App.css";
import clouds from "./images/clouds.png";
import sunny from "./images/sunny.png";
import rainy from "./images/rainy.png";
import mist from "./images/misty.png";
import tempe from "./images/max.png";
import weather_icon from "./images/weather.png";

import styles from "../src/Styles/index.module.css";
import Alert from "./components/Alert";
import useDebounce from "./Helpers/useDebounce";
import FindFlag from "./Helpers/FindFlag";

const api = {
  key: "fd1e121652c7ab46db85dd2da4181d31",

  baseURL: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [isError, setIsError] = useState(false);
  const [flagImage, setFlagImage] = useState("");

  const search = (evt) => {
    // if (evt.key === "Enter") {
    fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        setFlagImage("");
        setIsError(false);

        if (result.cod === "404") {
          setIsError(true);
          return;
        }

        const flag = FindFlag(result.sys.country);
        setFlagImage(flag);
        console.log(result);
      });
    // }
  };
  const DebouncedChange = useDebounce(search, 500);

  function climate() {
    const rainDay = weather.weather[0].main;
    const sunnyDay = weather.weather[0].main;
    const cloudDay = weather.weather[0].main;
    const mistDay = weather.weather[0].main;

    if (cloudDay === "Clouds") {
      return (
        <div>
          <img className={styles.icons} src={clouds} alt="" />
          <p>Nublado</p>
        </div>
      );
    } else if (sunnyDay === "Clear") {
      return (
        <div>
          <img className={styles.icons} src={sunny} alt="" />
          <p>Limpo</p>
        </div>
      );
    } else if (mistDay === "Mist") {
      return (
        <div>
          <img className={styles.icons} src={mist} alt="" />
          <p>Névoa</p>
        </div>
      );
    } else if (rainDay === "Rain") {
      return (
        <div>
          <img className={styles.icons} src={rainy} alt="" />
          <p>Chuvoso</p>
        </div>
      );
    }
  }

  return (
    <div className="App">
      {typeof weather.main != "undefined" ? (
        <div className={styles.local_container}>
          <div className={styles.local}>
            {weather.name} <img className={styles.flagimage} src={flagImage} alt=""/>
          </div>
          
        </div>
      ) : (
        <div className={styles.select_city}>
          <div className={styles.select_container}>
            <h1>
              Need <span className={styles.select_color}>Weather</span>
            </h1>
            <img className={styles.icons_select} src={weather_icon} alt="" />
          </div>
        </div>
      )}

      <div className={styles.search_box}>
        <input
          type="text"
          className={styles.search_bar}
          placeholder="Digite o nome da cidade"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyUp={DebouncedChange}
        />

        {isError && <Alert/>}
      </div>

      {typeof weather.main != "undefined" ? (
        <div className={styles.Weather_container}>
          <div className={styles.temp}>
            {Math.round(weather.main.temp)}
            {"°C"}
            <img className={styles.tempe} src={tempe} alt="" />
            <p className={styles.temp_max}> Max {weather.main.temp_max}</p>
            <p className={styles.temp_min}> Min {weather.main.temp_min}</p>
          </div>
          <div className={styles.weather}>{climate()}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
