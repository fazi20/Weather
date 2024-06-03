const APIKEY = `e9bc0b34f4308b88a5541f9a807aa32f`

// const API = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={APIKEY}`

// const IMG = `https://openweathermap.org/img/wn/10d@2x.png`

const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")



const getweather = async (city) => {
    weather.innerHTML = `<h1>Loading...</h1>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    showWeather(data)

}
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h1>City Not Found</h1>`
        return
    }
    weather.innerHTML = `
  <h1>${data.name}</h1>
    <div class="">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div class="">
    <h1>${Number(data.main.temp)}°C</h1>
        <h1>${data.weather[0].main}</h1>
    </div>`
}



form.addEventListener("submit", (event) => {
    getweather(search.value);
    search.value = "";
    event.preventDefault();


})