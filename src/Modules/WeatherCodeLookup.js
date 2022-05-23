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
        "icon": "clear_day",
        "name": "Clear",
        "image": clear
    },
    1: {
        "icon": "partly_cloudy_day",
        "name": "Partially Cloudy",
        'image': partially_cloudy
    },
    2: {
        "icon": "partly_cloudy_day",
        "name": "Mostly Cloudy",
        'image': partially_cloudy
    },
    3: {
        "icon": "cloudy",
        "name": "Cloudy",
        'image': cloudy
    },
    45: {
        "icon": "foggy",
        "name": "Foggy",
        'image': foggy
    },
    51: {
        "icon": "rainy",
        "name": "Light Drizzle",
        'image': drizzle
    },
    53: {
        "icon": "rainy",
        "name": "Moderate Drizzle",
        'image': drizzle
    },
    55: {
        "icon": "rainy",
        "name": "Heavy Drizzle",
        'image': drizzle
    },
    56: {
        "icon": "cloudy_snowing",
        "name": "Freezing Drizzle",
        'image': freezing_drizzle
    },
    57: {
        "icon": "cloudy_snowing",
        "name": "Freezing Drizzle",
        'image': freezing_drizzle
    },
    61: {
        "icon": "rainy",
        "name": "Light Rain",
        'image': rain
    },
    63: {
        "icon": "rainy",
        "name": "Moderate Rain",
        'image': rain
    },
    65: {
        "icon": "rainy",
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
        "icon": "thunderstorm",
        "name": "Thunderstorms",
        'image': thunderstorm

    },
    96: {
        "icon": "thunderstorm",
        "name": "Thunderstorms",
        'image': thunderstorm
    },
    99: {
        "icon": "thunderstorm",
        "name": "Thunderstorms",
        'image': thunderstorm
    }
}

export default weatherCodes;