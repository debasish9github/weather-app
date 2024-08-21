const apikey = "632aa1e4e9477461b8e2b08a699d6ed6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city = "Delhi") {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (!response.ok) {
        alert("City not found");
        return;
    }
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img_file/clouds icon.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img_file/clear-sky.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img_file/heavy-rain.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img_file/mist.png";
    } else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "img_file/Haze.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather();
