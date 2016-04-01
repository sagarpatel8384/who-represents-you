$('#house-or-senate').hide();

$(
  $('#select-state').on("change", function(){
    $('#house-or-senate').show();
  })
)