const apiKey = API_KEY;
const apiUrl = API_url;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  if (city === "") return;

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = (data.wind.speed * 3.6).toFixed(1) + " km/h";

  if (data.weather[0].main === "Clouds") weatherIcon.src = "images/clouds.png";
  else if (data.weather[0].main === "Clear") weatherIcon.src = "images/clear.png";
  else if (data.weather[0].main === "Rain") weatherIcon.src = "images/rain.png";
  else if (data.weather[0].main === "Drizzle") weatherIcon.src = "images/drizzle.png";
  else if (data.weather[0].main === "Mist") weatherIcon.src = "images/mist.png";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
