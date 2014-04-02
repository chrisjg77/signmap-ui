// Require configuration
require.config({
  baseUrl: 'js/lib',
  paths: {
      jquery: 'jquery/jquery-2.1.0.min',
      handlebars: 'handlebars/handlebars-1.3.0',
      mapbox: 'mapbox/mapbox'
  }
});

// Load modules
require(['modules/load','mapbox','handlebars'], function() { 

  var map = L.mapbox.map('map', 'examples.map-9ijuk24y',{zoomControl: false})
    .setView([38, -122], 10);

  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();

});
