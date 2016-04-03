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
    var chamberInput = $('#chamber-dropdown').val();
    $('.container-dropdown').fadeOut('fast')
    $('.modal-window').fadeIn('fast');

    _.each(data, function(member) {
      var logoURL = member.electedOfficial.party === "R" ? "assets/img/republican-logo.png" : "assets/img/democrat-logo.png"

      $('.table-hover').append(
        `<tr>
          <td><a href="#" class="` + chamberInput + `Member">` + member.electedOfficial.firstName + `</a></td>
          <td><a href="#" class="` + chamberInput + `Member">` + member.electedOfficial.lastName + `</a></td>
          <td><img class="political-logo" src="` + logoURL + `"></td>
        </tr>`
      );
    });
  }
}
