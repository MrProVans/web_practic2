import './home.css'

const Home = () => {
    return `
    <div class="home-page">
      <div class="container">
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="hero-content">
            <h1 class="hero-title">Добро пожаловать в DevStars Web App</h1>
            <p class="hero-subtitle">Инновационные веб-виджеты для повседневного использования</p>
            <div class="hero-actions">
              <button class="btn btn-primary" data-page="weather">
                🌤️ Узнать погоду
              </button>
              <button class="btn btn-outline" data-page="movies">
                🎬 Найти фильм
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
              <p>Текущая погода и точный прогноз на 5 дней для любого города мира</p>
              <ul class="feature-list">
                <li>Поиск по городу</li>
                <li>Геолокация</li>
                <li>Детальная информация</li>
                <li>Прогноз на неделю</li>
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
  `
}

// Инициализация событий для домашней страницы
Home.init = () => {
    // Добавляем обработчики для карточек-ссылок
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.feature-card, .floating-card')
        if (card) {
            const page = card.closest('[data-page]')?.getAttribute('data-page')
            if (page) {
                // Эмулируем клик по навигационной ссылке
                const navEvent = new Event('click', { bubbles: true })
                const navLink = document.querySelector(`[data-page="${page}"]`)
                if (navLink) {
                    navLink.dispatchEvent(navEvent)
                }
            }
        }
    })
}

export default Home