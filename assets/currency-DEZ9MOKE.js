function R(){return`
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
    `}R.init=function(){const f="20a59c4e882a0bf4930e55a5",a=document.getElementById("amount"),u=document.getElementById("fromCurrency"),d=document.getElementById("toCurrency"),b=document.getElementById("swapCurrencies"),i=document.getElementById("convertBtn"),p=document.getElementById("currency-results"),m=document.getElementById("popular-rates");let y=new Map;const w=3e5;async function g(e,r){const t=`${e}-${r}`,o=y.get(t);if(o&&Date.now()-o.timestamp<w)return o.rate;try{const n=await fetch(`https://v6.exchangerate-api.com/v6/${f}/latest/${e}`);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const s=await n.json();if(s.result!=="success")throw new Error("API returned error");const l=s.conversion_rates[r];if(!l)throw new Error(`Currency ${r} not found`);return y.set(t,{rate:l,timestamp:Date.now()}),l}catch(n){throw console.error("Exchange rate error:",n),n}}async function c(){const e=parseFloat(a.value),r=u.value,t=d.value;if(!e||e<=0){h("Пожалуйста, введите корректную сумму");return}i.disabled=!0,i.textContent="Конвертация...";try{const o=await g(r,t),n=e*o;C(e,r,t,n,o),await E()}catch(o){console.error("Conversion error:",o),h("Произошла ошибка при получении данных. Попробуйте позже.")}finally{i.disabled=!1,i.textContent="💰 Конвертировать"}}function C(e,r,t,o,n){const s=v(e),l=v(o),$=v(n);p.innerHTML=`
            <div class="conversion-success">
                <div class="conversion-main">
                    <h2>${s} ${r} = ${l} ${t}</h2>
                </div>
                <div class="conversion-rate">
                    <p>1 ${r} = ${$} ${t}</p>
                </div>
            </div>
        `}function h(e){p.innerHTML=`
            <div class="card text-center error-state">
                <div class="error">
                    <h3 style="color: var(--accent-color); margin-bottom: 1rem;">⚠️ Ошибка</h3>
                    <p>${e}</p>
                </div>
            </div>
        `}async function E(){const r=["EUR","GBP","JPY","RUB"];try{const t=await F("USD",r);B("USD",t)}catch(t){console.error("Error loading popular rates:",t),m.innerHTML='<p style="color: var(--text-muted); text-align: center;">Не удалось загрузить курсы</p>'}}async function F(e,r){try{const t=await fetch(`https://v6.exchangerate-api.com/v6/${f}/latest/${e}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const o=await t.json();if(o.result!=="success")throw new Error("API returned error");const n={};return r.forEach(s=>{n[s]=o.conversion_rates[s]}),n}catch(t){throw console.error("Exchange rates error:",t),t}}function B(e,r){m.innerHTML="",Object.entries(r).forEach(([t,o])=>{const n=document.createElement("div");n.className="rate-item",n.innerHTML=`
                <div class="rate-pair">${e}/${t}</div>
                <div class="rate-value">${v(o)}</div>
            `,m.appendChild(n)})}function v(e){return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:4}).format(e)}function x(){const e=u.value,r=d.value;u.value=r,d.value=e,a.value&&a.value>0&&c()}function P(){a.value<0&&(a.value=0)}i.addEventListener("click",c),b.addEventListener("click",x),a.addEventListener("input",P),a.addEventListener("keypress",e=>{e.key==="Enter"&&c()}),u.addEventListener("change",()=>{a.value&&a.value>0&&c()}),d.addEventListener("change",()=>{a.value&&a.value>0&&c()}),a.addEventListener("input",()=>{a.value&&a.value>0?c():p.innerHTML=`
                <div class="card text-center p-3 default-state">
                    <p style="color: var(--text-muted);">Введите сумму и выберите валюты для конвертации</p>
                </div>
            `}),E()};export{R as default};
//# sourceMappingURL=currency-DEZ9MOKE.js.map
