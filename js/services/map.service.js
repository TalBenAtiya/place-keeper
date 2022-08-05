'use strict'
let map

function initMap() {
  const eilat = { lat: 29.5577, lng: 34.9519 }
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: eilat,
  })
  new google.maps.Marker({
    position: eilat,
    map,
  })

  map.addListener('click', (mapsMouseEvent) => {
    const lat = mapsMouseEvent.latLng.lat()
    const lng = mapsMouseEvent.latLng.lng()
    const position = { lat, lng }

    const locationName = prompt('Enter location name')
    if (locationName) {
      onAddPlace(position, locationName)

      new google.maps.Marker({
        position: position,
        map: map,
      })
    }
  })
}