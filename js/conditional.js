document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dots-container');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Initialize dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        // Use data attribute to identify dots easily if needed later, but classes are enough for styling
        dot.className = `dot w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-slate-300'} transition-colors duration-300`;
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot'); // Select by class to ensure we get only dots

    function updateUI() {
        // Update slides visibility
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
                // Ensure it's displayed when active
                slide.style.display = 'block';
            } else {
                slide.classList.remove('active');
                // Ensure it's hidden when not active
                slide.style.display = 'none';
            }
        });

        // Update buttons state
        prevBtn.disabled = currentSlide === 0;

        if (currentSlide === totalSlides - 1) {
            nextBtn.innerHTML = "Finish &#10003;";
            nextBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            nextBtn.classList.add('bg-green-600', 'hover:bg-green-700');
        } else {
            nextBtn.innerHTML = "Next &rarr;";
            nextBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
            nextBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
        }

        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.remove('bg-slate-300');
                dot.classList.add('bg-blue-600');
            } else {
                dot.classList.remove('bg-blue-600');
                dot.classList.add('bg-slate-300');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateUI();
        } else {
            // Action when clicking Finish (e.g., reset or show a message)
            currentSlide.disabled = true;
            // currentSlide = 0; // Loop back to start for this demo
            // updateUI();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateUI();
        }
    });

    // Initial UI setup
    updateUI();
});