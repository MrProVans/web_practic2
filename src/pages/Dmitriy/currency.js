import './currency.css';

export default function Currency() {
    return `
        <section class="currency-page">
            <div class="currency-wrapper">
                <div class="text-center mb-3">
                    <h1>💱 Конвертер валют</h1>
                    <p style="color: var(--text-secondary);">Актуальные курсы валют с конвертацией в реальном времени</p>
                </div>

                <div class="card mb-3 converter-card">
                    <div class="form-group">
                        <label for="amount" class="form-label" style="color: #FFFFFF">Сумма для конвертации</label>
                        <div class="input-container">
                            <input
                                type="number"
                                id="amount"
                                class="form-input"
                                value="1"
                                min="0"
                                step="0.01"
                                placeholder="Введите сумму..."
                            >
                        </div>
                    </div>

                    <div class="currency-selectors">
                        <div class="selector-group">
                            <label for="fromCurrency" class="form-label" style="color: #FFFFFF">Из валюты</label>
                            <select id="fromCurrency" class="form-select">
                                <option value="USD">USD - Доллар США</option>
                                <option value="EUR">EUR - Евро</option>
                                <option value="GBP">GBP - Фунт стерлингов</option>
                                <option value="JPY">JPY - Японская иена</option>
                                <option value="PLN">PLN - Польский злотый</option>
                                <option value="RUB">RUB - Российский рубль</option>
                            </select>
                        </div>

                        <button id="swapCurrencies" class="swap-btn">
                            ⇄
                        </button>

                        <div class="selector-group">
                            <label for="toCurrency" class="form-label" style="color: #FFFFFF">В валюту</label>
                            <select id="toCurrency" class="form-select">
                                <option value="EUR">EUR - Евро</option>
                                <option value="USD">USD - Доллар США</option>
                                <option value="GBP">GBP - Фунт стерлингов</option>
                                <option value="JPY">JPY - Японская иена</option>
                                <option value="PLN">PLN - Польский злотый</option>
                                <option value="RUB" selected>RUB - Российский рубль</option>
                            </select>
                        </div>
                    </div>

                    <button id="convertBtn" class="btn convert-btn">
                        💰 Конвертировать
                    </button>

                    <div id="currency-results">
                        <div class="card text-center p-3 default-state">
                            <p style="color: var(--text-muted);">Введите сумму и выберите валюты для конвертации</p>
                        </div>
                    </div>
                </div>

                <div class="card popular-rates-card">
                    <h3 class="text-center mb-2">📊 Популярные курсы</h3>
                    <div id="popular-rates" class="popular-rates-grid">
                        <!-- Здесь будут популярные курсы -->
                    </div>
                </div>
            </div>
        </section>
    `;
}

