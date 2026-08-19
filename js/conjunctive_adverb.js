document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step-page');
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');
    const progressBar = document.getElementById('progress-bar');
    const stepIndicator = document.getElementById('step-indicator');
    const totalSteps = steps.length;
    let currentStep = 0;

    function updateUI() {
        // Hide all steps, show the current one
        steps.forEach((step, index) => {
            if (index === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Update Progress bar and indicator
        const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        stepIndicator.textContent = `Step ${currentStep + 1} of ${totalSteps}`;

        // Update Button States
        btnBack.disabled = currentStep === 0;

        if (currentStep === totalSteps - 1) {
            btnNext.textContent = 'Finish ✓';
            btnNext.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
            btnNext.classList.add('bg-green-500', 'hover:bg-green-600');
        } else {
            btnNext.innerHTML = 'Next &rarr;';
            btnNext.classList.remove('bg-green-500', 'hover:bg-green-600');
            btnNext.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
        }
    }

    btnNext.addEventListener('click', () => {
        if (currentStep < totalSteps - 1) {
            currentStep++;
            updateUI();
        } else {
            // Reset to beginning on finish (optional feature)
            currentStep.disabled = True;
            // currentStep = 0;
            // updateUI();
        }
    });

    btnBack.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateUI();
        }
    });

    // Initialize the UI on first load
    updateUI();
});