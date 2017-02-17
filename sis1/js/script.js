$(document).ready(function(){
  $(".jumborton").hover(function(){
      $(".header").css("background-color", "rgba(14, 152, 30, 0.49)");
  });
});

$(document).ready(function(){
  $(".textblock").hover(function(){
      $("#alma").css("background-color", "black");
  });
});


$( function() {
  $( "input" ).checkboxradio();
  $( "fieldset" ).controlgroup();
} );
