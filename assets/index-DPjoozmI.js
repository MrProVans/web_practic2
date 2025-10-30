const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Vanya-BctALYkb.js","assets/Vanya-Bjcj1u9G.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const P="modulepreload",E=function(s){return"/web_practic2/"+s},m={},f=function(e,a,n){let t=Promise.resolve();if(a&&a.length>0){let b=function(o){return Promise.all(o.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");t=b(a.map(o=>{if(o=E(o),o in m)return;m[o]=!0;const d=o.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":P,d||(l.as="script"),l.crossOrigin="",l.href=o,c&&l.setAttribute("nonce",c),document.head.appendChild(l),d)return new Promise((y,_)=>{l.addEventListener("load",y),l.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})}))}function i(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return t.then(r=>{for(const c of r||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},w=()=>`
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
  `,S=()=>`
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
            <span>Ваня - Погода</span>
            <span>Витя - Фильмы</span>
            <span>Дима - Валюты</span>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 DevStars. Все права защищены.</p>
        </div>
      </div>
    </footer>
  `,g=()=>`
    <div class="home-page">
      <div class="container">
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="hero-content">
            <h1 class="hero-title">Добро пожаловать в DevStars Web App</h1>
            <p class="hero-subtitle">Инновационные веб-виджеты для повседневного использования</p>
            <div class="hero-actions">
              <button class="btn btn-outline" data-page="weather">
                🌤️ Узнать погоду
              </button>
              <button class="btn btn-outline" data-page="movies">
                🎬 Найти фильм
              </button>
              <button class="btn btn-outline" data-page="currency">
                💱 Проверить курс валют
              </button>
            </div>
          </div>
          <div class="hero-image">
            <div class="floating-cards">
              <div class="floating-card weather-card">
                <div class="card-icon">🌤️</div>
                <h4>Погода</h4>
                <p>Актуальный прогноз</p>
              </div>
              <div class="floating-card movies-card">
                <div class="card-icon">🎬</div>
                <h4>Фильмы</h4>
                <p>База данных кино</p>
              </div>
              <div class="floating-card currency-card">
                <div class="card-icon">💱</div>
                <h4>Валюты</h4>
                <p>Конвертер курсов</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section class="features-section">
          <h2 class="section-title">Наши возможности</h2>
          <div class="features-grid">
            <div class="feature-card" data-page="weather">
              <div class="feature-icon">🌤️</div>
              <h3>Виджет погоды</h3>
<!--              <p>Текущая погода и точный прогноз на 5 дней для любого города мира</p>-->
              <p>Текущая погода, скорость ветра, влажность и температура для любого города мира</p>
              <ul class="feature-list">
                <li>Поиск по городу</li>
<!--                <li>Геолокация</li>-->
                <li>Детальная информация</li>
<!--                <li>Прогноз на неделю</li>-->
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
              <div class="feature-icon">💱</div>
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

        <!-- Team Section -->
        <section class="team-section">
          <h2 class="section-title">Наша команда</h2>
          <div class="team-grid">
            <div class="team-card">
              <div class="team-avatar">В</div>
              <h3>Ваня</h3>
              <p class="team-role">Frontend Developer</p>
              <p class="team-bio">Разработчик виджета погоды. Ответственный за API интеграцию и UX.</p>
            </div>

            <div class="team-card">
              <div class="team-avatar">В</div>
              <h3>Витя</h3>
              <p class="team-role">Frontend Developer</p>
              <p class="team-bio">Создатель библиотеки фильмов. Специалист по работе с TMDB API.</p>
            </div>

            <div class="team-card">
              <div class="team-avatar">Д</div>
              <h3>Дима</h3>
              <p class="team-role">Frontend Developer</p>
              <p class="team-bio">Разработчик конвертера валют. Эксперт по финансовым API.</p>
            </div>
          </div>
        </section>

        <!-- Stats Section -->
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
  `;g.init=()=>{document.addEventListener("click",s=>{const e=s.target.closest(".feature-card, .floating-card");if(e){const a=e.closest("[data-page]")?.getAttribute("data-page");if(a){const n=new Event("click",{bubbles:!0}),t=document.querySelector(`[data-page="${a}"]`);t&&t.dispatchEvent(n)}}})};const L=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),A=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));let v,p,h;try{v=(await f(async()=>{const{default:s}=await import("./Vanya-BctALYkb.js");return{default:s}},__vite__mapDeps([0,1]))).default}catch{v=null}try{p=(await f(async()=>{const{default:s}=await Promise.resolve().then(()=>L);return{default:s}},void 0)).default}catch{p=null}try{h=(await f(async()=>{const{default:s}=await Promise.resolve().then(()=>A);return{default:s}},void 0)).default}catch{h=null}class k{constructor(){this.app=document.getElementById("app"),this.currentPage="home",this.pages={home:g,weather:v,movies:p,currency:h},this.init()}init(){this.hideLoading(),this.render(),this.setupNavigation()}hideLoading(){const e=document.getElementById("loading");e&&(e.style.display="none")}render(){this.app.innerHTML=`
            ${w()}
            <main class="main-content loaded">
                <div id="page-content"></div>
            </main>
            ${S()}
        `,this.renderPage("home")}renderPage(e){const a=document.getElementById("page-content"),n=this.pages[e];n&&typeof n=="function"?(a.innerHTML=n(),this.currentPage=e,this.updateActiveNav(),this.attachPageEvents(e)):(a.innerHTML=`
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
            `,document.getElementById("backHome")?.addEventListener("click",()=>this.renderPage("home")))}updateActiveNav(){document.querySelectorAll(".nav-link").forEach(a=>{a.classList.remove("active")});const e=document.querySelector(`[data-page="${this.currentPage}"]`);e&&e.classList.add("active")}setupNavigation(){document.addEventListener("click",e=>{const a=e.target.closest(".nav-link, [data-page]");if(a){e.preventDefault();const n=a.getAttribute("data-page");n&&(this.renderPage(n),window.scrollTo(0,0))}})}attachPageEvents(e){const a=this.pages[e];a&&typeof a.init=="function"&&a.init()}}new k;
//# sourceMappingURL=index-DPjoozmI.js.map
