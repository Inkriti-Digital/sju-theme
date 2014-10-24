/*!
* SJU Custom Map API
*
*/

jQuery.noConflict();

var SJU = this.SJU || {};
  
  
jQuery(function ($) {
  //	'use strict';
  
  // Optimalisation: Store the references outside the event handler:
  var $window = $(window);
  var campusMap;
  
  var mapStyles = [
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'all',
      'stylers': [
        {
          'saturation': -70
        },
        {
          'lightness': 37
        },
        {
          'gamma': 1.15
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        },
        {
          'gamma': 0.26
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'all',
      'stylers': [
        {
          'hue': '#ffffff'
        },
        {
          'saturation': 0
        },
        {
          'lightness': 0
        },
        {
          'gamma': 0
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry',
      'stylers': [
        {
          'lightness': 20
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'hue': '#ffffff'
        },
        {
          'saturation': 0
        },
        {
          'lightness': 50
        }
      ]
    },
    {
      'featureType': 'administrative.province',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'lightness': -50
        }
      ]
    },
    {
      'featureType': 'administrative.province',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative.province',
      'elementType': 'labels.text',
      'stylers': [
        {
          'lightness': 20
        }
      ]
    }
  ];
  
  /**
   * Data for the markers consisting of a name, a LatLng and a zIndex for
   * the order in which these markers should display on top of each
   * other.
   */
  var campusLocations = [
    // title, description, long, lat, order, iconname, 
    //['Saint Josephs University', -75.238905,39.99526,0.0], Don't include this, since it has a custom icon
    ['Philadelphia Museum of Art','You can run up the Rocky steps here!',39.96557,-75.180966,0,'star'],
    ['Liberty Bell','One of America\'s most famous landmarks.',39.94961,-75.150282,0,'star'],
    ['Fairmount Park','Largest landscaped urban park in the world',39.996091,-75.205375,0,'star'],
    ['South Street','Where all the coolest people meet',39.941531,-75.149263,0,'star'],
    ['Penn\'s Landing','You can see New Jersey from here.',39.9468286,-75.140674,0,'star'],
    ['Main Street Manayunk','A quaint street with one-of-a-kind bistros and shops',40.026875,-75.2271867,0,'star'],
    ['King of Prussia Mall','The premier shopping destination of the East Coast.',40.089071,-75.385778,0,'star'],
    ['Overbrook Train Station','The shuttle can take you here, and then just a quick train ride to the city!',39.9894444,-75.2494444,0,'train'],
    ['Reading Terminal Market','An indoor market like no other.',39.95318,-75.159144,0,'star'],
    ['Independence Hall','The signing of the Declaration of Independence happened here!',39.948804,-75.149893,0,'star'],
    ['Nearest Hotel','Hilton Philadelphia City Avenue - Stay here when you visit!',40.004362,-75.218297,0,'hotel'],
    ['Office of Admissions','Your tour starts here!',39.9959448,-75.239954,0,'star'],
    ['Saint Joseph\'s University','Welcome to Hawk Hill!',39.99526,-75.238905,100,'sju',0.85]
  ];				
  var infoWindows = [
    {title:'Philadelphia Museum of Art',desc:'You can run up the Rocky steps here!'},
    {title:'Liberty Bell',desc:'One of America\'s most famous landmarks.'},
    {title:'Fairmount Park',desc:'Largest landscaped urban park in the world'},
    {title:'South Street',desc:'Where all the coolest people meet'},
    {title:'Penn\'s Landing',desc:'You can see New Jersey from here.'},
    {title:'Main Street Manayunk',desc:'A quaint street with one-of-a-kind bistros and shops'},
    {title:'King of Prussia Mall',desc:'The premier shopping destination of the East Coast.'},
    {title:'Overbrook Train Station',desc:'The shuttle can take you here, and then just a quick train ride to the city!'},
    {title:'Reading Terminal Market',desc:'An indoor market like no other.'},
    {title:'Independence Hall',desc:'The signing of the Declaration of Independence happened here!'},
    {title:'Nearest Hotel',desc:'Hilton Philadelphia City Avenue - Stay here when you visit!'},
    {title:'Office of Admissions',desc:'Your tour starts here!'},
    {title:'Saint Joseph\'s University',desc:'Welcome to Hawk Hill!'},
  ];
  
  SJUMap = {
    init: function () {
      
      
      // Run functions
      google.maps.event.addDomListener(window, 'load', SJUMap.initGoogleMap);
      
      $(document).ready(function (){
        
        var maptimer;
        var mapdelay = 1000;
        
        $('#map-canvas').hover(function() {
          maptimer = setTimeout(function() {
            campusMap.setOptions({scrollwheel: true});
          }, mapdelay);
        }, function() {
          clearTimeout(maptimer);
          campusMap.setOptions({scrollwheel: false});
        });        
        
      });
      
    },
    initGoogleMap: function (){
      var sjucampus = new google.maps.LatLng(39.99526,-75.238905);
      var mapOptions = {
        zoom: 12,
        center: sjucampus,
        scrollwheel: false,
        styles: mapStyles
      }

      campusMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      
      campusMap.setOptions({});
      SJUMap.setMapMarkers();
      /*
      var mapsEngineLayer = new google.maps.visualization.MapsEngineLayer({
        mapId: '03707230449978860800-08112974690991164587',
        layerKey: 'layer_00001',
        map: campusMap,
        clickable: true,
        suppressInfoWindows: false
      });
      */
    },
    setMapMarkers: function (){
 
      for (var i = 0; i < campusLocations.length; i++) {
        var campuslocation = campusLocations[i];
        var location = new google.maps.LatLng(campuslocation[2], campuslocation[3]);
        var mapImage = {
          url: 'assets/img/mapicons/'+campuslocation[5]+'.png',
          size: new google.maps.Size(35, 36),
          origin: new google.maps.Point(0,0),
          anchor: new google.maps.Point(0, 32)
        };
        if(campuslocation[5] == 'star'){
          mapImage.size = new google.maps.Size(22,22);
          mapImage.anchor = new google.maps.Point(0, 22);
        }
        var campusmarker = new MarkerWithLabel({
          position: location,
          map: campusMap,
          title: campuslocation[0],
          icon: mapImage,
          labelContent: campuslocation[0],
          labelClass: 'labels', // the CSS class for the label
          labelStyle: {opacity: 0.9},
          animation: google.maps.Animation.DROP,
          zIndex: campuslocation[3],
          infoWindowIndex : i
        });

        var content = '<h3>' + campuslocation[0] + '</h3><p>' + campuslocation[1] + '</p>';
        var infoWindow = new google.maps.InfoWindow({
          content : content
        });

        // Allow each marker to have an info window    
        google.maps.event.addListener(campusmarker, 'click', (function(campusmarker, i) {
          
          return function() {
            ga('send', 'event', 'Mini-Viewbook', 'Map Markers', infoWindows[i].title);
            infoWindow.setContent('<h3>' + infoWindows[i].title + '</h3><p>' + infoWindows[i].desc + '</p>');
            infoWindow.open(campusMap, campusmarker);
          }
        })(campusmarker, i));      
      }
      
      
    },
  };  
  // Initialize SJU application
  SJUMap.init();
  
});
