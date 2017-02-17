$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
  $(".apple").hover(function(){
      $(".apple").css("border-radius", "0");
  });
});
