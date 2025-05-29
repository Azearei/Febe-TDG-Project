// Get elements
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

// Open modal on button click
contactBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  contactModal.style.display = 'block';
});

// Close modal on close button click
closeModal.addEventListener('click', function() {
  contactModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === contactModal) {
    contactModal.style.display = 'none';
  }
});