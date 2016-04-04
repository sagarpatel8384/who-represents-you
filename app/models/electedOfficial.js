app.electedOfficial = {
  all:[],
  new: (function(){
    var counter = 0;
    var electedOfficial = function ElectedOfficial(firstName, lastName, party, twitterAccount, state, memberId, url){
        this.firstName = firstName;
        this.lastName = lastName;
        this.party = party;
        this.twitterAccount = twitterAccount;
        this.state = state;
        this.memberId = memberId;
        this.url = url;

        var self = this;
        function initialize(){
          counter++;
          self.id = counter;
          app.electedOfficial.all.push(self);
        }
    }
    return electedOfficial;
  }()),
  findBy: function(chamber, memberId){
    return _.find(app[chamber + "Member"].all, function(member){
      return member.electedOfficial.memberId === memberId;
    });
  }
}
