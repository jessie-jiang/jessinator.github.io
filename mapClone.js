var view;
var map;
var initialLocation;
var chad;
var greece;


function init() {
  initialLocation = ol.proj.fromLonLat([41.043316, 28.862457]);
  chad = ol.proj.fromLonLat([19.060548, 15.744906]);
  greece = ol.proj.fromLonLat([])

  view = new ol.View({
    center: initialLocation,
    zoom: 6
  });


map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  loadTilesWhileAnimating: true,
  view: view

  });
}

function panChad() {
  view.animate({
    center: chad,
    duration:2000
  });
}

function spinGreece() {
  view.animate({
    center: greece,
    duration: 2000
  });
}

window.onload = init;

// function onClick(id, callback) {
//         document.getElementById(id).addEventListener('click', callback);
//       }
//
// onClick('randomLoc', function() {
//   view.animate({
//     center: randomNum,
//     duration: 2000
//   });
// });
