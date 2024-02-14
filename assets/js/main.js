const images = Array.from(document.querySelectorAll(".box-wrapper img"));
const picModal = document.querySelector(".pics-modal");
const picModalImg = document.querySelector(".pics-modal img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const closeBtn = document.getElementById("close");
let currentImg;
let currentIndex;

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", (e) => {
    picModalImg.src = e.target.src;
    picModal.classList.remove("d-none");
    currentIndex = images.indexOf(e.target);
  });
}

closeBtn.addEventListener("click", () => {
  picModal.classList.add("d-none");
});

nextBtn.addEventListener("click", () => {
  nextSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
});

function nextSlide() {
  currentIndex++;
  if (currentIndex == images.length) {
    currentIndex = 0;
  }
  picModalImg.src = images[currentIndex].src;
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  picModalImg.src = images[currentIndex].src;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    picModal.classList.add("d-none");
  }
  if (e.key === "ArrowRight") {
    nextSlide();
  }
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
});