Currency.init = function() {
    const apiKey = '20a59c4e882a0bf4930e55a5';

    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const swapBtn = document.getElementById('swapCurrencies');
    const convertBtn = document.getElementById('convertBtn');
    const resultsContainer = document.getElementById('currency-results');
    const popularRatesContainer = document.getElementById('popular-rates');

    let cache = new Map();
    const cacheTimeout = 300000; // 5 минут

    // Функция получения курса валют
    async function getExchangeRate(from, to) {
        const cacheKey = `${from}-${to}`;
        const cached = cache.get(cacheKey);

        if (cached && Date.now() - cached.timestamp < cacheTimeout) {
            return cached.rate;
        }

        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.result !== "success") {
                throw new Error("API returned error");
            }

            const rate = data.conversion_rates[to];

            if (!rate) {
                throw new Error(`Currency ${to} not found`);
            }

            // Сохраняем в кэш
            cache.set(cacheKey, {
                rate: rate,
                timestamp: Date.now(),
            });

            return rate;
        } catch (error) {
            console.error('Exchange rate error:', error);
            throw error;
        }
    }

    // Функция конвертации
    async function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (!amount || amount <= 0) {
            displayError('Пожалуйста, введите корректную сумму');
            return;
        }

        convertBtn.disabled = true;
        convertBtn.textContent = 'Конвертация...';

        try {
            const rate = await getExchangeRate(from, to);
            const convertedAmount = amount * rate;

            displayResult(amount, from, to, convertedAmount, rate);
            await loadPopularRates();
        } catch (error) {
            console.error('Conversion error:', error);
            displayError('Произошла ошибка при получении данных. Попробуйте позже.');
        } finally {
            convertBtn.disabled = false;
            convertBtn.textContent = '💰 Конвертировать';
        }
    }

    // Функция отображения результата
    function displayResult(amount, from, to, convertedAmount, rate) {
        const formattedAmount = formatNumber(amount);
        const formattedConverted = formatNumber(convertedAmount);
        const formattedRate = formatNumber(rate);

        resultsContainer.innerHTML = `
            <div class="conversion-success">
                <div class="conversion-main">
                    <h2>${formattedAmount} ${from} = ${formattedConverted} ${to}</h2>
                </div>
                <div class="conversion-rate">
                    <p>1 ${from} = ${formattedRate} ${to}</p>
                </div>
            </div>
        `;
    }

    // Функция отображения ошибки
    function displayError(message) {
        resultsContainer.innerHTML = `
            <div class="card text-center error-state">
                <div class="error">
                    <h3 style="color: var(--accent-color); margin-bottom: 1rem;">⚠️ Ошибка</h3>
                    <p>${message}</p>
                </div>
            </div>
        `;
    }

    // Функция загрузки популярных курсов
    async function loadPopularRates() {
        const baseCurrency = 'USD';
        const popularCurrencies = ['EUR', 'GBP', 'JPY', 'RUB'];

        try {
            const rates = await getExchangeRates(baseCurrency, popularCurrencies);
            displayPopularRates(baseCurrency, rates);
        } catch (error) {
            console.error('Error loading popular rates:', error);
            popularRatesContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center;">Не удалось загрузить курсы</p>';
        }
    }

    // Функция получения нескольких курсов
    async function getExchangeRates(base, targets) {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.result !== "success") {
                throw new Error("API returned error");
            }

            const rates = {};
            targets.forEach(currency => {
                rates[currency] = data.conversion_rates[currency];
            });

            return rates;
        } catch (error) {
            console.error('Exchange rates error:', error);
            throw error;
        }
    }

    // Функция отображения популярных курсов
    function displayPopularRates(base, rates) {
        popularRatesContainer.innerHTML = '';

        Object.entries(rates).forEach(([currency, rate]) => {
            const rateItem = document.createElement('div');
            rateItem.className = 'rate-item';
            rateItem.innerHTML = `
                <div class="rate-pair">${base}/${currency}</div>
                <div class="rate-value">${formatNumber(rate)}</div>
            `;
            popularRatesContainer.appendChild(rateItem);
        });
    }

    // Функция форматирования чисел
    function formatNumber(num) {
        return new Intl.NumberFormat('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4
        }).format(num);
    }

    // Функция обмена валют
    function swapCurrencies() {
        const fromValue = fromCurrency.value;
        const toValue = toCurrency.value;

        fromCurrency.value = toValue;
        toCurrency.value = fromValue;

        // Автоматическая конвертация после обмена
        if (amountInput.value && amountInput.value > 0) {
            convertCurrency();
        }
    }

    // Функция валидации ввода
    function validateInput() {
        let value = amountInput.value;
        if (value < 0) {
            amountInput.value = 0;
        }
    }

    // Обработчики событий
    convertBtn.addEventListener('click', convertCurrency);

    swapBtn.addEventListener('click', swapCurrencies);

    amountInput.addEventListener('input', validateInput);

    amountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            convertCurrency();
        }
    });

    // Автоматическая конвертация при изменении валют
    fromCurrency.addEventListener('change', () => {
        if (amountInput.value && amountInput.value > 0) {
            convertCurrency();
        }
    });

    toCurrency.addEventListener('change', () => {
        if (amountInput.value && amountInput.value > 0) {
            convertCurrency();
        }
    });

    // Автоматическая конвертация при вводе суммы
    amountInput.addEventListener('input', () => {
        if (amountInput.value && amountInput.value > 0) {
            convertCurrency();
        } else {
            // Показываем дефолтное состояние, если поле пустое
            resultsContainer.innerHTML = `
                <div class="card text-center p-3 default-state">
                    <p style="color: var(--text-muted);">Введите сумму и выберите валюты для конвертации</p>
                </div>
            `;
        }
    });

    // Загружаем популярные курсы при инициализации
    loadPopularRates();
};
