$(document).ready(function() {
  $('body').on('click', 'a.senateMember', function() {
    alert('HELLO WORLD');
  })
})

app.senateMember.controller = {
  show: {
    // init: funtion(event) {
    //   event.preventDefault();
    // }
  }
}
