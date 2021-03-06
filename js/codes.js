function weatherIcon(code) {
	switch (parseInt(code)) {
		case 0  : return "wi-tornado";
		case 1  : 
		case 2  : return "wi-hurricane";
		case 3  : 
		case 4  : return "wi-thunderstorm";
		case 5  :
		case 6  :
		case 7  : return "wi-rain-mix";
		case 8  : return "wi-rain-wind";
		case 9  : return "wi-sprinkle";
		case 10 : return "wi-hail";
		case 11 : 
		case 12 : return "wi-showers";
		case 13 : 
		case 14 : 
		case 15 :
		case 16 : return "wi-snow";
		case 17 : 
		case 18 : return "wi-hail";
		case 19 : return "wi-dust";
		case 20 : 
		case 21 : return "wi-fog";
		case 22 : return "wi-smoke";
		case 23 : 
		case 24 : return "wi-strong-wind";
		case 25 : return "wi-snowflake-cold";
		case 26 : return "wi-cloudy";
		case 27 : return "wi-night-cloudy";
		case 28 : return "wi-day-cloudy";
		case 29 : return "wi-night-partly-cloudy";
		case 30 : return "wi-day-sunny-overcast";
		case 31 : return "wi-stars";
		case 32 : return "wi-day-sunny";
		case 33 : return "wi-night-clear";
		case 34 : return "wi-day-sunny";
		case 35 : return "wi-rain-mix";
		case 36 : return "wi-hot";
		case 37 : return "wi-thunderstorm";
		case 38 :
		case 39 : return "wi-storm-showers";
		case 40 : return "wi-showers";
		case 41 : 
		case 42 : 
		case 43 : return "wi-snow";
		case 44 : return "wi-cloudy";
		case 45 : return "wi-storm-showers";
		case 46 : return "wi-snow";
		case 47 : return "wi-thunderstorm";

		case 3200 : return "wi-alien";
		defualt   : return "wi-alien";
	}
}