const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form=document.querySelector("form")
const search=document.querySelector("#search")
const weather=document.querySelector("#weather")
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getweather = async(city)=>{
    weather.innerHTML="Loading...!"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response= await fetch(url);
    const data=await response.json()
    return showWeather(data)
}
const showWeather=(data)=>{
      if(data.cod=="401"){
        weather.innerHTML=`<h2>City Not Found</h2>`
        return;
      }
      else if(data.cod=="0"){
        weather.innerHTML=`<h2>enter the location..!</h2>`
      }
    weather.innerHTML=`
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} °C</h2>
        <h5> Feels like ${data.main.feels_like}</h5>
    </div> `
}
form.addEventListener(
    "submit",
    function(event){
        getweather(search.value);
        event.preventDefault();
    }  
)