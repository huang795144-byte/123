// Navbar popover
$(document).ready(function(){
    $('[data-toggle="notification-popover"]').popover();
  });

 // Post otions modal
 
 $('#post-modal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})



