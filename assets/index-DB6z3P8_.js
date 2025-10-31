const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./weather-BO1LrArt.js","./weather-DfIUdZLd.css","./movies-Du1PJPM6.js","./movies-CYRgnBZM.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const S="modulepreload",A=function(t,e){return new URL(t,e).href},_={},b=function(e,s,i){let a=Promise.resolve();if(s&&s.length>0){let k=function(o){return Promise.all(o.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const r=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),y=c?.nonce||c?.getAttribute("nonce");a=k(s.map(o=>{if(o=A(o,i),o in _)return;_[o]=!0;const d=o.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(i)for(let v=r.length-1;v>=0;v--){const p=r[v];if(p.href===o&&(!d||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":S,d||(l.as="script"),l.crossOrigin="",l.href=o,y&&l.setAttribute("nonce",y),document.head.appendChild(l),d)return new Promise((v,p)=>{l.addEventListener("load",v),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}function n(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return a.then(r=>{for(const c of r||[])c.status==="rejected"&&n(c.reason);return e().catch(n)})},I=()=>`
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>DevStars</h1>
          </div>
          <nav class="nav">
            <a href="#" class="nav-link active" data-page="home">Главная</a>
            <a href="#" class="nav-link" data-page="weather">Погода</a>
            <a href="#" class="nav-link" data-page="movies">Фильмы</a>
            <a href="#" class="nav-link" data-page="currency">Валюты</a>
          </nav>
          <button class="theme-toggle" id="themeToggle">
            <span class="theme-icon">🌙</span>
          </button>
        </div>
      </div>
    </header>
  `,D=()=>`
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>DevStars Web App</h3>
            <p>Инновационные веб-виджеты для повседневного использования</p>
          </div>
          <div class="footer-section">
            <h4>Сервисы</h4>
            <a href="#" class="footer-link" data-page="weather">Погода</a>
            <a href="#" class="footer-link" data-page="movies">Фильмы</a>
            <a href="#" class="footer-link" data-page="currency">Валюты</a>
          </div>
          <div class="footer-section">
            <h4>Команда</h4>
            <span>Ваня Клочков - Домашняя страница</span><br>
            <span>Ваня Павлов - Погода, домашняя страница</span><br>
            <span>Витя Смыков - Фильмы</span><br>
            <span>Дима Яновский - Валюты</span>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 DevStars. Все права защищены.</p>
        </div>
      </div>
    </footer>
  `,E=()=>`
    <div class="home-page">
      <div class="container">
        <section class="hero-section">
          <div class="hero-content">
            <h1 class="hero-title">Добро пожаловать в DevStars Web App</h1>
            <p class="hero-subtitle">Инновационные веб-виджеты для повседневного использования</p>
            <div class="hero-actions">
              <button class="btn btn-outline" data-page="weather">
                🌤 Узнать погоду
              </button>
              <button class="btn btn-outline" data-page="movies">
                🎬 Найти фильм
              </button>
              <button class="btn btn-outline" data-page="currency">
                💱 Проверить курс валют
              </button>
             </div>
            </div>
            <div class="floating-cards">
              <button class="floating-card weather-card" data-page="weather">
                <div class="card-icon">🌤</div>
                <h4>Погода</h4>
                <p>Актуальный прогноз</p>
              </button>
            
              <button class="floating-card movies-card" data-page="movies">
                <div class="card-icon">🎬</div>
                <h4>Фильмы</h4>
                <p>База данных кино</p>
              </button>
            
              <button class="floating-card currency-card" data-page="currency">
                <div class="card-icon">💵</div>
                <h4>Валюты</h4>
                <p>Конвертер курсов</p>
              </button>
            </div>
          </div>
          
        </section>
        <section class="features-section">
          <h2 class="section-title">Наши возможности</h2>
          <div class="features-grid">
            <div class="feature-card" data-page="weather">
              <div class="feature-icon">🌤</div>
              <h3>Виджет погоды</h3>
              <p>Текущая погода, скорость ветра, влажность и температура для любого города мира</p>
              <ul class="feature-list">
                <li>Поиск по городу</li>
                <li>Детальная информация</li>
                <li>Прогноз погоды на 5 дней</li>
              </ul>
            </div>
            <div class="feature-card" data-page="movies">
              <div class="feature-icon">🎬</div>
              <h3>Библиотека фильмов</h3>
              <p>Обширная база фильмов с поиском, рейтингами и детальной информацией</p>
              <ul class="feature-list">
                <li>Поиск фильмов</li>
                <li>Популярные новинки</li>
                <li>Рейтинги и отзывы</li>
                <li>Детальная информация</li>
              </ul>
            </div>
            <div class="feature-card" data-page="currency">
              <div class="feature-icon">💵</div>
              <h3>Конвертер валют</h3>
              <p>Актуальные курсы валют с конвертацией и историческими данными</p>
              <ul class="feature-list">
                <li>150+ валют</li>
                <li>Графики изменений</li>
                <li>Исторические данные</li>
                <li>Оффлайн-режим</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="team-section">
          <h2 class="section-title">Наша команда</h2>
          <div class="team-grid">
            <div class="team-card">
              <div class="team-avatar">В</div>
              <h3>Ваня Павлов</h3>
              <p class="team-role">Frontend Developer</p>
              <p class="team-bio">Разработчик виджета погоды и домашней страницы.</p>
            </div>
            <div class="team-card">
              <div class="team-avatar">В</div>
              <h3>Витя Смыков</h3>
              <p class="team-role">Frontend Developer</p>
              <p class="team-bio">Создатель библиотеки фильмов.</p>
            </div>
            <div class="team-card">
              <div class="team-avatar">Д</div>
              <h3>Дима Яновский</h3>
              <p class="team-role">Frontend Developer</p>
              <p class="team-bio">Разработчик конвертера валют.</p>
            </div>
            <div class="team-card">
              <div class="team-avatar">В</div>
              <h3>Ваня Клочков</h3>
              <p class="team-role">Frontend Developer</p>
              <p class="team-bio">Разработчик домашней страницы. Ответственный за организацию команды.</p>
            </div>
          </div>
        </section>
        <section class="stats-section">
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">3+</div>
              <div class="stat-label">API сервиса</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">Vanilla JS</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">∞</div>
              <div class="stat-label">Возможностей</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;E.init=()=>{document.addEventListener("click",t=>{const e=t.target.closest(".feature-card, .floating-card");if(e){const s=e.closest("[data-page]")?.getAttribute("data-page");if(s){const i=new Event("click",{bubbles:!0}),a=document.querySelector(`.nav-link[data-page="${s}"]`);a&&a.dispatchEvent(i)}}})};const O=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));let h,m,f;try{h=(await b(async()=>{const{default:t}=await import("./weather-BO1LrArt.js");return{default:t}},__vite__mapDeps([0,1]),import.meta.url)).default}catch{h=null}try{m=(await b(async()=>{const{default:t}=await import("./movies-Du1PJPM6.js");return{default:t}},__vite__mapDeps([2,3]),import.meta.url)).default}catch{m=null}try{f=(await b(async()=>{const{default:t}=await Promise.resolve().then(()=>O);return{default:t}},void 0,import.meta.url)).default}catch{f=null}class T{constructor(){this.app=document.getElementById("app"),this.currentPage="home",this.pages={home:E,weather:h,movies:m,currency:f},this.init()}init(){this.hideLoading(),this.render(),this.setupNavigation()}hideLoading(){const e=document.getElementById("loading");e&&(e.style.display="none")}render(){this.app.innerHTML=`
            ${I()}
            <main class="main-content loaded">
                <div id="page-content"></div>
            </main>
            ${D()}
        `,this.renderPage("home")}renderPage(e){const s=document.getElementById("page-content"),i=this.pages[e];i&&typeof i=="function"?(s.innerHTML=i(),this.currentPage=e,this.updateActiveNav(),this.attachPageEvents(e)):(s.innerHTML=`
                <div style="text-align:center; padding:4rem 1rem;">
                    <h2 style="font-size:2rem; color:#e74c3c;">😕 Упс!</h2>
                    <p style="margin-top:1rem; font-size:1.2rem;">
                        Страница "<strong>${e}</strong>" пока не работает.
                    </p>
                    <button id="backHome" style="
                        margin-top:2rem;
                        padding:0.75rem 1.5rem;
                        background:#3498db;
                        color:white;
                        border:none;
                        border-radius:6px;
                        cursor:pointer;
                    ">Вернуться на главную</button>
                </div>
            `,document.getElementById("backHome")?.addEventListener("click",()=>this.renderPage("home")))}updateActiveNav(){document.querySelectorAll(".nav-link").forEach(s=>{s.classList.remove("active")});const e=document.querySelector(`[data-page="${this.currentPage}"]`);e&&e.classList.add("active")}setupNavigation(){document.addEventListener("click",e=>{const s=e.target.closest(".nav-link, [data-page]");if(s){e.preventDefault();const i=s.getAttribute("data-page");i&&(this.renderPage(i),window.scrollTo(0,0))}})}attachPageEvents(e){const s=this.pages[e];s&&typeof s.init=="function"&&s.init()}}new T;const w=document.getElementById("themeToggle"),g=document.documentElement,P=localStorage.getItem("theme")||"light";g.setAttribute("data-theme",P);L(P);w.addEventListener("click",()=>{const t=g.getAttribute("data-theme")==="dark"?"light":"dark";g.setAttribute("data-theme",t),localStorage.setItem("theme",t),L(t)});function L(t){const e=w.querySelector(".icon");e&&(e.textContent=t==="dark"?"Солнце":"Луна")}
//# sourceMappingURL=index-DB6z3P8_.js.map
