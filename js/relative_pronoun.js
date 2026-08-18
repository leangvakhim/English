document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');
    const progressDots = document.querySelectorAll('#progress-dots div');
    const nextIcon = document.getElementById('next-icon');
    const contentArea = document.getElementById('content-area');

    let currentPage = 0;
    const totalPages = pages.length;

    function updateUI() {
        // Scroll to top of content area on page change
        contentArea.scrollTop = 0;

        // Hide all pages, show current
        pages.forEach((page, index) => {
            if (index === currentPage) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        // Update buttons
        btnBack.disabled = currentPage === 0;

        if (currentPage === totalPages - 1) {
            btnNext.innerHTML = 'Finish <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
            btnNext.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            btnNext.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
        } else {
            btnNext.innerHTML = 'Next &rarr;';
            btnNext.classList.add('bg-blue-600', 'hover:bg-blue-700');
            btnNext.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
        }

        // Update progress dots
        progressDots.forEach((dot, index) => {
            if (index === currentPage) {
                dot.classList.remove('bg-slate-300');
                dot.classList.add('bg-blue-600');
            } else {
                dot.classList.add('bg-slate-300');
                dot.classList.remove('bg-blue-600');
            }
        });
    }

    btnNext.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateUI();
        } else {
            // Reset to beginning if "Finish" is clicked
            currentPage.disabled = true;
            // currentPage = 0;
            // updateUI();
        }
    });

    btnBack.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateUI();
        }
    });

    // Initialize UI
    updateUI();
});