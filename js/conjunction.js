document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 0;
    const totalPages = 5; // page-0 to page-4

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');

    // Initialize progress dots
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = `w-3 h-3 rounded-full transition-colors ${i === 0 ? 'bg-indigo-600' : 'bg-slate-300'}`;
        dotsContainer.appendChild(dot);
    }

    function updateUI() {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show current page
        document.getElementById(`page-${currentPage}`).classList.add('active');

        // Update buttons
        prevBtn.disabled = currentPage === 0;

        if (currentPage === totalPages - 1) {
            nextBtn.innerHTML = 'Finish';
            nextBtn.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
            nextBtn.classList.add('bg-green-600', 'hover:bg-green-700');
        } else {
            nextBtn.innerHTML = 'Next &rarr;';
            nextBtn.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
            nextBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
        }

        // Update dots
        const dots = dotsContainer.children;
        for (let i = 0; i < dots.length; i++) {
            if (i === currentPage) {
                dots[i].classList.replace('bg-slate-300', 'bg-indigo-600');
            } else {
                dots[i].classList.replace('bg-indigo-600', 'bg-slate-300');
            }
        }

        // Scroll to top of content area on mobile
        if (window.innerWidth < 640) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateUI();
        } else if (currentPage === totalPages - 1) {
            // Loop back to start on finish
            currentPage.disabled = true;
            // currentPage = 0;
            // updateUI();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateUI();
        }
    });
});