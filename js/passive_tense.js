// Data structure containing information for all 8 passive tenses
const tensesData = [
    {
        name: "Present Simple Passive",
        meaning: "Used for facts, habits, regular routines, or general truths. We use it when the receiver of the action is the focus, or we don't know who does the action.",
        structure: "Object + am / is / are + Past Participle (V3)",
        active: "The company <b>manufactures</b> thousands of phones every day.",
        passive: "Thousands of phones <b>are manufactured</b> every day.",
        // Visual: Repeated points around present, or a general span across present. Let's use a wide block indicating general truth.
        graphHtml: `
            <div class="action-duration" style="left: 10%; width: 80%; background-color: rgba(59, 130, 246, 0.1); border-style: dashed;"></div>
            <div class="action-point" style="left: 35%; width: 12px; height: 12px;"></div>
            <div class="action-point" style="left: 50%; width: 12px; height: 12px;"></div>
            <div class="action-point" style="left: 65%; width: 12px; height: 12px;"></div>
        `
    },
    {
        name: "Present Continuous Passive",
        meaning: "Used for an action that is currently in progress at this very moment, focusing on the object receiving the action.",
        structure: "Object + am / is / are + being + Past Participle (V3)",
        active: "The mechanic <b>is repairing</b> my car right now.",
        passive: "My car <b>is being repaired</b> right now.",
        // Visual: A wavy line directly on the Present marker.
        graphHtml: `
            <div class="action-wave" style="left: 40%; width: 20%;"></div>
        `
    },
    {
        name: "Past Simple Passive",
        meaning: "Used for a completed action that happened at a specific time in the past. The focus is on what was done, not who did it.",
        structure: "Object + was / were + Past Participle (V3)",
        active: "Leonardo da Vinci <b>painted</b> the Mona Lisa in 1503.",
        passive: "The Mona Lisa <b>was painted</b> in 1503.",
        // Visual: A single solid point situated in the past area.
        graphHtml: `
            <div class="action-point" style="left: 20%;"></div>
        `
    },
    {
        name: "Past Continuous Passive",
        meaning: "Used for an action that was in progress at a specific time in the past. Often interrupted by another action.",
        structure: "Object + was / were + being + Past Participle (V3)",
        active: "They <b>were cleaning</b> the room when I arrived.",
        passive: "The room <b>was being cleaned</b> when I arrived.",
        // Visual: A wavy line in the past area.
        graphHtml: `
            <div class="action-wave" style="left: 10%; width: 20%;"></div>
            <div class="action-point" style="left: 25%; background-color: #ef4444; border-color: #fca5a5; width: 14px; height: 14px; top: 30%;" title="Interrupting action"></div>
        `
    },
    {
        name: "Present Perfect Passive",
        meaning: "Used for an action completed in the past that has a result or connection to the present. The exact time it happened is not specified or important.",
        structure: "Object + have / has + been + Past Participle (V3)",
        active: "Someone <b>has stolen</b> my bicycle!",
        passive: "My bicycle <b>has been stolen</b>!",
        // Visual: An arrow or duration stretching from an unspecified past point up to the present.
        graphHtml: `
            <div class="action-duration" style="left: 25%; width: 25%;"></div>
            <div class="action-point" style="left: 25%; width: 12px; height: 12px;"></div>
            <div style="position: absolute; top: 50%; left: 49%; transform: translate(-100%, -50%); border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 8px solid #3b82f6; z-index: 6;"></div>
        `
    },
    {
        name: "Past Perfect Passive",
        meaning: "Used when talking about two actions in the past, to emphasize that one passive action was completed BEFORE the other past action.",
        structure: "Object + had + been + Past Participle (V3)",
        active: "They <b>had prepared</b> the dinner before the guests arrived.",
        passive: "The dinner <b>had been prepared</b> before the guests arrived.",
        // Visual: Two points in the past. First one is the action.
        graphHtml: `
            <div class="action-point" style="left: 15%;" title="Action 1: Dinner prepared"></div>
            <div class="action-point" style="left: 30%; background-color: #ef4444; border-color: #fca5a5; width: 14px; height: 14px;" title="Action 2: Guests arrived"></div>
            <div class="text-xs absolute font-bold text-blue-600" style="left: 15%; top: 70%; transform: translateX(-50%);">1st</div>
            <div class="text-xs absolute font-bold text-red-500" style="left: 30%; top: 70%; transform: translateX(-50%);">2nd</div>
        `
    },
    {
        name: "Future Simple Passive",
        meaning: "Used to talk about a single action that will be completed in the future, where the receiver is the focus.",
        structure: "Object + will + be + Past Participle (V3)",
        active: "The robots <b>will deliver</b> the package tomorrow.",
        passive: "The package <b>will be delivered</b> tomorrow.",
        // Visual: A single point in the future area.
        graphHtml: `
            <div class="action-point" style="left: 80%;"></div>
        `
    },
    {
        name: "Future Perfect Passive",
        meaning: "Used to describe an action that will be completed BEFORE a specific time or another action in the future.",
        structure: "Object + will + have + been + Past Participle (V3)",
        active: "The builders <b>will have finished</b> the house by next month.",
        passive: "The house <b>will have been finished</b> by next month.",
        // Visual: Duration starting from somewhere, ending exactly at a specific point in the future.
        graphHtml: `
            <div class="action-duration" style="left: 55%; width: 30%;"></div>
            <div class="action-point" style="left: 85%; background-color: #ef4444; border-color: #fca5a5; width: 14px; height: 14px;" title="Deadline: Next month"></div>
            <div style="position: absolute; top: 50%; left: 84%; transform: translate(-100%, -50%); border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 8px solid #3b82f6; z-index: 6;"></div>
        `
    }
];

