import './weather.css'

export default function Weather() {
    return `
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
    `
}

Weather.init = function() {
    const apiKey = '89c563ae16caa06090600ce6b5abf65a'
    const card = document.querySelector('.card')
    const searchBox = document.querySelector('.card_input')
    const searchBtn = document.getElementById('searchBtn')
    const temp = document.querySelector('.card_title--temp')
    const city = document.querySelector('.card_title--city')
    const icon = document.querySelector('.card_weather-icon')
    const date = document.getElementById('date')
    const forecastContainer = document.getElementById('forecast')
    const forecastCard = document.getElementById('forecast-card')
    const errorMessage = document.getElementById('error-message')
    const humidity = document.getElementById('humidity')
    const wind = document.getElementById('wind')

    const showDate = () => {
        const now = new Date()
        const day = now.getDate()
        const monthName = now.toLocaleString('en', { month: 'long' })
        date.innerHTML = `${day} ${monthName}`
    }

    async function getWeather(cityName) {
        cityName = cityName.trim()
        if (!cityName) return
        try {
            errorMessage.style.display = 'none'
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
            )
            if (!response.ok) throw new Error('City not found')
            const result = await response.json()
            card.classList.add('active')
            card.style.height = 'auto'
            icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
            city.innerHTML = result.name
            temp.innerHTML = `${Math.round(result.main.temp)}°C`
            humidity.innerHTML = `${result.main.humidity}%`
            wind.innerHTML = `${result.wind.speed} m/s`
            const forecastResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${result.coord.lat}&lon=${result.coord.lon}&appid=${apiKey}&units=metric`
            )
            if (!forecastResponse.ok) throw new Error('Forecast not found')

            const forecastResult = await forecastResponse.json()
            renderForecast(forecastResult)
            forecastCard.style.display = 'block'
            setTimeout(() => {
                card.classList.add('move-left')
                forecastCard.classList.add('move-right')
            }, 10)
        } catch (err) {
            errorMessage.textContent = 'Не смогли найти этот город'
            errorMessage.style.display = 'block'
            card.classList.remove('active')
            card.style.height = '230px'
            forecastContainer.innerHTML = ''
            forecastCard.style.display = 'none'
            card.classList.remove('move-left')
            forecastCard.classList.remove('move-right')
        }
    }

    function renderForecast(data) {
        forecastContainer.innerHTML = ''

        const dailyForecasts = {}
        data.list.forEach(item => {
            const date = item.dt_txt.split(' ')[0]
            if (!dailyForecasts[date]) dailyForecasts[date] = []
            dailyForecasts[date].push(item)
        })

        const days = Object.keys(dailyForecasts).slice(1, 6) // Next 5 days

        days.forEach(date => {
            const dayData = dailyForecasts[date][0] // First entry
            const dateObj = new Date(dayData.dt * 1000)
            const dayName = dateObj.toLocaleString('en', { weekday: 'short' })

            const forecastItem = document.createElement('div')
            forecastItem.className = 'forecast-item'
            forecastItem.innerHTML = `
                <p>${dayName}</p>
                <img src="https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png" alt="Forecast Icon">
                <p>${Math.round(dayData.main.temp)}°C</p>
            `
            forecastContainer.appendChild(forecastItem)
        })
    }

    searchBtn.addEventListener('click', () => getWeather(searchBox.value))
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') getWeather(searchBox.value)
    })

    document.addEventListener('click', (e) => {
        if (card.classList.contains('active') && !card.contains(e.target) && !forecastCard.contains(e.target)) {
            resetWeatherData();

            card.classList.remove('active')
            card.style.height = '230px'
            searchBox.value = ''
            forecastContainer.innerHTML = ''
            errorMessage.style.display = 'none'

            card.classList.remove('move-left')
            forecastCard.classList.remove('move-right')
            setTimeout(() => {
                forecastCard.style.display = 'none'
            }, 300)
        }
    })

    showDate()
}