$(document).ready(function() {
    $('#chamber').hide();

    $('#state').on("change", function(){
      $('#chamber').fadeIn("slow");
    })

    $('#chamber').on("change", app.electedOfficial.controller.show.init)
  }
)

var expandModalWindow = function(){
   $('.modal-text').hide();

   $( ".modal-window" ).animate({
     height: "80%",
     width: "85%"
   });


}
