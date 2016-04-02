var key = $.getScript("./environment.js", function(){
  return key;
});

$(document).ready(function() {
    $('#chamber').hide();

    $('#state').on("change", function(){
      $('#chamber').fadeIn("slow");
    })

    $('#chamber').on("change", app.electedOfficial.controller.show.init)
  }
)

app.electedOfficial.controller = {
  show: {
    init: function(event){
      event.preventDefault();
      var stateInput = $('#state-dropdown').val();
      var chamberInput = $('#chamber-dropdown').val();

      app.electedOfficial.adapter.getBy(stateInput, chamberInput, key).then(function(data) {
        app.electedOfficial.controller.render(data);
      })
    }
  },
  render: function(data){
    $('.container-dropdown').fadeOut('fast')
    $('.modal-window').fadeIn('fast');

    _.each(data, function(member) {
      $('.modal-text').append("<div class='elected-official-name'>" + member.electedOfficial.firstName + " " + member.electedOfficial.lastName + "</div>");
    });
  }
}
