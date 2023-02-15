
export const fetchWeather = (location: {latitude: number, longitude: number}) => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '73745e4ec0msh21a5bb0b2dfb777p1b13b7jsne2385a2b3e89',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  }

  return fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location?.latitude},${location?.longitude}&days=3`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err))
}

