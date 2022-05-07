import './style.css';

async function getWeather() {
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.28&longitude=-95.34&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FChicago');
  const json = await response.json();
  console.log(json);
}

getWeather();