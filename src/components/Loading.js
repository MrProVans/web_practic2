const Loading = {
    // Показывает глобальную загрузку
    showGlobal() {
        const existingLoading = document.getElementById('global-loading')
        if (existingLoading) return

        const loadingHTML = `
      <div id="global-loading" class="loading-overlay">
        <div class="loading-content">
          <div class="loading-spinner"></div>
          <p class="loading-text">Загрузка...</p>
        </div>
      </div>
    `

        document.body.insertAdjacentHTML('beforeend', loadingHTML)
    },

    // Скрывает глобальную загрузку
    hideGlobal() {
        const loading = document.getElementById('global-loading')
        if (loading) {
            loading.remove()
        }
    },

    // Показывает загрузку внутри элемента
    showLocal(container, text = 'Загрузка...') {
        const existingLoader = container.querySelector('.local-loading')
        if (existingLoader) return

        const loaderHTML = `
      <div class="local-loading">
        <div class="loading-spinner small"></div>
        <p class="loading-text">${text}</p>
      </div>
    `

        container.style.position = 'relative'
        container.insertAdjacentHTML('beforeend', loaderHTML)
    },

    // Скрывает локальную загрузку
    hideLocal(container) {
        const loader = container.querySelector('.local-loading')
        if (loader) {
            loader.remove()
        }
    },

    // Показывает скелетон-загрузку
    showSkeleton(container, type = 'card', count = 1) {
        let skeletonHTML = ''

        for (let i = 0; i < count; i++) {
            switch (type) {
                case 'card':
                    skeletonHTML += `
            <div class="skeleton-card">
              <div class="skeleton-line skeleton-title"></div>
              <div class="skeleton-line skeleton-text"></div>
              <div class="skeleton-line skeleton-text short"></div>
            </div>
          `
                    break
                case 'list':
                    skeletonHTML += `
            <div class="skeleton-list">
              <div class="skeleton-line"></div>
              <div class="skeleton-line short"></div>
              <div class="skeleton-line medium"></div>
            </div>
          `
                    break
                case 'weather':
                    skeletonHTML += `
            <div class="skeleton-weather">
              <div class="skeleton-icon"></div>
              <div class="skeleton-line skeleton-temp"></div>
              <div class="skeleton-line skeleton-desc"></div>
            </div>
          `
                    break
            }
        }

        container.innerHTML = skeletonHTML
    },

    // Скрывает скелетон
    hideSkeleton(container) {
        const skeletons = container.querySelectorAll('[class*="skeleton-"]')
        skeletons.forEach(skeleton => skeleton.remove())
    },

    // Показывает загрузку для кнопки
    showButton(button, text = 'Загрузка...') {
        button.setAttribute('data-original-text', button.textContent)
        button.disabled = true
        button.innerHTML = `
      <div class="button-loading">
        <div class="loading-spinner tiny"></div>
        ${text}
      </div>
    `
    },

    // Скрывает загрузку для кнопки
    hideButton(button) {
        const originalText = button.getAttribute('data-original-text')
        if (originalText) {
            button.innerHTML = originalText
        }
        button.disabled = false
    }
}

export default Loading