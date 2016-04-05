app.senateMember = {
  all:[],
  new: (function() {
    var counter = 0;
    var senateMember = function SenateMember( senateSeniority, nextElection, totalVotes, missedVotes, missedVotePct,votesWithPartyPct, electedOfficial) {
        this.senateSeniority = senateSeniority;
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
          app.senateMember.all.push(self);
        }
      initialize();
    }
    return senateMember;
  }());
}
