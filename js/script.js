  // Create a map centered on NYC
  var map = L.map('map').setView([40.731649,-73.977814], 10);
  
  // Add a base layer. We're using Stamen's Toner:
  //  http://maps.stamen.com/#toner
  L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
    maxZoom: 18
}).addTo(map);
  

$("#text").hide();

$.getJSON('https://bk741.cartodb.com/api/v2/sql?q=select distinct(borough)%20from%20graffiti_information_2015', function(data) {
 
  	$.each(data.rows, function() {
  	$('#boroughs').append(
		"<input type = 'submit' class = 'borough, two columns' value='"
		+ this.borough
		+ "'>" 
		+"</input>");
 
});

});
var geoJsonLayer = L.geoJson(null).addTo(map);

  var id;
  $(document).on("click", "input", function (event) {
      //should not not var here, using var here will declare the variable id as a local variable in the handler function scope
      id = $(this).attr('value') || '';
      $("#text").show();
      	$('#name').prev().remove('span')
	$("#name").before('<span>'+id+'</span>');
      console.log(id);
	geoJsonLayer.clearLayers();

    $.getJSON(based+id+dend, function(data) {
  	$.each(data.rows, function(key, val) {
  	$('#district').append($("<li></li>")).text(this.count);
  	
	 $.getJSON(base+id+gend)
	  	// When it's done, add the results to the map
	    .done(function (data) {
	      geoJsonLayer.addData(data)   
	    });
	});
  	});

});

  $(function () {
      $(".borough").click(function (e) {
          console.log(id);
      
	});
	});


var based =  'https://bk741.cartodb.com/api/v2/sql?q=select%20count(borough)%20from%20graffiti_information_2015%20where%20borough%20in%20(%27'
var dend = '%27)'

var base = 'https://bk741.cartodb.com/api/v2/sql?q=select*from%20graffiti_information_2015%20where%20borough%20in%20(%27'
var gend = '%27)&format=GeoJson'








