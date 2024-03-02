
const API_KEY = "b851ddc5c1768f9eb17a6699105779b3";

function onGeoOk(position) {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError() {
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

