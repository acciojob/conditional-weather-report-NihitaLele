
import React, { useState, useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const def = {temperature : 1, conditions : "cool"}

const App = () => {

  const [data, setData] = useState(def);

  useEffect(()=>{
    setTimeout(()=>{
      setData({ temperature: 25, conditions: "Sunny" })
    }, 1000)
  })

  return (
    <div>
        <WeatherDisplay data = {data} />
    </div>
  )
}

export default App
