import './home.css'

const Home = () => {
    return `
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
  `
}

Home.init = () => {
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.feature-card, .floating-card')
        if (card) {
            const page = card.closest('[data-page]')?.getAttribute('data-page')
            if (page) {
                const navEvent = new Event('click', { bubbles: true })
                const navLink = document.querySelector(`.nav-link[data-page="${page}"]`)
                if (navLink) {
                    navLink.dispatchEvent(navEvent)
                }
            }
        }
    })
}

export default Home