let currentIndex = 0;

// DOM Elements
const titleEl = document.getElementById('tense-title');
const counterEl = document.getElementById('step-counter');
const meaningEl = document.getElementById('tense-meaning');
const structureEl = document.getElementById('tense-structure');
const activeEl = document.getElementById('active-example');
const passiveEl = document.getElementById('passive-example');
const graphAreaEl = document.getElementById('graph-elements');
const contentArea = document.getElementById('content-area');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const dotsContainer = document.getElementById('pagination-dots');

function initDots() {
    tensesData.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `w-2 h-2 rounded-full transition-colors duration-300 ${idx === 0 ? 'bg-blue-600' : 'bg-slate-300'}`;
        dot.id = `dot-${idx}`;
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    tensesData.forEach((_, idx) => {
        const dot = document.getElementById(`dot-${idx}`);
        if (idx === currentIndex) {
            dot.classList.remove('bg-slate-300');
            dot.classList.add('bg-blue-600', 'w-4'); // Make active dot wider
        } else {
            dot.classList.remove('bg-blue-600', 'w-4');
            dot.classList.add('bg-slate-300');
        }
    });
}

function renderTense(index) {
    const data = tensesData[index];

    // Animate content change
    contentArea.classList.remove('fade-enter-active');
    contentArea.classList.add('fade-enter');

    setTimeout(() => {
        // Update Text Content
        titleEl.textContent = data.name;
        counterEl.textContent = `Tense ${index + 1} of ${tensesData.length}`;
        meaningEl.innerHTML = data.meaning;
        structureEl.innerHTML = data.structure;
        activeEl.innerHTML = `"${data.active}"`;
        passiveEl.innerHTML = `"${data.passive}"`;

        // Update Graph
        graphAreaEl.innerHTML = data.graphHtml;

        // Trigger reflow for animation
        void contentArea.offsetWidth;
        contentArea.classList.add('fade-enter-active');
        contentArea.classList.remove('fade-enter');

        updateButtons();
        updateDots();
    }, 150); // slight delay to allow fade out
}

function updateButtons() {
    btnPrev.disabled = currentIndex === 0;

    if (currentIndex === tensesData.length - 1) {
        btnNext.innerHTML = "Finish &#10003;";
        btnNext.classList.replace('bg-blue-600', 'bg-green-600');
        btnNext.classList.replace('hover:bg-blue-700', 'hover:bg-green-700');
    } else {
        btnNext.innerHTML = "Next &rarr;";
        btnNext.classList.replace('bg-green-600', 'bg-blue-600');
        btnNext.classList.replace('hover:bg-green-700', 'hover:bg-blue-700');
    }
}

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderTense(currentIndex);
    }
});

btnNext.addEventListener('click', () => {
    if (currentIndex < tensesData.length - 1) {
        currentIndex++;
        renderTense(currentIndex);
    } else {
        // End of tutorial logic (optional reset)
        currentIndex.disabled = true;
        // currentIndex = 0;
        // renderTense(currentIndex);
    }
});

// Initialize App
window.onload = () => {
    initDots();
    renderTense(currentIndex);

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && !btnNext.disabled) btnNext.click();
        if (e.key === 'ArrowLeft' && !btnPrev.disabled) btnPrev.click();
    });
};