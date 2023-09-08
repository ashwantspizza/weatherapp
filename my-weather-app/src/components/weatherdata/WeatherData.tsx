const apiKey = 'eb58f7958543d47270277234019d256e';

interface WeatherDataProps {
  description: string;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  temp: number;
  pressure: number;
  humidity: number;
  speed: number;
  country: string;
  name: string;
}

const WeatherData: React.FC<WeatherDataProps> = ({
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
}) => {
  return (
    <div>
      <p>Description: {description}</p>
      <p>Temperature: {temp}</p>
      <p>Feels Like: {feels_like}</p>
      <p>Min Temperature: {temp_min}</p>
      <p>Max Temperature: {temp_max}</p>
      <p>Pressure: {pressure}</p>
      <p>Humidity: {humidity}</p>
      <p>Wind Speed: {speed}</p>
      <p>Country: {country}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default async function getWeatherData(cityChoice: string) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={cityChoice}&appid=${apiKey}`);
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