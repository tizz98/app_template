function getWeather(location) {
	if (location == undefined) {
		var location = document.getElementById("loc").value;
	}

	var url = "https://query.yahooapis.com/v1/public/yql?q=SELECT * FROM weather.forecast WHERE woeid in (select woeid from geo.places(1) where text='" + location + "') and u='f'&format=json";

	$.getJSON( url, function( data ) {
		var obj = data.query.results;

		if (data.query.count > 0) {
			document.getElementById('error').style.display = 'none';
			location = obj.channel.location.city

			if (obj.channel.location.region != "") {
				location += ", " + obj.channel.location.region;
			}

			location += ", " + obj.channel.location.country;

			var temp = obj.channel.item.condition.temp;
			var cond = obj.channel.item.condition.text;
			var icon = '<i class ="wi ' + weatherIcon(obj.channel.item.condition.code) + '"></i>';

			var find  = document.getElementById('find');
			var found = document.getElementById('found');

			var my_loc  = document.getElementById('location');
			var my_cond = document.getElementById('cond');
			var my_temp = document.getElementById('temp');
			var my_icon = document.getElementById('icon');

			my_temp.innerHTML = temp;
			my_cond.innerHTML = cond;
			my_loc.innerHTML  = location;
			my_icon.innerHTML = icon;

			find.style.display  = 'none';
			found.style.display = 'block';
		} else {
			document.getElementById('error').style.display = 'block';
		}
	});
}

function showSearch() {
	var find  = document.getElementById('find');
	var found = document.getElementById('found');

	find.style.display  = 'block';
	found.style.display = 'none';
	$("#loc").focus();
}

$( document ).ready(function() {
	$.get("http://ipinfo.io", function(response) {
	    var location = response.city + ", " + response.region;
	    getWeather(location);
	}, "jsonp");
});