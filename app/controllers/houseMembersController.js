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
      var member = app.electedOfficial.findBy("house", memberId);
      app.electedOfficial.adapter.getByMemberId(memberId).then(function(data){
        // debugger;
        var memberHTML = "<div><p>" + data.first_name + " " + data.last_name + "</p><p>" + member.electedOfficial.state + "</p><p>" + data.current_party + "</p><p>" + data.date_of_birth + "</p><p>" + data.url + "</p><p>" + data.gender + "</p></div>"
        var memberInfo = "<div><p>" + member.district + "</p><p>" + member.houseSeniority + "</p><p>" + member.nextElection + "</p><p>" + member.totalVotes + "</p><p>" + member.missedVotes + "</p><p>" + member.missedVotePct + "</p><p>" + member.votesWithPartyPct + "</p></div>"
        debugger;
        $('.modal-window').append(memberHTML)
        $('.modal-window').append(memberInfo)
      })
      // debugger;
    }


  }
}
