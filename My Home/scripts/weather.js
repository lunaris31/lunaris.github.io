const API_KEY = "c1bf09d92e05d28b4b62dcf290a04225"
const weather = document.querySelector(".weather");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weather.innerText = `${data.name} City / ${data.weather[0].main} / ${data.main.temp}`;
        });
}
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);