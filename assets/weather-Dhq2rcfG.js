function $(){return`
            <section class="weather-page">
                <div class="weather-widgets">
                    <div class="card">
                        <h1 class="card_title">Weather App</h1>
                        <p class="card_date">Today, <span id="date"></span></p>
                        <div class="card_search">
                            <input type="text" class="card_input" placeholder="Enter city name" />
                            <button id="searchBtn" class="card_btn">
                                <span class="theme-icon">🔍</span>
                            </button>
                        </div>
                        <div class="card_weather">
                            <h2 class="card_title card_title--city" id="city">New York</h2>
                            <div class="card_block">
                                <h3 class="card_title card_title--temp">22°C</h3>
                                <img src="" class="card_weather-icon" alt="Weather Icon">
                            </div>
                            <div class="weather-details">
                                <div class="detail-item">
                                    <i class="fa-solid fa-droplet"></i>
                                    <span><strong>Влажность:</strong> <span id="humidity">50%</span></span>
                                </div>
                                <div class="detail-item">
                                    <i class="fa-solid fa-wind"></i>
                                    <span><strong>Скорость ветра:</strong> <span id="wind">15 m/s</span></span>
                                </div>
                            </div>
                        </div>
                        <p id="error-message" class="error-message" style="display: none;">Не смогли найти этот город</p>
                    </div>
                    <div class="forecast-card" id="forecast-card">
                        <h1 class="forecast-title">5-Day Forecast</h1>
                        <div class="forecast-container" id="forecast"></div>
                    </div>
                </div>
            </section>
    `}$.init=function(){const p="89c563ae16caa06090600ce6b5abf65a",t=document.querySelector(".card"),i=document.querySelector(".card_input"),h=document.getElementById("searchBtn"),y=document.querySelector(".card_title--temp"),u=document.querySelector(".card_title--city"),v=document.querySelector(".card_weather-icon"),g=document.getElementById("date"),r=document.getElementById("forecast"),c=document.getElementById("forecast-card"),d=document.getElementById("error-message"),f=document.getElementById("humidity"),w=document.getElementById("wind"),L=()=>{const e=new Date,a=e.getDate(),s=e.toLocaleString("en",{month:"long"});g.innerHTML=`${a} ${s}`};async function m(e){if(e=e.trim(),!!e)try{d.style.display="none";const a=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${p}&units=metric`);if(!a.ok)throw new Error("City not found");const s=await a.json();t.classList.add("active"),t.style.height="auto",v.src=`https://openweathermap.org/img/wn/${s.weather[0].icon}@2x.png`,u.innerHTML=s.name,y.innerHTML=`${Math.round(s.main.temp)}°C`,f.innerHTML=`${s.main.humidity}%`,w.innerHTML=`${s.wind.speed} m/s`;const o=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${s.coord.lat}&lon=${s.coord.lon}&appid=${p}&units=metric`);if(!o.ok)throw new Error("Forecast not found");const n=await o.json();E(n),c.style.display="block",setTimeout(()=>{t.classList.add("move-left"),c.classList.add("move-right")},10)}catch{d.textContent="Не смогли найти этот город",d.style.display="block",t.classList.remove("active"),t.style.height="230px",r.innerHTML="",c.style.display="none",t.classList.remove("move-left"),c.classList.remove("move-right")}}function E(e){r.innerHTML="";const a={};e.list.forEach(o=>{const n=o.dt_txt.split(" ")[0];a[n]||(a[n]=[]),a[n].push(o)}),Object.keys(a).slice(1,6).forEach(o=>{const n=a[o][0],_=new Date(n.dt*1e3).toLocaleString("en",{weekday:"short"}),l=document.createElement("div");l.className="forecast-item",l.innerHTML=`
                <p>${_}</p>
                <img src="https://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png" alt="Forecast Icon">
                <p>${Math.round(n.main.temp)}°C</p>
            `,r.appendChild(l)})}h.addEventListener("click",()=>m(i.value)),i.addEventListener("keypress",e=>{e.key==="Enter"&&m(i.value)}),document.addEventListener("click",e=>{t.classList.contains("active")&&!t.contains(e.target)&&!c.contains(e.target)&&(resetWeatherData(),t.classList.remove("active"),t.style.height="230px",i.value="",r.innerHTML="",d.style.display="none",t.classList.remove("move-left"),c.classList.remove("move-right"),setTimeout(()=>{c.style.display="none"},300))}),L()};export{$ as default};
//# sourceMappingURL=weather-Dhq2rcfG.js.map
