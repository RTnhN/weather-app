const search = prompt('What city');

async function getWeather(search) {
  const responseCity = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}`);
  const jsonCity = await responseCity.json();
  const { latitude } = jsonCity.results[0];
  const { longitude } = jsonCity.results[0];
  const { timezone } = jsonCity.results[0];
  const responseWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=${timezone}`);
  const jsonWeather = await responseWeather.json();
  console.log(jsonWeather);
}


getWeather(search);