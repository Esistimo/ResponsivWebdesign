let currentSlide = 0;

const imageTexts = [
    ["One Piece Text 1", "One Piece Text2", "One Piece Text3", "Text4", "Text5"], // One Piece
    ["HunterxHunter Text 1", "HunterxHunter Text2", "HunterxHunter Text3", "THunterxHunter ext4", "THunterxHunter ext5"], // HunterxHunter
  ];
    

function showSlides() {
  const slides = document.querySelectorAll(".carousel .slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("center", "hidden-left", "hidden-right", "active");
    if (index === currentSlide) {
      slide.classList.add("center", "active");
    } else if (index === (currentSlide + 1) % slides.length) {
      slide.classList.add("hidden-right", "active");
    } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
      slide.classList.add("hidden-left", "active");
    }
  });
}

function nextSlide() {
  currentSlide =
    (currentSlide + 1) % document.querySelectorAll(".carousel .slide").length;
  showSlides();
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + document.querySelectorAll(".carousel .slide").length) %
    document.querySelectorAll(".carousel .slide").length;
  showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
  document.querySelector(".carousel-container").classList.remove("move-up");
  document.body.style.overflow = "hidden";

  document.getElementById("slide1").addEventListener("click", revealContent);

  const categories = document.querySelectorAll(".container");
  categories.forEach((category) => addEventListenerToImages(category));
});

function addEventListenerToImages(_category) {
  // Zugriff auf alle img-Elemente innerhalb des div-Elements mit der ID 'image-container'
  const images = _category.querySelectorAll("img");

  // Hinzufügen des Eventlisteners zu jedem img-Element
  images.forEach((image) => {
    image.addEventListener("click", handleImageClick);
  });
}

// Funktion, die aufgerufen wird, wenn auf ein Bild geklickt wird
function handleImageClick(event) {
  const categoryNode = event.target.parentNode.parentNode.parentNode;
  const eventTarget = event.target;
  const paragraph = categoryNode.querySelector('.cartridge-text p');
  console.log(categoryNode);

  if (event.target.tagName === 'IMG') {
    // Alle img-Elemente im Container holen
    const categories = Array.from(document.querySelectorAll(".container"));
    const images = Array.from(categoryNode.querySelectorAll('img'));
    // Den Index des geklickten Bildes finden
    const categoryIndex = categories.indexOf(categoryNode);
    const imageIndex = images.indexOf(event.target);
    // Index ausgeben (beachte, dass die Zählung bei 0 beginnt)
    console.log('Geklicktes Bild ist Nummer:', imageIndex + 1);
    paragraph.innerText = imageTexts[categoryIndex][imageIndex];
}
//   console.log("Bild wurde geklickt:", event.target.src);
}

function revealContent() {
  document.querySelector(".carousel-container").classList.add("move-up");
  document.body.style.overflow = "auto";
}
