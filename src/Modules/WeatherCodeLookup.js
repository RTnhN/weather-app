import sunny1 from '../Assets/sunny/sunny1.jpg';
import sunny2 from '../Assets/sunny/sunny2.jpg';
import sunny3 from '../Assets/sunny/sunny3.jpg';
import sunny4 from '../Assets/sunny/sunny4.jpg';
import sunny5 from '../Assets/sunny/sunny5.jpg';
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
        "day": {
            "icon": "wi wi-day-sunny",
            "name": "Sunny",
            "image": [sunny1, sunny2, sunny3, sunny4, sunny5]
        },
        "night": {
            "icon": "wi wi-night-clear",
            "name": "Clear",
            "image": [sunny1]
        }
    },
    1: {
        "day": {
            "icon": "wi wi-day-cloudy",
            "name": "Partially Cloudy",
            "image": [partially_cloudy]
        },
        "night": {
            "icon": "wi wi-night-alt-cloudy",
            "name": "Partially Cloudy",
            "image": [partially_cloudy]
        }
    },
    2: {
        "day": {
            "icon": "wi wi-day-cloudy",
            "name": "Mostly Cloudy",
            'image': [partially_cloudy]
        },
        "night": {
            "icon": "wi wi-night-alt-cloudy",
            "name": "Mostly Cloudy",
            'image': [partially_cloudy]
        }
    },
    3: {
        "day": {
            "icon": "wi wi-cloud",
            "name": "Cloudy",
            'image': [cloudy]
        },
        "night": {
            "icon": "wi wi-cloud",
            "name": "Cloudy",
            'image': [cloudy]
        }
    },
    45: {
        "day": {
            "icon": "wi wi-day-fog",
            "name": "Foggy",
            'image': [foggy]
        },
        "night": {
            "icon": "wi wi-night-fog",
            "name": "Foggy",
            'image': [foggy]
        }
    },
    51: {
        "day": {
            "icon": "wi wi-day-sprinkle",
            "name": "Light Drizzle",
            'image': [drizzle]
        },
        "night": {
            "icon": "wi wi-night-sprinkle",
            "name": "Light Drizzle",
            'image': [drizzle]
        }
    },
    53: {
        "day": {
            "icon": "wi wi-day-sprinkle",
            "name": "Moderate Drizzle",
            'image': [drizzle]
        },
        "night": {
            "icon": "wi wi-night-sprinkle",
            "name": "Moderate Drizzle",
            'image': [drizzle]
        }
    },
    55: {
        "day": {
            "icon": "wi wi-day-sprinkle",
            "name": "Heavy Drizzle",
            'image': [drizzle]
        },
        "night": {
            "icon": "wi wi-night-alt-sprinkle",
            "name": "Heavy Drizzle",
            'image': [drizzle]
        }
    },
    56: {
        "day": {
            "icon": "wi wi-day-rain-mix",
            "name": "Freezing Drizzle",
            'image': [freezing_drizzle]
        },
        "night": {
            "icon": "wi wi-night-alt-rain-mix",
            "name": "Freezing Drizzle",
            'image': [freezing_drizzle]
        }
    },
    57: {
        "day": {
            "icon": "wi wi-day-rain-mix",
            "name": "Freezing Drizzle",
            'image': [freezing_drizzle]
        },
        "night": {
            "icon": "wi wi-night-alt-rain-mix",
            "name": "Freezing Drizzle",
            'image': [freezing_drizzle]
        }
    },
    61: {
        "day": {
            "icon": "wi wi-day-rain",
            "name": "Light Rain",
            'image': [rain]
        },
        "night": {
            "icon": "wi wi-night-alt-rain",
            "name": "Light Rain",
            'image': [rain]
        }
    },
    63: {
        "day": {
            "icon": "wi wi-day-rain",
            "name": "Moderate Rain",
            'image': [rain]
        },
        "night": {
            "icon": "wi wi-night-alt-rain",
            "name": "Moderate Rain",
            'image': [rain]
        }
    },
    65: {
        "day": {
            "icon": "wi wi-day-rain",
            "name": "Heavy Rain",
            'image': [rain]
        },
        "night": {
            "icon": "wi wi-night-alt-rain",
            "name": "Heavy Rain",
            'image': [rain]
        }
    },
    66: {
         "day": {
            "icon": "wi wi-day-sleet",
            "name": "Freezing Rain",
            'image': [freezing_rain]
        },
        "night": {
            "icon": "wi wi-night-alt-sleet",
            "name": "Freezing Rain",
            'image': [freezing_rain]
        }
    },
    67: {
        "day": {
            "icon": "wi wi-day-sleet",
            "name": "Freezing Rain",
            'image': [freezing_rain]
        },
        "night": {
            "icon": "wi wi-night-alt-sleet",
            "name": "Freezing Rain",
            'image': [freezing_rain]
        }
    },
    71: {
        "day": {
            "icon": "wi wi-day-sleet",
            "name": "Freezing Rain",
            'image': [freezing_rain]
        },
        "night": {
            "icon": "wi wi-night-alt-sleet",
            "name": "Freezing Rain",
            'image': [freezing_rain]
        }
    },
    73: {
        "day": {
            "icon": "wi wi-day-snow",
            "name": "Snow Fall",
            'image': [snow]
        },
        "night": {
            "icon": "wi wi-night-alt-snow",
            "name": "Snow Fall",
            'image': [snow]
        }
    },
    75: {
        "day": {
            "icon": "wi wi-day-snow",
            "name": "Snow Fall",
            'image': [snow]
        },
        "night": {
            "icon": "wi wi-night-alt-snow",
            "name": "Snow Fall",
            'image': [snow]
        }
    },
    77: {
        "day": {
            "icon": "wi wi-day-snow",
            "name": "Snow Fall",
            'image': [snow]
        },
        "night": {
            "icon": "wi wi-night-alt-snow",
            "name": "Snow Fall",
            'image': [snow]
        }
    },
    80: {
        "day": {
            "icon": "wi wi-day-rain",
            "name": "Rain Showers",
            'image': [rain]
        },
        "night": {
            "icon": "wi wi-night-alt-rain",
            "name": "Rain Showers",
            'image': [rain]
        }
    },
    81: {
        "day": {
            "icon": "wi wi-day-rain",
            "name": "Rain Showers",
            'image': [rain]
        },
        "night": {
            "icon": "wi wi-night-alt-rain",
            "name": "Rain Showers",
            'image': [rain]
        }
    },
    82: {
        "day": {
            "icon": "wi wi-day-rain",
            "name": "Rain Showers",
            'image': [rain]
        },
        "night": {
            "icon": "wi wi-night-alt-rain",
            "name": "Rain Showers",
            'image': [rain]
        }
    },
    85: {
        "day": {
            "icon": "wi wi-day-snow",
            "name": "Snow Showers",
            'image': [snow]
        },
        "night": {
            "icon": "wi wi-night-alt-snow",
            "name": "Snow Showers",
            'image': [snow]
        }
    },
    86: {
        "day": {
            "icon": "wi wi-day-snow",
            "name": "Snow Showers",
            'image': [snow]
        },
        "night": {
            "icon": "wi wi-night-alt-snow",
            "name": "Snow Showers",
            'image': [snow]
        }
    },
    95: {
        "day": {
            "icon": "wi wi-day-thunderstorm",
            "name": "Thunderstorms",
            'image': [thunderstorm]
        },
        "night": {
            "icon": "wi wi-night-alt-thunderstorm",
            "name": "Thunderstorms",
            'image': [thunderstorm]
        }
    },
    96: {
        "day": {
            "icon": "wi wi-day-thunderstorm",
            "name": "Thunderstorms",
            'image': [thunderstorm]
        },
        "night": {
            "icon": "wi wi-night-alt-thunderstorm",
            "name": "Thunderstorms",
            'image': [thunderstorm]
        }
    },
    99: {
        "day": {
            "icon": "wi wi-day-thunderstorm",
            "name": "Thunderstorms",
            'image': [thunderstorm]
        },
        "night": {
            "icon": "wi wi-night-alt-thunderstorm",
            "name": "Thunderstorms",
            'image': [thunderstorm]
        }
    }
}

export default weatherCodes;