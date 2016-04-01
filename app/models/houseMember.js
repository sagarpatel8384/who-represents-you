app.houseMember = {
  all:[],
  new: (function(){
    var counter = 0;
    var houseMember = function HouseMember(district, houseSeniority, nextElection, totalVotes, missedVotes, missedVotePct,votesWithPartyPct, electedOfficial){
        this.district = district;
        this.houseSeniority = houseSeniority;
        this.nextElection = nextElection;
        this.totalVotes = totalVotes;
        this.missedVotes = missedVotes;
        this.missedVotePct = missedVotePct;
        this.votesWithPartyPct = votesWithPartyPct;
        this.electedOfficial = electedOfficial;

        var self = this;
        function initialize(){
          counter++;
          self.id = counter;
          app.houseMember.all.push(self);
        }
    }

    return houseMember;

  }())
}
