

mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlb25pdCIsImEiOiJja294Z3VxZ3owOTAyMm9yOTRzcmRybThmIn0.HXrYgdGet2QhgDRoDYI7Pg';
let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'

var element = document.createElement('div')
element.className = 'marker'



var marker = new mapboxgl.Marker(element),setLngLat({
    lng:-45.876194,
    lat:-67.518467
})

.addTo(map)