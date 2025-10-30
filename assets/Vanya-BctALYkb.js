function y(){return`
        <section class="weather-page">
            <div class="card">
                <h1 class="card_title">Weather App</h1>
                <p class="card_date">Today, <span id="date"></span></p>
                <div class="card_search">
                    <input type="text" class="card_input" placeholder="Enter city name" />
                    <button id="searchBtn" class="card_btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div class="card_weather">
                    <h2 class="card_title card_title--city" id="city">New York</h2>
                    <div class="card_block">
                        <h3 class="card_title card_title--temp">22°C</h3>
                        <img src="" class="card_weather-icon" alt="Weather Icon">
                    </div>
                </div>
                <div class="card_details">
                    <div class="card_col">
                        <i class="fa-solid fa-wind card_col-info"></i>
                        <p>Wind</p>
                        <p id="wind" class="card_info">15 m/s</p>
                    </div>
                    <div class="card_col">
                        <i class="fa-solid fa-droplet card_col-info"></i>
                        <p>Hum</p>
                        <p id="humidity" class="card_info">50 %</p>
                    </div>
                </div>
            </div>
        </section>
    `}y.init=function(){const s="89c563ae16caa06090600ce6b5abf65a",a=document.querySelector(".card"),n=document.querySelector(".card_input"),d=document.getElementById("searchBtn"),r=document.querySelector(".card_title--temp"),o=document.getElementById("city"),l=document.getElementById("humidity"),p=document.getElementById("wind"),h=document.querySelector(".card_weather-icon"),m=document.getElementById("date"),u=()=>{const t=new Date,c=t.getDate(),e=t.toLocaleString("en",{month:"long"});m.innerHTML=`${c} ${e}`};async function i(t){if(t=t.trim(),!!t)try{const c=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=${s}&units=metric`);if(!c.ok)throw new Error("City not found");const e=await c.json();a.classList.add("active"),a.style.height="530px",h.src=`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,o.innerHTML=e.name,l.innerHTML=`${e.main.humidity} %`,p.innerHTML=`${e.wind.speed} m/s`,r.innerHTML=`${Math.round(e.main.temp)}°C`}catch(c){alert(c.message)}}d.addEventListener("click",()=>{i(n.value)}),n.addEventListener("keypress",t=>{t.key==="Enter"&&i(n.value)}),document.addEventListener("click",t=>{a.classList.contains("active")&&!a.contains(t.target)&&(a.classList.remove("active"),a.style.height="230px",n.value="")}),u()};export{y as default};
//# sourceMappingURL=Vanya-BctALYkb.js.map
