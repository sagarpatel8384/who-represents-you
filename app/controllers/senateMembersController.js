$(document).ready(function() {
  $('body').on('click', 'a.senateMember', function() {
    alert('HELLO senate member');
  })
})

app.senateMember.controller = {
  show: {
    // init: funtion(event) {
    //   event.preventDefault();
    // }
  }
}
