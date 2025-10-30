import './weather.css'

export default function Weather() {
    return `
        <section class="weather-page">
            <div class="card">
                <h1 class="card_title">Weather App</h1>
                <p class="card_date">Today, <span id="date"></span></p>
                <div class="card_search">
                    <input type="text" class="card_input" placeholder="Enter city name" />
                    <button id="searchBtn" class="card_btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div class="card_weather">
                    <h2 class="card_title card_title--city" id="city">New York</h2>
                    <div class="card_block">
                        <h3 class="card_title card_title--temp">22°C</h3>
                        <img src="" class="card_weather-icon" alt="Weather Icon">
                    </div>
                </div>
                <div class="card_details">
                    <div class="card_col">
                        <i class="fa-solid fa-wind card_col-info"></i>
                        <p>Wind</p>
                        <p id="wind" class="card_info">15 m/s</p>
                    </div>
                    <div class="card_col">
                        <i class="fa-solid fa-droplet card_col-info"></i>
                        <p>Hum</p>
                        <p id="humidity" class="card_info">50 %</p>
                    </div>
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
    const city = document.getElementById('city')
    const humidity = document.getElementById('humidity')
    const wind = document.getElementById('wind')
    const icon = document.querySelector('.card_weather-icon')
    const date = document.getElementById('date')

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
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
            )
            if (!response.ok) throw new Error('City not found')

            const result = await response.json()

            card.classList.add('active')
            card.style.height = '530px'
            icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
            city.innerHTML = result.name
            humidity.innerHTML = `${result.main.humidity} %`
            wind.innerHTML = `${result.wind.speed} m/s`
            temp.innerHTML = `${Math.round(result.main.temp)}°C`
        } catch (err) {
            alert(err.message)
        }
    }

    searchBtn.addEventListener('click', () => {
        getWeather(searchBox.value)
    })

    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') getWeather(searchBox.value)
    })

    document.addEventListener('click', (e) => {
        if (card.classList.contains('active') && !card.contains(e.target)) {
            card.classList.remove('active')
            card.style.height = '230px'
            searchBox.value = ''
        }
    })

    showDate()
}

