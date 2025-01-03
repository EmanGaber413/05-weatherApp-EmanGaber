
fetch ( "http://api.weatherapi.com/v1/forecast.json?key=e5b88cfc6deb4446b4c111428242412&q=alex&days=3&aqi=no&alerts=no")
.then (function (text) {return text.json()

})
.then (function (posts) {  

    let localDate = new Date(posts.location.localtime);
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = daysOfWeek[localDate.getDay()]; 

    let htmlcollection= ` 
    <div class=" grayDark row justify-content-between g-0 px-3" style="height: 60px; width: 100%; ">
  <h4 class=" gray col-3 pt-2  "> ${dayName}</h4>
  <h4 class=" gray col-lg-2 col-4 pe-sm-0 end-0 pt-2 ">${posts.location.localtime}</h4>
</div>`
document.querySelector("#showTitle").innerHTML=htmlcollection;




let htmlcollection2= ` 
<div class=" content  blue  " style="height: 320px; overflow: hidden;" ">

 <div class="right-part  ps-4" style="overflow: hidden;">
    <h1 class=" gray ">${posts.location.name}</h1>
    <h4 class=" gray fw-light">${posts.location.region}</h4>
  <div class="row d-flex  g-3 align-items-center">
     <div class="col-8 ">
      <h1 class="fs-2 gray fw-bolder temperature    " 
         style="font-size:45px !important;">${posts.current.temp_c}&degC
       </h1>
     </div>
    <div class="col-4  text-center" >
        <img  src="${posts.current.condition.icon}" class="weather-icon"
         style="width: 120%; height: 120%">
    </div>

  </div>
    <p class="fs-5  text-info">${posts.current.condition.text}</p>
    <div class="details  row g-0">
      <p class="fs-md-6 fs-lg-5  col-4 text-secondary"><i class="fa-solid fa-umbrella pe-1"></i>${posts.current.precip_mm}%</p>
      <p class="fs-md-6 fs-lg-5  col-4 text-secondary"><i class="fa-solid fa-wind pe-1 "></i> ${posts.current.wind_kph}km</p>
      <p class="fs-md-6 fs-lg-5  col-4 text-secondary"><i class="fa-solid fa-arrow-right-to-city pe-1"></i> ${posts.current.wind_dir}</p>
    </div>
  </div>
  </div>
`
document.querySelector("#showText").innerHTML=htmlcollection2;

 // slider

    let hourForecast=posts.forecast.forecastday[0].hour;
    let carouselContent = ``;
    hourForecast.forEach((hour,index) => {
      let time = new Date(hour.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      carouselContent += `
    <div id="carouselExample" class="carousel slide">

  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="col-3">
          <h5>${time}</h5>
          <img src="${hour.condition.icon}" alt="Weather Icon" width="50" height="50">
          <h4>${hour.temp_c}°C</h4>
          <p>${hour.condition.text}</p>
        </div>
    </div>

   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`

});
document.querySelector("#showSlider").innerHTML = carouselContent;

// forecast3Day


let bodyElement = document.querySelector("body")
let forecast3DaysDiv=document.createElement("div")
forecast3DaysDiv.classList.add("blue")
let date3Days =document.createElement("h4")
date3Days.innerText=posts.forecast.forecastday[0].Date
let icon3Days =document.createElement("img")
icon3Days.innerText=posts.forecast.forecastday[0].day.icon
let degree3Days=document.createElement("h4")
degree3Days.innerText=posts.forecast.forecastday[0].day.avgtemp_c
let running3Days=document.createElement("h4")
running3Days.innerText=posts.forecast.forecastday[0].daily_chance_of_rain

bodyElement.insertAdjacentElement("afterbegin",forecast3DaysDiv)











  });
      

    






  



