// movies.js
import './movies.css';

export default function Movies() {
    return `
        <section class="movies-page">
            <div class="movies-wrapper">
                <div class="text-center mb-3">
                    <h1>🎬 Поиск фильмов</h1>
                    <p style="color: var(--text-secondary);">Найдите информацию о любом фильме через базу данных OMDB</p>
                </div>

                <div class="card mb-3 search-card">
                    <div class="form-group">
                        <label for="movie-search" class="form-label" style="color: #FFFFFF">Название фильма</label>
                        <div class="search-container">
                            <input 
                                type="text" 
                                id="movie-search" 
                                class="form-input search-input" 
                                placeholder="Введите название фильма..."
                                autocomplete="off"
                            >
                            <button id="search-movie" class="btn search-btn">
                                🔍 Найти
                            </button>
                        </div>
                    </div>
                </div>

                <div id="movies-results">
                    <div class="card text-center p-3 default-state">
                        <p style="color: var(--text-muted);">Введите название фильма для поиска</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

Movies.init = function() {
    const apiKey = '7e9d04cc'; // Ваш рабочий ключ
    
    const searchInput = document.getElementById('movie-search');
    const searchButton = document.getElementById('search-movie');
    const resultsContainer = document.getElementById('movies-results');

    // Функция проверки на пустую строку
    function isEmptyQuery(query) {
        return !query || query.trim() === '';
    }

    // Функция поиска фильма
    async function searchMovie(query) {
        if (isEmptyQuery(query)) {
            displayError('Пожалуйста, введите название фильма');
            return;
        }

        searchButton.disabled = true;
        searchButton.textContent = 'Поиск...';
        
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(query)}&plot=full`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();

            if (data.Response === 'True') {
                displayMovie(data);
            } else {
                displayError(data.Error || 'Фильм не найден. Проверьте название и попробуйте снова.');
            }
        } catch (error) {
            console.error('Ошибка поиска:', error);
            displayError('Произошла ошибка при поиске. Проверьте подключение к интернету.');
        } finally {
            searchButton.disabled = false;
            searchButton.textContent = '🔍 Найти';
        }
    }

    // Функция отображения информации о фильме
    function displayMovie(movie) {
        const rating = movie.Ratings?.find(r => r.Source === 'Internet Movie Database')?.Value || 'Нет оценок';
        const actors = movie.Actors || 'Не указаны';
        const director = movie.Director || 'Не указан';
        const genre = movie.Genre || 'Не указан';
        const plot = movie.Plot || 'Описание отсутствует';
        const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450/3498db/ffffff?text=No+Poster';

        resultsContainer.innerHTML = `
            <div class="card movie-card">
                <div class="movie-content">
                    <div class="movie-poster-section">
                        <img 
                            src="${poster}" 
                            alt="${movie.Title}"
                            class="movie-poster"
                            onerror="this.src='https://via.placeholder.com/300x450/3498db/ffffff?text=No+Poster'"
                        >
                    </div>
                    
                    <div class="movie-info-section">
                        <div class="movie-header">
                            <h2 class="movie-title">${movie.Title}</h2>
                            <div class="movie-badges">
                                <span class="movie-badge">${movie.Year}</span>
                                <span class="movie-badge">${movie.Runtime}</span>
                                <span class="movie-badge">${movie.Rated}</span>
                                <span class="movie-badge rating">${rating}</span>
                            </div>
                        </div>

                        <div class="movie-details">
                            <div class="detail-item">
                                <strong>🎭 Жанр:</strong>
                                <span>${genre}</span>
                            </div>
                            <div class="detail-item">
                                <strong>🎬 Режиссер:</strong>
                                <span>${director}</span>
                            </div>
                            <div class="detail-item">
                                <strong>👥 Актёры:</strong>
                                <span>${actors}</span>
                            </div>
                            <div class="detail-item">
                                <strong>🏆 Награды:</strong>
                                <span>${movie.Awards || 'Не указаны'}</span>
                            </div>
                            <div class="detail-item">
                                <strong>📅 Выпуск:</strong>
                                <span>${movie.Released}</span>
                            </div>
                            <div class="detail-item">
                                <strong>💵 Сборы:</strong>
                                <span>${movie.BoxOffice || 'Не указаны'}</span>
                            </div>
                        </div>

                        <div class="movie-plot">
                            <h4>📖 Сюжет</h4>
                            <p>${plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Функция отображения ошибки
    function displayError(message) {
        resultsContainer.innerHTML = `
            <div class="card text-center error-state">
                <div class="error">
                    <h3 style="color: var(--accent-color); margin-bottom: 1rem;">😕 Не удалось найти фильм</h3>
                    <p>${message}</p>
                </div>
            </div>
        `;
    }

    // Обработчики событий
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        searchMovie(query);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            searchMovie(query);
        }
    });

    // Дополнительная проверка при вводе - предотвращаем отправку только пробелов
    searchInput.addEventListener('input', () => {
        if (isEmptyQuery(searchInput.value)) {
            // Показываем дефолтное состояние, если поле пустое
            resultsContainer.innerHTML = `
                <div class="card text-center p-3 default-state">
                    <p style="color: var(--text-muted);">Введите название фильма для поиска</p>
                </div>
            `;
        }
    });
};