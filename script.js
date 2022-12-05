
var cite = document.querySelector("input")
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = async (city) => {
	try {

	  const URL = "https://api.openweathermap.org/data/2.5/weather";

	  const response = await fetch(`${URL}?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`)
	  //https://api.openweathermap.org/data/2.5/weather?q=london&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
	  const data =  await response.json()
	  // console.log(data)
	  return data
	} catch {
		cityName.innerText = "Not a city!"
	}
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;

  const data1 = await getWeatherData(city)
  showWeatherData(data1)
  console.log(data1)
}


const showWeatherData = (weatherData) => {

  let cityName = document.getElementById("city-name")
  let weatherType = document.getElementById("weather-type")
  let temperature = document.getElementById("temp")
  let minTemp = document.getElementById("min-temp")
  let maxTemp = document.getElementById("max-temp")
  let long = document.getElementById("long")
  let lat = document.getElementById('lat')

  cityName.innerText = weatherData.name
  if (weatherData.name == undefined) {
  	cityName.innerText = "Please, input a valid city."
  }
  weatherType.innerText = weatherData.weather[0].main
  temperature.innerText = weatherData.main.temp
  maxTemp.innerText = weatherData.main.temp_max
  minTemp.innerText = weatherData.main.temp_min
  long.textContent = weatherData.coord.lon
  lat.textContent = weatherData.coord.lat

}

const keypress = (e) => {
	if(e.which == 13) {
		searchCity()
	}
}
cite.addEventListener("keypress", keypress)