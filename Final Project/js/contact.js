const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // You can perform form validation here if needed

  // Simulate form submission delay (replace this with actual form submission code)
  setTimeout(function () {
    // Show confirmation message and hide the form
    contactForm.style.display = 'none';
    confirmationMessage.style.display = 'block';
  }, 1000); // Delay for 1 second (adjust as needed)
});