  // Create a map centered on NYC
  var map = L.map('map').setView([40.731649,-73.977814], 10);
  
  // Add a base layer. We're using Stamen's Toner:
  //  http://maps.stamen.com/#toner
  L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
    maxZoom: 18
}).addTo(map);
  
  // Create Borough Layers

var base = 'https://bk741.cartodb.com/api/v2/sql?q=select*from%20graffiti_information_2015%20where%20borough%20in%20(%27'
var gend = '%27)&format=GeoJson'


var Manhattan = new L.GeoJSON.AJAX(base+"MANHATTAN"+gend);
var Bronx = new L.GeoJSON.AJAX(base+"BRONX"+gend);
var Brooklyn = new L.GeoJSON.AJAX(base+"BROOKLYN"+gend);
var Queens = new L.GeoJSON.AJAX(base+"QUEENS"+gend);
var statenIsland = new L.GeoJSON.AJAX(base+"STATEN ISLAND"+gend);

// //create data

var based =  'https://bk741.cartodb.com/api/v2/sql?q=select%20count(borough)%20from%20graffiti_information_2015%20where%20borough%20in%20(%27'
var dend = '%27)'

// var Man =  $.getJSON(based+"MANHATTAN"+dend)


//add data

$("#text").hide();

$("#Man").click(function(){
	map.addLayer(Manhattan);
	map.removeLayer(Bronx);
	map.removeLayer(Brooklyn);
	map.removeLayer(Queens);
	map.removeLayer(statenIsland);
	$("#text").show();
	$('#borough').prev().remove('span')
	$("#borough").before('<span>Manhattan</span>');
	$.getJSON(based+"MANHATTAN"+dend, function(data) {
  	$.each(data.rows, function(key, val) {
  	$('#district').append($("<li></li>")).text(this.count)
	});

});



});

$("#BX").click(function(){
	map.addLayer(Bronx);
	map.removeLayer(Manhattan);
	map.removeLayer(Brooklyn);
	map.removeLayer(Queens);
	map.removeLayer(statenIsland);
	$("#text").show();
	$('#borough').prev().remove('span')
	$("#borough").before('<span>the Bronx</span>');
	$.getJSON(based+"BRONX"+dend, function(data) {
  	$.each(data.rows, function(key, val) {
  	$('#district').append($("<li></li>")).text(this.count)
	});

});
});

$("#BK").click(function(){
	map.addLayer(Brooklyn);
	map.removeLayer(Manhattan);
	map.removeLayer(Bronx);
	map.removeLayer(Queens);
	map.removeLayer(statenIsland);
	$("#text").show();
	$('#borough').prev().remove('span')
	$("#borough").before('<span>Brooklyn</span>');
	$.getJSON(based+"BROOKLYN"+dend, function(data) {
  	$.each(data.rows, function(key, val) {
  	$('#district').append($("<li></li>")).text(this.count)
	});

});

});

$("#QN").click(function(){
	map.addLayer(Queens);
	map.removeLayer(Manhattan);
	map.removeLayer(Brooklyn);
	map.removeLayer(Bronx);
	map.removeLayer(statenIsland);
	$("#text").show();
	$('#borough').prev().remove('span')
	$("#borough").before('<span>Queens</span>');
	$.getJSON(based+"QUEENS"+dend, function(data) {
  	$.each(data.rows, function(key, val) {
  	$('#district').append($("<li></li>")).text(this.count)
	});

});

});

$("#SI").click(function(){
	map.addLayer(statenIsland);
	map.removeLayer(Manhattan);
	map.removeLayer(Brooklyn);
	map.removeLayer(Bronx);
	map.removeLayer(Queens);
	$("#text").show();
	$('#borough').prev().remove('span')
	$("#borough").before('<span>Staten Island</span>');
	$.getJSON(based+"STATEN ISLAND"+dend, function(data) {
  	$.each(data.rows, function(key, val) {
  	$('#district').append($("<li></li>")).text(this.count)
	});

});

});

