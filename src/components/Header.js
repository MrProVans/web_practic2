const Header = () => {
    return `
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
  `
}

export default Header