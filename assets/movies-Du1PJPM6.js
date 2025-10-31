function h(){return`
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
    `}h.init=function(){const d="7e9d04cc",s=document.getElementById("movie-search"),a=document.getElementById("search-movie"),r=document.getElementById("movies-results");function o(e){return!e||e.trim()===""}async function c(e){if(o(e)){n("Пожалуйста, введите название фильма");return}a.disabled=!0,a.textContent="Поиск...";try{const t=await fetch(`https://www.omdbapi.com/?apikey=${d}&t=${encodeURIComponent(e)}&plot=full`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();i.Response==="True"?l(i):n(i.Error||"Фильм не найден. Проверьте название и попробуйте снова.")}catch(t){console.error("Ошибка поиска:",t),n("Произошла ошибка при поиске. Проверьте подключение к интернету.")}finally{a.disabled=!1,a.textContent="🔍 Найти"}}function l(e){const t=e.Ratings?.find(f=>f.Source==="Internet Movie Database")?.Value||"Нет оценок",i=e.Actors||"Не указаны",v=e.Director||"Не указан",p=e.Genre||"Не указан",m=e.Plot||"Описание отсутствует",u=e.Poster!=="N/A"?e.Poster:"https://via.placeholder.com/300x450/3498db/ffffff?text=No+Poster";r.innerHTML=`
            <div class="card movie-card">
                <div class="movie-content">
                    <div class="movie-poster-section">
                        <img 
                            src="${u}" 
                            alt="${e.Title}"
                            class="movie-poster"
                            onerror="this.src='https://via.placeholder.com/300x450/3498db/ffffff?text=No+Poster'"
                        >
                    </div>
                    
                    <div class="movie-info-section">
                        <div class="movie-header">
                            <h2 class="movie-title">${e.Title}</h2>
                            <div class="movie-badges">
                                <span class="movie-badge">${e.Year}</span>
                                <span class="movie-badge">${e.Runtime}</span>
                                <span class="movie-badge">${e.Rated}</span>
                                <span class="movie-badge rating">${t}</span>
                            </div>
                        </div>

                        <div class="movie-details">
                            <div class="detail-item">
                                <strong>🎭 Жанр:</strong>
                                <span>${p}</span>
                            </div>
                            <div class="detail-item">
                                <strong>🎬 Режиссер:</strong>
                                <span>${v}</span>
                            </div>
                            <div class="detail-item">
                                <strong>👥 Актёры:</strong>
                                <span>${i}</span>
                            </div>
                            <div class="detail-item">
                                <strong>🏆 Награды:</strong>
                                <span>${e.Awards||"Не указаны"}</span>
                            </div>
                            <div class="detail-item">
                                <strong>📅 Выпуск:</strong>
                                <span>${e.Released}</span>
                            </div>
                            <div class="detail-item">
                                <strong>💵 Сборы:</strong>
                                <span>${e.BoxOffice||"Не указаны"}</span>
                            </div>
                        </div>

                        <div class="movie-plot">
                            <h4>📖 Сюжет</h4>
                            <p>${m}</p>
                        </div>
                    </div>
                </div>
            </div>
        `}function n(e){r.innerHTML=`
            <div class="card text-center error-state">
                <div class="error">
                    <h3 style="color: var(--accent-color); margin-bottom: 1rem;">😕 Не удалось найти фильм</h3>
                    <p>${e}</p>
                </div>
            </div>
        `}a.addEventListener("click",()=>{const e=s.value.trim();c(e)}),s.addEventListener("keypress",e=>{if(e.key==="Enter"){const t=s.value.trim();c(t)}}),s.addEventListener("input",()=>{o(s.value)&&(r.innerHTML=`
                <div class="card text-center p-3 default-state">
                    <p style="color: var(--text-muted);">Введите название фильма для поиска</p>
                </div>
            `)})};export{h as default};
//# sourceMappingURL=movies-Du1PJPM6.js.map
