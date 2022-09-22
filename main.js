const container = document.querySelector(".container");
const card = document.querySelector(".card");
const cityName = document.querySelector(".cityName");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feelsLike");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const form = document.querySelector(".form");
const search = document.getElementById("search");

form.addEventListener("submit", SearchWeatherByCity);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  card.style.display = "grid";
});

async function SearchWeatherByCity() {
  let searchValue = search.value; // Create a variable with the input value
  if (!searchValue) {
    searchValue = "Gainesville"; // If the value is empty, we put the 'random' value
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=327aafdf4dda20dbcc0268009e351b2e&units=imperial`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  cityName.innerText = weatherData.name;
  temperature.innerText = weatherData.main.temp + " °F";
  feelsLike.innerText = "Feels like: " + weatherData.main.feels_like + " °F";
  humidity.innerText = "Humidity: " + weatherData.main.humidity + " %";
  wind.innerText = "Wind: " + weatherData.wind.speed + " mph";
}
