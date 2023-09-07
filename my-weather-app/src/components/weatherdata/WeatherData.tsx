const apiKey = 'eb58f7958543d47270277234019d256e';

export default async function getWeatherData(cityChoice: string) {
  const res = await fetch(`$https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`);
  const data = await res.json();
  // console.log(res);

  if (res.ok) { 
    const { weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, wind: { speed }, sys: { country }, name } = data;
  const { description } = weather[0];

  return {
    description,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
} else {
  throw new Error('failed to fetch data for city ${cityChoice}');
}
}