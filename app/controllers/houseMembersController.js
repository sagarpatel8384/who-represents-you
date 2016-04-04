$(document).ready(function() {
  $('table').on('click', '.elected-official-row.house', function() {
    expandModalWindow();
    var memberId = this.id;
    app.houseMember.controller.show.init(memberId);



  })
})

app.houseMember.controller = {
  show: {
    init: function(memberId) {
      app.houseMember.adapter.getBy(memberId);


    }


  }
}
