var map;

function locationFinder() {
    var locations = [];
    for (var s = 0; s < education.schools.length; s++){
      if (education.schools[s].location.coord)
        locations.push(education.schools[s].location.coord);
    return locations;
  }
}

function initMap() {
  var locations = locationFinder();
  map = new google.maps.Map(document.getElementById("map"),{
    center: locations[0],
    zoom: 13
  });
  var marker = new google.maps.Marker({
    position: locations[0],
    map: map,
    title: 'My School'
  });
}
// function initializeMap() {
//
//   var locations;
//   var mapOptions = {
//     disableDefaultUI: true
//   };
//   map = new google.maps.Map(document.querySelector('#map'), mapOptions);
//
//   function locationFinder() {
//
//     var locations = [];
//
//     //locations.push(bio.contacts.location);
//     locations.push("McGill University");
//
//
//     // education.schools.forEach(function(school){
//     //   locations.push(school.location);
//     // });
//
//     // work.jobs.forEach(function(job){
//     //   locations.push(job.location);
//     // });
//
//     return locations;
//   }
//
//
//   function createMapMarker(placeData) {
//
//     var lat = placeData.geometry.location.lat();
//     var lon = placeData.geometry.location.lng();
//     var name = placeData.formatted_address;
//     var bounds = window.mapBounds;
//
//     var marker = new google.maps.Marker({
//       map: map,
//       position: placeData.geometry.location,
//       title: name
//     });
//     var infoWindow = new google.maps.InfoWindow({
//       content: name
//     });
//
//     google.maps.event.addListener(marker, 'click', function() {
//       // your code goes here!
//     });
//
//     bounds.extend(new google.maps.LatLng(lat, lon));
//     // fit the map to the new marker
//     map.fitBounds(bounds);
//     // center the map
//     map.setCenter(bounds.getCenter());
//   }
//
//   function callback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       createMapMarker(results[0]);
//     }
//   }
//
//
//   function pinPoster(locations) {
//     var service = new google.maps.places.PlacesService(map);
//
//       locations.forEach(function(place){
//       var request = {
//         query: place
//       };
//       service.textSearch(request, callback);
//     });
//   }
//   window.mapBounds = new google.maps.LatLngBounds();
//   locations = locationFinder();
//   pinPoster(locations);
//
// }
//
// window.addEventListener('load', initializeMap);
// window.addEventListener('resize', function(e) {
//   map.fitBounds(mapBounds);
// });
