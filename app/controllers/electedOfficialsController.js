var key = $.getScript("./environment.js", function(){
  return key;
});



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

    // Populates modal with politician information
    _.each(data, function(member) {
      var logoURL = member.electedOfficial.party === "R" ? "assets/img/republican-logo.png" : "assets/img/democrat-logo.png"

      $('.table-hover').append(
        `<tr id="` + member.electedOfficial.memberId + `" class="elected-official-row ` + chamberInput + `">
          <td>` + member.electedOfficial.firstName  + `</td>
          <td>` + member.electedOfficial.lastName + `</td>
          <td><img class="political-logo" src="` + logoURL + `"></td>
        </tr>`
      );
    });

    // Click away from modal window brings you back to the main screen
    $('.container-full-bg').on('click', function() {
      window.location = 'index.html';
    })
  }
}
