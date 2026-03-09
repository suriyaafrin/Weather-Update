const apiKey="be93a431a27ec67ace54d31b90bb7bb1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=matric&q=";
const sec=document.querySelector(".sec");
const sec_1=document.querySelector(".sec_1");
const units =document.querySelector(".units");
const weather_img=document.querySelector(".weather_img");
async function showWeather(city) {
    const reponse=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await reponse.json();
    console.log(data);
    document.querySelector(".left-part h4").innerHTML=data.name;
    document.querySelector(".right-part p").innerHTML=Math.round(data.main.temp-273.15) +"° c";
    document.querySelector(".feels p:last-child").innerHTML=Math.round(data.main.feels_like-273.15)+"° c";
    document.querySelector(".humidity p:last-child").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind p:last-child").innerHTML=data.wind.speed +"km/h";
    if(data.weather[0].main=="Clouds"){
        weather_img.src="https://static.vecteezy.com/system/resources/previews/016/642/177/original/cloudy-weather-icon-free-vector.jpg";
    }
    else if(data.weather[0].main=="Clear"){
        weather_img.src="https://cdn-icons-png.flaticon.com/128/6974/6974833.png";
    }
    else if(data.weather[0].main=="Rain"){
        weather_img.src="https://cdn-icons-png.flaticon.com/128/17798/17798731.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weather_img.src="https://cdn-icons-png.flaticon.com/128/2059/2059322.png";
    }
     else if(data.weather[0].main=="Mist"){
        weather_img.src="https://th.bing.com/th/id/OIP.aA6Wg4-QUH5qcZnXXeBRxAHaHa?w=183&h=183&c=7&r=0&o=7&pid=1.7&rm=3";
    }
}

sec_1.addEventListener("click",()=>{
    showWeather(sec.value);
})