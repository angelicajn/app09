// JavaScript Document

$(document).ready(function(e){
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
	  
	  $('localizar').on('tap' , function () {
		  navigator.geolocation.getCurrentPosition(function (position) {
			  $('#localizacion').html('Latitude:'        + position.coords.latitude         +'\n'+
			  'Longitude:'            + position.coords.longitude        +'\n'+
			  'Altitude:'             + position.coords.altitude         +'\n'+
			  'Accuracy:'             + position.coords.accuracy         +'\n'+
			  'Altitude Alcuracy:'    + position.coords.altitudeAcuracy  +'\n'+
			  'Heading:'              + position.coords.geading          +'\n'+
			  'Speed:'                + position.coords.speed            +'\n'+
			  'Timestamp:'            + position.timesstamp              +'\n');
		  }, $('localizacion').html('Error en la localizacion') );
	  });
  }
});//documento ready