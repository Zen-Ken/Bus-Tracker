mapboxgl.accessToken='pk.eyJ1Ijoia2VubHVvbmc0NTYiLCJhIjoiY2w4eXAzdmRlMGlobDN2bzlvajh6N3NwcyJ9.Bb6eea-ULic2NjPO9F9yUg'

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-71.104081, 42.365554],
	zoom: 14 
});

let currentBusLocations = [];
let markers = [];

async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());

	markers.forEach(element =>{
		element.remove();
	});
	
	for (let i = 0; i < locations.length; i++){
		currentBusLocations.push([locations[i].attributes.longitude, locations[i].attributes.latitude]);
	}

	console.log(currentBusLocations);

	
	currentBusLocations.forEach((element, index) => {
		markers.push(new mapboxgl.Marker()
			.setLngLat(element)
			.addTo(map)
		)
	});

	
	currentBusLocations = [];


	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();