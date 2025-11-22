urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.716742&lon=-4.426252&units=metric&appid=20f985b5642525080572bec5c9abb16c';
apiFetch(urlForecast);

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}


function displayForecast(data) {
    const today = document.querySelector('#today');
    const tomorrow = document.querySelector('#tomorrow');
    const afterTomorrow = document.querySelector('#after-tomorrow');

    today.innerHTML = `<span class="bold">Today:</span> ${data.list[0].main.temp}&deg;C, ${data.list[0].weather[0].description}`;
    tomorrow.innerHTML = `<span class="bold">${getDay(data.list[8].dt_txt)}:</span> ${data.list[8].main.temp}&deg;C, ${data.list[8].weather[0].description}`;
    afterTomorrow.innerHTML = `<span class="bold">${getDay(data.list[16].dt_txt)}:</span> ${data.list[16].main.temp}&deg;C, ${data.list[16].weather[0].description}`;
}

function getDay(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
}