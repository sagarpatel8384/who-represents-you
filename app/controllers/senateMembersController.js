$(document).ready(function() {
  $('table').on('click', '.elected-official-row.senate', function() {
    expandModalWindow();
    var memberId = this.id;
    app.senateMember.controller.show.init(memberId);
  })
})

app.senateMember.controller = {
  show: {
    init: function(memberId) {
      var member = app.electedOfficial.findBy("senate", memberId);
      app.electedOfficial.adapter.getByMemberId(memberId).then(function(data){
        // debugger;
        var memberImg = "<img src = 'https://www.govtrack.us/data/photos/" + data.govtrack_id + "-200px.jpeg'>"
        var memberHTML = "<div><p>" + data.first_name + " " + data.last_name + "</p><p>" + member.electedOfficial.state + "</p><p>" + data.current_party + "</p><p>" + data.date_of_birth + "</p><p>" + data.url + "</p><p>" + data.gender + "</p></div>"
        var memberInfo = "<div><p>" + member.senateSeniority + "</p><p>" + member.nextElection + "</p><p>" + member.totalVotes + "</p><p>" + member.missedVotes + "</p><p>" + member.missedVotePct + "</p><p>" + member.votesWithPartyPct + "</p></div>"
        debugger;
        $('.modal-window').append(memberImg)
        $('.modal-window').append(memberHTML)
        $('.modal-window').append(memberInfo)
      })
      // debugger;
    }
  }
}
