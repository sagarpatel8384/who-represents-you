app.houseMember = {
  all:[],
  new: (function() {
    var counter = 0;
    var houseMember = function HouseMember(houseSeniority, nextElection, totalVotes, missedVotes, missedVotePct, votesWithPartyPct, electedOfficial, district) {
      this.district = district;
      this.houseSeniority = houseSeniority;
      this.nextElection = nextElection;
      this.totalVotes = totalVotes;
      this.missedVotes = missedVotes;
      this.missedVotePct = missedVotePct;
      this.votesWithPartyPct = votesWithPartyPct;
      this.electedOfficial = electedOfficial;
      var self = this;

      function initialize() {
        counter++;
        self.id = counter;
        app.houseMember.all.push(self);
      }
      initialize();
    }
    return houseMember;
  }())
}
