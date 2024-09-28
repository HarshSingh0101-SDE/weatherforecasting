
const apiKey = "a76772e6530bd22df75ee0cf30a516b8"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

async function checkWeather(city){

    const response = await fetch(apiUrl +  city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(" h3").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#windSpeed").innerHTML = data.wind.speed + " Km/h";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#pressure").innerHTML = data.main.pressure + " mb";
    document.querySelector("#visibility").innerHTML = data.visibility + " km";
    document.querySelector("#weatherCondition").innerHTML = data.weather[0].main;
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})

