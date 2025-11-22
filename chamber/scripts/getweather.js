urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=36.716742&lon=-4.426252&units=metric&appid=20f985b5642525080572bec5c9abb16c';
apiFetch(urlWeather);


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}


function displayWeather(data) {
    const weatherIcon = document.querySelector('#weather-icon');
    const temperature = document.querySelector('#temperature');
    const description = document.querySelector('#description');

    console.log(data)
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    temperature.innerHTML = `<span class="bold">${data.main.temp}&deg;C,</span>`;
    description.innerHTML = data.weather[0].description;
}