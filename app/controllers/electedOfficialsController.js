var key = $.getScript("./environment.js", function(){
  return key;
});

$(document).ready(function() {
    $('#chamber').hide();

    $('#state').on("change", function(){
      $('#chamber').show();
    })

    $('#chamber').on("change", app.electedOfficial.controller.show.init)
  }
)

app.electedOfficial.controller = {
  show: {
    init: function(event){
      // event.preventDefault();
      var state = $('#state').val();
      var chamber = $('#chamber').val();
      app.electedOfficial.adapter.getBy(state, chamber, key).then(function(data) {
        app.electedOfficial.controller.render(data);
      })
    },
    render: function(){

    }
  }
}
