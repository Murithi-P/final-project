let currentIndex = 0;
const track = document.getElementById('testimonialTrack');
const slider = document.querySelector('.testimonial-slider');
const cards = document.querySelectorAll('.testimonial-card');

function updateSlider() {
    const cardWidth = slider.offsetWidth;
    const offset = cardWidth * currentIndex;
    track.style.transform = `translateX(-${offset}px)`;
    track.style.transition = 'transform 0.5s ease-in-out';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider();
}

window.addEventListener('resize', updateSlider);
updateSlider(); 

nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  window.addEventListener('resize', updateSlider);
  updateSlider();
