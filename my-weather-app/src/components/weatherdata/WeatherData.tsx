const apiKey = 'eb58f7958543d47270277234019d256e';
const makeIconUrl = (iconId: number) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

export async function getWeatherData(cityChoice: string) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityChoice}&appid=${apiKey}`);
  const data = await res.json(); //fetching data from api
  // console.log(res);
  console.log(data);

  const { weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, wind: { speed }, sys: { country }, name } = data;
  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconUrl(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  }; // returning object with data defined
};