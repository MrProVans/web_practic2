function T(){return`
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
                                <span id="humidity">50%</span>
                            </div>
                            <div class="detail-item">
                                <i class="fa-solid fa-wind"></i>
                                <span id="wind">15 m/s</span>
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
    `}T.init=function(){const m="89c563ae16caa06090600ce6b5abf65a",t=document.querySelector(".card"),o=document.querySelector(".card_input"),w=document.getElementById("searchBtn"),p=document.querySelector(".card_title--temp"),h=document.querySelector(".card_title--city"),y=document.querySelector(".card_weather-icon"),L=document.getElementById("date"),r=document.getElementById("forecast"),c=document.getElementById("forecast-card"),d=document.getElementById("error-message"),u=document.getElementById("humidity"),v=document.getElementById("wind");function f(){h.innerHTML="New York",p.innerHTML="22°C",y.src="",u.innerHTML="50%",v.innerHTML="15 m/s"}const E=()=>{const e=new Date,a=e.getDate(),s=e.toLocaleString("en",{month:"long"});L.innerHTML=`${a} ${s}`};async function g(e){if(e=e.trim(),!!e)try{d.style.display="none";const a=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${m}&units=metric`);if(!a.ok)throw new Error("City not found");const s=await a.json();t.classList.add("active"),t.style.height="auto",y.src=`https://openweathermap.org/img/wn/${s.weather[0].icon}@2x.png`,h.innerHTML=s.name,p.innerHTML=`${Math.round(s.main.temp)}°C`,u.innerHTML=`${s.main.humidity}%`,v.innerHTML=`${s.wind.speed} m/s`;const i=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${s.coord.lat}&lon=${s.coord.lon}&appid=${m}&units=metric`);if(!i.ok)throw new Error("Forecast not found");const n=await i.json();_(n),c.style.display="block",setTimeout(()=>{t.classList.add("move-left"),c.classList.add("move-right")},10)}catch{d.textContent="Не смогли найти этот город",d.style.display="block",t.classList.remove("active"),t.style.height="230px",f(),r.innerHTML="",c.style.display="none",t.classList.remove("move-left"),c.classList.remove("move-right")}}function _(e){r.innerHTML="";const a={};e.list.forEach(i=>{const n=i.dt_txt.split(" ")[0];a[n]||(a[n]=[]),a[n].push(i)}),Object.keys(a).slice(1,6).forEach(i=>{const n=a[i][0],M=new Date(n.dt*1e3).toLocaleString("en",{weekday:"short"}),l=document.createElement("div");l.className="forecast-item",l.innerHTML=`
                <p>${M}</p>
                <img src="https://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png" alt="Forecast Icon">
                <p>${Math.round(n.main.temp)}°C</p>
            `,r.appendChild(l)})}w.addEventListener("click",()=>g(o.value)),o.addEventListener("keypress",e=>{e.key==="Enter"&&g(o.value)}),document.addEventListener("click",e=>{t.classList.contains("active")&&!t.contains(e.target)&&!c.contains(e.target)&&(f(),t.classList.remove("active"),t.style.height="230px",o.value="",r.innerHTML="",d.style.display="none",t.classList.remove("move-left"),c.classList.remove("move-right"),setTimeout(()=>{c.style.display="none"},300))}),E()};export{T as default};
//# sourceMappingURL=weather-BO1LrArt.js.map
