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
        var memberImg = "<img class='member-profile-picture' src = 'https://www.govtrack.us/data/photos/" + data.govtrack_id + ".jpeg'>"
        var memberHTML = `
        <div>
          <p><span class="member-label-name">` + data.first_name + " " + data.last_name + `</span></p>
          <hr>
          <p class="member-info-item"><span class="member-label">State: </span>` + member.electedOfficial.state + `</p>
          <p class="member-info-item"><span class="member-label">Political Party: </span>` + data.current_party + `</p>
          <p class="member-info-item"><span class="member-label">Date of Birth: </span>` + data.date_of_birth + `</p>
          <p class="member-info-item"><span class="member-label">Homepage: </span><a href="` + data.url + `" target=_blank>` + data.url + `</a></p>
          <p class="member-info-item"><span class="member-label">Gender: </span>` + data.gender + `</p>
        </div>`

        var memberInfo = `
        <div>
          <p class="member-info-item"><span class="member-label">State District: </span>` + member.district + `</p>
          <p class="member-info-item"><span class="member-label">Seniority: </span>` + member.houseSeniority + `</p>
          <p class="member-info-item"><span class="member-label">Total Votes in Congress: </span>` + member.totalVotes + `</p>
          <p class="member-info-item"><span class="member-label">Missed Votes: </span>` + member.missedVotes + `</p>
          <p class="member-info-item"><span class="member-label">% of Votes Missed in Congress: </span>` + member.missedVotePct + `</p>
          <p class="member-info-item"><span class="member-label">% of Votes With Political Party: </span>` + member.votesWithPartyPct + `</p>
        </div>`

        $('.member-information').append(memberImg)
        $('.member-information').append(memberHTML)
        $('.member-information').append(memberInfo)
      })
    }


  }
}
