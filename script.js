const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6eeefe1981msh7aee15c5819a3a3p16b938jsna2bfd1a49817',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
CityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {


        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        //wind_speed.innerHTML = response.wind_speed
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
temp.innerHTML = response.temp


if(temp==28)
{
    document.getElementById("weatherimg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')"
}
else{
    document.getElementById("weatherimg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')"
}
