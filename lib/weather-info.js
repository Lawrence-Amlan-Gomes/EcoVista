export const getWeatherData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8325a5f47aaefd05c0b644494edaec34&units=metric`
        );
        const data = await response.json();
        return data?.weather[0];
    } catch (e) {
        console.error(e.message);
    }
};

export const getTemperatureData = async (lat, lon) => {
    console.log(lat, lon);
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8325a5f47aaefd05c0b644494edaec34&units=metric`
        );
        const data = await response.json();
        return data?.main;
    } catch (e) {
        console.error(e.message);
    }
};

export const getWindData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8325a5f47aaefd05c0b644494edaec34&units=metric`
        );
        const data = await response.json();
        return data?.wind;
    } catch (e) {
        console.error(e.message);
    }
};

export const getAQIData = async (lat, lon) => {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=8325a5f47aaefd05c0b644494edaec34`
        );
        const data = await response.json();
        return data?.list[0];
    } catch (e) {
        console.error(e.message);
    }
};
