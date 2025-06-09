// gallery pop up functionality //
const galleryPopup = document.getElementById("gallery-popup");
const galleryPopupImg = document.getElementById("gallery-popup-img");
const galleryImages = document.querySelectorAll(".portfolio img");
const galleryClose = document.querySelector(".gallery-close");

// show gallery-popup when any image is clicked
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    galleryPopup.style.display = "flex";
    galleryPopupImg.src = img.src;
  });
});

// hide gallery-popup when close button is clicked
galleryClose.addEventListener("click", () => {
  galleryPopup.style.display = "none";
});

