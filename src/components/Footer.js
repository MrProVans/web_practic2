const Footer = () => {
    return `
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
  `
}

export default Footer