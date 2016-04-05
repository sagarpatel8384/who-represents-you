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
      app.electedOfficial.adapter.getByMemberId(memberId).then(function(data) {
        var memberImg = "<img class='member-profile-picture' src = 'https://www.govtrack.us/data/photos/" + data.govtrack_id + ".jpeg'>"
        var memberHTML = `
        <p><span class="member-label-name">` + data.first_name + " " + data.last_name + `</p>
        <table class="table member-table">
          <tbody>
            <tr>
              <th scope="row">State</td>
              <td>` + member.electedOfficial.state + `</td>
            </tr>

            <tr>
              <th scope="row">Political Party</td>
              <td>` + data.current_party + `</td>
            </tr>

            <tr>
              <th scope="row">Date of Birth</td>
              <td>` + data.date_of_birth + `</td>
            </tr>

            <tr>
              <th scope="row">Homepage</td>
              <td><a href="` + data.url + `" target="_blank">` + data.url + `</a></td>
            </tr>

            <tr>
              <th scope="row">Gender</td>
              <td>` + data.gender + `</td>
            </tr>

            <tr>
              <th scope="row">District</td>
              <td>` + member.district + `</td>
            </tr>

            <tr>
              <th scope="row">Seniority</td>
              <td>` + member.senateSeniority + `</td>
            </tr>

            <tr>
              <th scope="row">Total Votes</td>
              <td>` + member.totalVotes + `</td>
            </tr>

            <tr>
              <th scope="row">Missed Votes:</td>
              <td>` + member.missedVotes + `</td>
            </tr>

            <tr>
              <th scope="row">% of Votes Missed in Senate</td>
              <td>` + member.missedVotePct + `</td>
            </tr>

            <tr>
              <th scope="row">% of Votes With Political Party</td>
              <td>` + member.votesWithPartyPct + `</td>
            </tr>
          <tbody>
        </table>`

        $('.modal-window').append(memberImg);
        $('.modal-window').append(memberHTML);
      });
    }
  }
}
