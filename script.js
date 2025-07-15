const apiKey = "da3366e0e57e4c1dbd0827226876e9fd";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherInfo").innerHTML = "City not found.";
      return;
    }

    const { name, main, weather, wind } = data;

    document.getElementById("weatherInfo").innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp} °C</p>
      <p><strong>Condition:</strong> ${weather[0].description}</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML = "Error fetching weather data.";
    console.error("Error:", error);
  }
  async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherInfo").innerHTML = "City not found or API issue.";
      return;
    }

    const { name, main, weather, wind } = data;

    document.getElementById("weatherInfo").innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp} °C</p>
      <p><strong>Condition:</strong> ${weather[0].description}</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    `;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("weatherInfo").innerHTML = "Error fetching weather data.";
  }
}

}
