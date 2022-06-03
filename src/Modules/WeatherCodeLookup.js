import clear from '../Assets/clear.jpg';
import partially_cloudy from '../Assets/partially_cloudy.jpg';
import cloudy from '../Assets/cloudy.jpg';
import foggy from '../Assets/foggy.jpg';
import drizzle from '../Assets/drizzle.jpg';
import freezing_drizzle from '../Assets/freezing_drizzle.jpg';
import rain from '../Assets/rain.jpg';
import freezing_rain from '../Assets/freezing_rain.jpg';
import snow from '../Assets/snow.jpg';
import thunderstorm from '../Assets/thunderstorm.jpg';

const weatherCodes = {
    0: {
        "icon": "wi wi-day-sunny",
        "name": "Clear",
        "image": clear
    },
    1: {
        "icon": "wi wi-day-cloudy",
        "name": "Partially Cloudy",
        'image': partially_cloudy
    },
    2: {
        "icon": "wi wi-day-cloudy",
        "name": "Mostly Cloudy",
        'image': partially_cloudy
    },
    3: {
        "icon": "wi wi-cloud",
        "name": "Cloudy",
        'image': cloudy
    },
    45: {
        "icon": "wi wi-fog",
        "name": "Foggy",
        'image': foggy
    },
    51: {
        "icon": "wi wi-sprinkle",
        "name": "Light Drizzle",
        'image': drizzle
    },
    53: {
        "icon": "wi wi-sprinkle",
        "name": "Moderate Drizzle",
        'image': drizzle
    },
    55: {
        "icon": "wi wi-rain",
        "name": "Heavy Drizzle",
        'image': drizzle
    },
    56: {
        "icon": "wi wi-rain-mix",
        "name": "Freezing Drizzle",
        'image': freezing_drizzle
    },
    57: {
        "icon": "wi wi-rain-mix",
        "name": "Freezing Drizzle",
        'image': freezing_drizzle
    },
    61: {
        "icon": "wi wi-rain",
        "name": "Light Rain",
        'image': rain
    },
    63: {
        "icon": "wi wi-rain",
        "name": "Moderate Rain",
        'image': rain
    },
    65: {
        "icon": "wi wi-rain",
        "name": "Heavy Rain",
        'image': rain
    },
    66: {
        "icon": "cloudy_snowing",
        "name": "Freezing Rain",
        'image': freezing_rain
    },
    67: {
        "icon": "cloudy_snowing",
        "name": "Freezing Rain",
        'image': freezing_rain
    },
    71: {
        "icon": "cloudy_snowing",
        "name": "Freezing Rain",
        'image': freezing_rain
    },
    73: {
        "icon": "cloudy_snowing",
        "name": "Snow Fall",
        'image': snow
    },
    75: {
        "icon": "cloudy_snowing",
        "name": "Snow Fall",
        'image': snow
    },
    77: {
        "icon": "cloudy_snowing",
        "name": "Snow Fall",
        'image': snow
    },
    80: {
        "icon": "rainy",
        "name": "Rain Showers",
        'image': rain
    },
    81: {
        "icon": "rainy",
        "name": "Rain Showers",
        'image': rain
    },
    82: {
        "icon": "rainy",
        "name": "Rain Showers",
        'image': rain
    },
    85: {
        "icon": "cloudy_snowing",
        "name": "Snow Showers",
        'image': snow
    },
    86: {
        "icon": "cloudy_snowing",
        "name": "Snow Showers",
        'image': snow
    },
    95: {
        "icon": "wi wi-thunderstorm",
        "name": "Thunderstorms",
        'image': thunderstorm

    },
    96: {
        "icon": "wi wi-thunderstorm",
        "name": "Thunderstorms",
        'image': thunderstorm
    },
    99: {
        "icon": "wi wi-thunderstorm",
        "name": "Thunderstorms",
        'image': thunderstorm
    }
}

export default weatherCodes;