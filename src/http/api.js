import React from "react";
import axios from "axios";
import { useState } from "react";

const api = axios.create({
  key: "fd1e121652c7ab46db85dd2da4181d31",
  baseURL:
    "https://api.openweathermap.org/data/2.5/weather?lat={44.55}&lon={55.77}&appid={${key}}}",
  // fd1e121652c7ab46db85dd2da4181d31

  //     //  "lon": 10.99,
  //         "lat": 44.34
});

export default api;
