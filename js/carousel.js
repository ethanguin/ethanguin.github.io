let images = [];
let currentIndex = 0;
let focusedIndex = 0;
const totalItems = 8;

// Generate placeholder images
function generateImages() {
    const carousel = document.getElementById('carousel');
    
    for (let i = 0; i < totalItems; i++) {
        const img = document.createElement('div');
        img.className = 'carousel-item';
        img.dataset.index = i;
        img.addEventListener('click', () => openModal(i));
        carousel.appendChild(img);
        images.push(img);
    }
    
    updateCarousel();
}

// Carousel navigation
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carousel = document.getElementById('carousel');

function updateCarousel() {
    const itemWidth = 220; // width + gap
    const offset = -focusedIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    
    // Update active state
    images.forEach((img, index) => {
        img.classList.toggle('active', index === focusedIndex);
    });
    
    updateCarouselButtons();
}

function updateCarouselButtons() {
    carouselPrev.disabled = focusedIndex === 0;
    carouselNext.disabled = focusedIndex >= totalItems - 1;
}

function moveCarouselPrev() {
    if (focusedIndex > 0) {
        focusedIndex--;
        updateCarousel();
    }
}

function moveCarouselNext() {
    if (focusedIndex < totalItems - 1) {
        focusedIndex++;
        updateCarousel();
    }
}

carouselPrev.addEventListener('click', moveCarouselPrev);
carouselNext.addEventListener('click', moveCarouselNext);

// Modal functionality
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const expandedImage = document.getElementById('expandedImage');
const imageCounter = document.getElementById('imageCounter');

function openModal(index) {
    currentIndex = index;
    modal.classList.add('active');
    updateExpandedImage();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateExpandedImage() {
    imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
}

function showPrevious() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateExpandedImage();
}

function showNext() {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateExpandedImage();
}

// Event listeners
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showPrevious();
    if (e.key === 'ArrowRight') showNext();
});

// Initialize
generateImages();