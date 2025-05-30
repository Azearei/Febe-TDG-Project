// elements for contact pop up
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

// open modal on button click
contactBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  contactModal.style.display = 'block';
});

// close modal on close button click
closeModal.addEventListener('click', function() {
  contactModal.style.display = 'none';
});

// close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === contactModal) {
    contactModal.style.display = 'none';
  }
});

// draggable pop up
makeDraggable(document.getElementById("draggableBox"));

function makeDraggable(modalBox) {
  const header = modalBox.querySelector(".modal-header");
  let offsetX = 0, offsetY = 0, isDragging = false;

  header.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - modalBox.offsetLeft;
    offsetY = e.clientY - modalBox.offsetTop;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  function onMouseMove(e) {
    if (!isDragging) return;
    modalBox.style.left = `${e.clientX - offsetX}px`;
    modalBox.style.top = `${e.clientY - offsetY}px`;
    modalBox.style.transform = "none"; // disables centering while dragging
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
}