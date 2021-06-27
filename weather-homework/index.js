const APP_ID = '755f8fac4695a2c84fd8f2e3f6e3e671'

const countryForm = document.getElementById('city-search')

countryForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const input = document.getElementById('city')
    const value = input.value

    try {
        const weather = await fetchWeatherByCityAsync(value)

        if (weather.cod !== 200) {
            throw new Error(weather.cod + ' ' + weather.message)
        }

        renderWeather(weather)
    } catch (error) {
        renderError(error)
    }

    input.value = ''
})

function renderWeather(weather) {
    const h2 = document.createElement('h2')

    h2.innerHTML = weather.name

    document.body.appendChild(h2)
}

function renderError(error) {
    console.log('caught the error')
    const h2 = document.createElement('h2')
    h2.innerHTML = 'Error: ' + error.message

    document.body.appendChild(h2)
}

function fetchWeatherByCityPromise(city) {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`
    ).then((res) => res.json())
}

async function fetchWeatherByCityAsync(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`
    )
    const data = await response.json()

    console.log(data.name)

    return data
}
