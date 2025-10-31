import './style.css'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/home/Home.js'

let Weather, Movies, Currency

try { Weather = (await import('./pages/Vanya/weather.js')).default } catch (e) { Weather = null }
try { Movies = (await import('./pages/Victor/Victor.js')).default } catch (e) { Movies = null }
try { Currency = (await import('./pages/Dmitriy/Dmitriy.js')).default } catch (e) { Currency = null }

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
        if (loading) loading.style.display = 'none'
    }

    render() {
        this.app.innerHTML = `
            ${Header()}
            <main class="main-content loaded">
                <div id="page-content"></div>
            </main>
            ${Footer()}
        `
        this.renderPage('home')
    }

    renderPage(pageName) {
        const pageContent = document.getElementById('page-content')

        const pageModule = this.pages[pageName]

        if (pageModule && typeof pageModule === 'function') {
            pageContent.innerHTML = pageModule()
            this.currentPage = pageName
            this.updateActiveNav()
            this.attachPageEvents(pageName)
        } else {
            pageContent.innerHTML = `
                <div style="text-align:center; padding:4rem 1rem;">
                    <h2 style="font-size:2rem; color:#e74c3c;">😕 Упс!</h2>
                    <p style="margin-top:1rem; font-size:1.2rem;">
                        Страница "<strong>${pageName}</strong>" пока не работает.
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
            `
            document.getElementById('backHome')?.addEventListener('click', () => this.renderPage('home'))
        }
    }

    updateActiveNav() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active')
        })
        const currentLink = document.querySelector(`[data-page="${this.currentPage}"]`)
        if (currentLink) currentLink.classList.add('active')
    }

    setupNavigation() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('.nav-link, [data-page]')
            if (target) {
                e.preventDefault()
                const page = target.getAttribute('data-page')
                if (page) {
                    this.renderPage(page)
                    window.scrollTo(0, 0)
                }
            }
        })
    }

    attachPageEvents(pageName) {
        const pageModule = this.pages[pageName]
        if (pageModule && typeof pageModule.init === 'function') {
            pageModule.init()
        }
    }
}

new App()

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const saved = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);
updateIcon(saved);

themeToggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
});

function updateIcon(theme) {
    const icon = themeToggle.querySelector('.icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? 'Солнце' : 'Луна';
    }
}