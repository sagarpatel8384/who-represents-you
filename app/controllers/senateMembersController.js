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

        var memberImg = "<img class='member-profile-picture' src = 'https://www.govtrack.us/data/photos/" + data.govtrack_id + ".jpeg'>"
        var memberHTML = `
        <div>
          <p><span class="member-label-name">` + data.first_name + " " + data.last_name + `</p>
          <hr>
          <p class="member-info-item"><span class="member-label">State: </span>` + member.electedOfficial.state + `</p>
          <p class="member-info-item"><span class="member-label">Political Party: </span>` + data.current_party + `</p>
          <p class="member-info-item"><span class="member-label">Date of Birth: </span>` + data.date_of_birth + `</p>
          <p class="member-info-item"><span class="member-label">Homepage: </span><a href="` + data.url + `" target=_blank>` + data.url + `</a></p>
          <p class="member-info-item"><span class="member-label">Gender: </span>` + data.gender + `</p>
        </div>`

        var memberInfo = `
        <div>
          <p class="member-info-item"><span class="member-label">Seniority: </span>` + member.senateSeniority + `</p>
          <p class="member-info-item"><span class="member-label">Total Votes in Senate: </span>` + member.totalVotes + `</p>
          <p class="member-info-item"><span class="member-label">Missed Votes: </span>` + member.missedVotes + `</p>
          <p class="member-info-item"><span class="member-label">% of Votes Missed in Senate: </span>` + member.missedVotePct + `</p>
          <p class="member-info-item"><span class="member-label">% of Votes With Political Party: </span>` + member.votesWithPartyPct + `</p>
        </div>`

        $('.modal-window').append(memberImg)
        $('.modal-window').append(memberHTML)
        $('.modal-window').append(memberInfo)
      })
    }
  }
}
