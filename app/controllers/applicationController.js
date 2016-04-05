$(document).ready(function() {
  $('#chamber').hide(); // Hide Chamber Dropdown until user selects state

  $('#state').on("change", function(){
    $('#chamber').fadeIn("slow"); // Show Chamber Dropdown after user selects state
  })

  // Upon selecting a chamber, make AJAX call
  $('#chamber').on("change", app.electedOfficial.controller.show.init)

  // TRUMP EASTER EGG
  $('.trump-modal').hide(); // Hide Trump Easter Egg GIF
  $('#logo').hover(function() {
     $('.trump-modal').show();
  }, function() {
    $('.trump-modal').hide();
  });
});

var expandModalWindow = function() {
  // Hide Modal Window Text After selecting representative
   $('.modal-text').hide();
  // Animate Modal Window after selected representative
   $( ".modal-window" ).animate({
     height: "75%",
     width: "75%"
   });
}
