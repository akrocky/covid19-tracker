window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/225')
	.then(function(resp) { return resp.json() })
	.then(data=> {
        console.log(data);

		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;
        let country = data.location.country;
      
         document.getElementById('country').innerText=country;
		document.getElementById('population').innerHTML = population.toLocaleString('en');
		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";




	})
	.catch(function() {
		console.log("error");
	})
}
