import './style.css'

// Компоненты
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/home/Home.js'
import Weather from './pages/Vanya/Vanya.js'
import Movies from './pages/Victor/Victor.js'
import Currency from './pages/Dmitriy/Dmitriy.js'

class App {
    constructor() {
        this.app = document.getElementById('app')
        this.currentPage = 'home'
        this.pages = {
            home: Home,
            weather: Weather,
            movies: Movies,
            currency: Currency
        }

        this.init()
    }

    init() {
        this.hideLoading()
        this.render()
        this.setupNavigation()
    }

    hideLoading() {
        const loading = document.getElementById('loading')
        if (loading) {
            loading.style.display = 'none'
        }
    }

    render() {
        this.app.innerHTML = `
      ${Header()}
      <main class="main-content">
        <div id="page-content"></div>
      </main>
      ${Footer()}
    `

        this.renderPage('home')
    }

    renderPage(pageName) {
        const pageContent = document.getElementById('page-content')
        if (this.pages[pageName]) {
            pageContent.innerHTML = this.pages[pageName]()
            this.currentPage = pageName
            this.updateActiveNav()
            this.attachPageEvents(pageName)
        }
    }

    updateActiveNav() {
        // Убираем активный класс у всех ссылок
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active')
        })

        // Добавляем активный класс текущей странице
        const currentLink = document.querySelector(`[data-page="${this.currentPage}"]`)
        if (currentLink) {
            currentLink.classList.add('active')
        }
    }

    setupNavigation() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                e.preventDefault()
                const page = e.target.getAttribute('data-page')
                if (page && this.pages[page]) {
                    this.renderPage(page)
                    window.scrollTo(0, 0)
                }
            }
        })
    }

    attachPageEvents(pageName) {
        // Здесь будут привязываться события для конкретных страниц
        switch(pageName) {
            case 'weather':
                if (typeof Weather.init === 'function') Weather.init()
                break
            case 'movies':
                if (typeof Movies.init === 'function') Movies.init()
                break
            case 'currency':
                if (typeof Currency.init === 'function') Currency.init()
                break
            case 'home':
                if (typeof Home.init === 'function') Home.init()
                break
        }
    }
}

// Инициализация приложения
new App()