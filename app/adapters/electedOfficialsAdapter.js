app.electedOfficial.adapter = {
  getBy: function(state, chamber, key) {
    return $.ajax({
      method: 'GET',
      url: 'http://api.nytimes.com/svc/politics/v3/us/legislative/congress/113/' + chamber + '/members/current.json?api-key=' + key
    }).then(function(data) {
      var members = data.results[0].members;

      members.forEach(function(member) {
          var electedOfficial = new app.electedOfficial.new(member.first_name, member.last_name, member.party, member.twitter_account, member.gender, member.state, member.id, member.url);

          var official = new app[chamber + "Member"].new(member.seniority, member.next_election, member.total_votes, member.missed_votes, member.missed_votes_pct, member.votes_with_party_pct, electedOfficial);
      })
      // Returns an Array of Elected Officials who are in a particular state
      // Currently working for Senate Members but not House Members
      var results = _.filter(app[chamber + "Member"].all, function(official) {
        return official.electedOfficial.state === state;
      })
      return results;
    });
  }
}
