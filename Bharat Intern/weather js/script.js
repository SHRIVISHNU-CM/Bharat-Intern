const api = "ed0cf96e18e995688131c0c79db52d5d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city=  document.querySelector('.city');
const temperature =  document.querySelector('.temperature')
const text = document.getElementById('text');
const humi= document.querySelector('.humi')
const wind=  document.querySelector('.windspeed')
const weatherupdate= document.querySelector('.weatherupdate')

const search = document.getElementById('search')
async function weather(cityname){

    const resp = await fetch(apiurl+ cityname + `&appid=${api}`);

    if(resp.status == 404){
        document.querySelector('.notfound').style.display = "block"
        document.querySelector('.main2').style.display = "none"
    }else{
        let data = await resp.json();
    console.log(data)
    city.innerHTML = data.name
    temperature.innerHTML = Math.round(data.main.temp)+`<sup>o</sup>C`
    humi.innerHTML = data.main.humidity+"%";
    wind.innerHTML = data.wind.speed+"Km/hr";
    weatherupdate.innerHTML = data.weather[0].description;
    document.querySelector(".main2").style.display = 'block'
    document.querySelector('.notfound').style.display = "none"
    }
}
search.addEventListener("click",()=>{
    weather(text.value);
    text.value= "";    
})