document.addEventListener('DOMContentLoaded', function() {
  var contactLink = document.querySelector('#contactLink');
  contactLink.addEventListener('click', function() {
      var contactFormModal = new bootstrap.Modal(document.getElementById('contactFormModal'));
      contactFormModal.show();
  });
});



// Toasts
const myToast = new bootstrap.Toast('.toast');

setTimeout(() => {
  myToast.show();
}, 2000);




