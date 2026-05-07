// --- 1. Data Definitions ---

// Helper to generate consistent base timeline SVG with specific overlays
const createTimelineSVG = (overlayPaths) => `
    <svg viewBox="0 0 800 300" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <!-- Base Timeline -->
        <line x1="50" y1="150" x2="750" y2="150" stroke="#CBD5E1" stroke-width="4" />
        <polygon points="750,140 770,150 750,160" fill="#CBD5E1" />

        <!-- Markers -->
        <line x1="200" y1="140" x2="200" y2="160" stroke="#94A3B8" stroke-width="2" />
        <text x="200" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748B" text-anchor="middle">PAST</text>

        <line x1="400" y1="130" x2="400" y2="170" stroke="#64748B" stroke-width="4" stroke-dasharray="4" />
        <text x="400" y="190" font-family="sans-serif" font-size="16" font-weight="900" fill="#334155" text-anchor="middle">NOW</text>

        <line x1="600" y1="140" x2="600" y2="160" stroke="#94A3B8" stroke-width="2" />
        <text x="600" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748B" text-anchor="middle">FUTURE</text>

        <!-- Dynamic Overlay -->
        ${overlayPaths}
    </svg>
`;

const tensesData = [
    // PRESENT TENSES
    {
        group: "Present",
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        badgeClass: "bg-emerald-100 text-emerald-800",
        name: "Present Simple",
        subtitle: "The Snapshot / Routine",
        formula: "Subject + Verb(s/es)",
        example: "I study grammar every day.",
        meaning: "Used for stating facts, general truths, habits, and permanent situations. It focuses on things that are generally true, not just right now.",
        keywords: "always, usually, often, sometimes, rarely, never, every day, on Mondays",
        svg: createTimelineSVG(`
            <circle cx="200" cy="150" r="8" fill="#10B981" />
            <circle cx="300" cy="150" r="8" fill="#10B981" />
            <circle cx="400" cy="150" r="10" fill="#10B981" />
            <circle cx="500" cy="150" r="8" fill="#10B981" />
            <circle cx="600" cy="150" r="8" fill="#10B981" />
            <path d="M 200 135 Q 250 100 300 135" fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="4"/>
            <path d="M 300 135 Q 350 100 400 135" fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="4"/>
            <path d="M 400 135 Q 450 100 500 135" fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="4"/>
            <path d="M 500 135 Q 550 100 600 135" fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="4"/>
            <text x="400" y="80" font-family="sans-serif" font-size="16" font-weight="bold" fill="#10B981" text-anchor="middle">Repeated Actions / Facts</text>
        `)
    },
    {
        group: "Present",
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        badgeClass: "bg-emerald-100 text-emerald-800",
        name: "Present Continuous",
        subtitle: "The Video Recording",
        formula: "Subject + am/is/are + Verb-ing",
        example: "I am studying grammar right now.",
        meaning: "Used for an action that is in progress at this exact moment, or around the current time. It emphasizes a temporary state.",
        keywords: "now, right now, at the moment, currently, Look!, Listen!",
        svg: createTimelineSVG(`
            <circle cx="400" cy="150" r="25" fill="#A7F3D0" opacity="0.6">
                <animate attributeName="r" values="15;35;15" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="150" r="12" fill="#10B981" />
            <path d="M 350 150 Q 400 100 450 150" fill="none" stroke="#10B981" stroke-width="4" />
            <text x="400" y="80" font-family="sans-serif" font-size="16" font-weight="bold" fill="#10B981" text-anchor="middle">Happening NOW</text>
        `)
    },
    {
        group: "Present",
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        badgeClass: "bg-emerald-100 text-emerald-800",
        name: "Present Perfect",
        subtitle: "The Bridge to Now",
        formula: "Subject + have/has + V3 (Past Participle)",
        example: "I have already studied that topic.",
        meaning: "Used to connect the past to the present. The action happened at an unstated time in the past, but the *result* or experience is important right now.",
        keywords: "already, yet, just, ever, never, recently, lately, so far",
        svg: createTimelineSVG(`
            <circle cx="250" cy="150" r="8" fill="#10B981" />
            <path d="M 250 150 Q 325 50 395 145" fill="none" stroke="#10B981" stroke-width="4" />
            <polygon points="390,135 400,150 380,150" fill="#10B981" transform="rotate(-30 395 145)"/>
            <circle cx="400" cy="150" r="10" fill="#059669" />
            <text x="325" y="60" font-family="sans-serif" font-size="16" font-weight="bold" fill="#10B981" text-anchor="middle">Past action, Present result</text>
        `)
    },
    {
        group: "Present",
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        badgeClass: "bg-emerald-100 text-emerald-800",
        name: "Present Perfect Continuous",
        subtitle: "The 'Up to Now' Marathon",
        formula: "Subject + have/has + been + Verb-ing",
        example: "I have been studying for three hours.",
        meaning: "An action started in the past and has been continuing right up to the present moment. Focuses heavily on the *duration* or visible side-effects.",
        keywords: "for, since, all morning, all day, recently, lately",
        svg: createTimelineSVG(`
            <path d="M 150 150 Q 170 120 190 150 T 230 150 T 270 150 T 310 150 T 350 150 T 390 150" fill="none" stroke="#10B981" stroke-width="6" stroke-linecap="round"/>
            <polygon points="380,140 400,150 380,160" fill="#10B981" />
            <circle cx="400" cy="150" r="8" fill="#059669" />
            <text x="270" y="100" font-family="sans-serif" font-size="16" font-weight="bold" fill="#10B981" text-anchor="middle">Ongoing duration up to NOW</text>
        `)
    },

    // PAST TENSES
    {
        group: "Past",
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        badgeClass: "bg-blue-100 text-blue-800",
        name: "Past Simple",
        subtitle: "The Dead Anchor",
        formula: "Subject + Verb(ed) / V2",
        example: "I studied grammar yesterday.",
        meaning: "A finished action that happened at a specific, stated time in the past. It has no connection to the present.",
        keywords: "yesterday, last (week/month), ago, in 2020",
        svg: createTimelineSVG(`
            <g transform="translate(200, 150)">
                <line x1="-15" y1="-15" x2="15" y2="15" stroke="#2563EB" stroke-width="6" stroke-linecap="round"/>
                <line x1="15" y1="-15" x2="-15" y2="15" stroke="#2563EB" stroke-width="6" stroke-linecap="round"/>
            </g>
            <text x="200" y="100" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563EB" text-anchor="middle">Specific Time (Finished)</text>
        `)
    },
    {
        group: "Past",
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        badgeClass: "bg-blue-100 text-blue-800",
        name: "Past Continuous",
        subtitle: "The Background Video",
        formula: "Subject + was/were + Verb-ing",
        example: "I was studying when the phone rang.",
        meaning: "An action was in progress at a specific moment in the past. Often used to set the scene or show what was happening when a shorter action interrupted it.",
        keywords: "while, when, as, at 8 PM last night",
        svg: createTimelineSVG(`
            <!-- Ongoing Action -->
            <path d="M 100 150 Q 150 120 200 150 T 300 150" fill="none" stroke="#93C5FD" stroke-width="12" stroke-linecap="round"/>
            <!-- Interruption -->
            <g transform="translate(220, 150)">
                <line x1="-15" y1="-15" x2="15" y2="15" stroke="#EF4444" stroke-width="5" stroke-linecap="round"/>
                <line x1="15" y1="-15" x2="-15" y2="15" stroke="#EF4444" stroke-width="5" stroke-linecap="round"/>
            </g>
            <text x="200" y="90" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563EB" text-anchor="middle">Action in progress (interrupted)</text>
        `)
    },
    {
        group: "Past",
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        badgeClass: "bg-blue-100 text-blue-800",
        name: "Past Perfect",
        subtitle: "The Past of the Past",
        formula: "Subject + had + V3 (Past Participle)",
        example: "I had already studied before you called.",
        meaning: "Used when talking about two past actions to make it clear which one happened FIRST. It is the older event.",
        keywords: "before, after, by the time, already, until",
        svg: createTimelineSVG(`
            <circle cx="150" cy="150" r="8" fill="#2563EB" />
            <g transform="translate(300, 150)">
                <line x1="-10" y1="-10" x2="10" y2="10" stroke="#64748B" stroke-width="4" stroke-linecap="round"/>
                <line x1="10" y1="-10" x2="-10" y2="10" stroke="#64748B" stroke-width="4" stroke-linecap="round"/>
            </g>
            <path d="M 150 150 Q 225 80 295 145" fill="none" stroke="#2563EB" stroke-width="3" />
            <polygon points="290,135 300,150 280,150" fill="#2563EB" transform="rotate(-30 295 145)"/>
            <text x="150" y="110" font-family="sans-serif" font-size="14" font-weight="bold" fill="#2563EB" text-anchor="middle">Action 1</text>
            <text x="300" y="110" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748B" text-anchor="middle">Action 2</text>
        `)
    },
    {
        group: "Past",
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        badgeClass: "bg-blue-100 text-blue-800",
        name: "Past Perfect Continuous",
        subtitle: "The Past Marathon",
        formula: "Subject + had + been + Verb-ing",
        example: "I had been studying for hours before I slept.",
        meaning: "Focuses on the duration of an ongoing action that was happening *before* another event in the past.",
        keywords: "for, since (leading up to a past event), by the time",
        svg: createTimelineSVG(`
            <path d="M 50 150 Q 70 120 90 150 T 130 150 T 170 150 T 210 150 T 250 150" fill="none" stroke="#2563EB" stroke-width="6" stroke-linecap="round"/>
            <polygon points="240,140 260,150 240,160" fill="#2563EB" />
            <g transform="translate(280, 150)">
                <line x1="-10" y1="-10" x2="10" y2="10" stroke="#64748B" stroke-width="4" stroke-linecap="round"/>
                <line x1="10" y1="-10" x2="-10" y2="10" stroke="#64748B" stroke-width="4" stroke-linecap="round"/>
            </g>
            <text x="150" y="100" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2563EB" text-anchor="middle">Duration before past event</text>
        `)
    },

    // FUTURE TENSES
    {
        group: "Future",
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50",
        borderClass: "border-amber-200",
        badgeClass: "bg-amber-100 text-amber-800",
        name: "Future Simple",
        subtitle: "The Plan / Prediction",
        formula: "Subject + will + Verb",
        example: "I will study grammar tomorrow.",
        meaning: "Used for stating facts about the future, making predictions, promises, or sudden decisions made at the moment of speaking.",
        keywords: "tomorrow, next (week/month), soon, I think, probably",
        svg: createTimelineSVG(`
            <circle cx="600" cy="150" r="10" fill="#F59E0B" />
            <path d="M 400 150 Q 500 80 590 145" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6"/>
            <polygon points="585,135 595,150 575,150" fill="#F59E0B" transform="rotate(-30 590 145)"/>
            <text x="500" y="100" font-family="sans-serif" font-size="16" font-weight="bold" fill="#F59E0B" text-anchor="middle">Future Fact / Decision</text>
        `)
    },
    {
        group: "Future",
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50",
        borderClass: "border-amber-200",
        badgeClass: "bg-amber-100 text-amber-800",
        name: "Future Continuous",
        subtitle: "The Future Video",
        formula: "Subject + will + be + Verb-ing",
        example: "At 8 PM tomorrow, I will be studying.",
        meaning: "Describes an action that will be *in progress* at a specific, pinpointed time in the future. Imagine teleporting to that future moment.",
        keywords: "at [time] tomorrow, this time next week",
        svg: createTimelineSVG(`
            <path d="M 500 150 Q 550 120 600 150 T 700 150" fill="none" stroke="#F59E0B" stroke-width="10" stroke-linecap="round"/>
            <circle cx="600" cy="150" r="12" fill="#FFFFFF" stroke="#F59E0B" stroke-width="4" />
            <text x="600" y="90" font-family="sans-serif" font-size="16" font-weight="bold" fill="#F59E0B" text-anchor="middle">In progress at specific time</text>
        `)
    },
    {
        group: "Future",
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50",
        borderClass: "border-amber-200",
        badgeClass: "bg-amber-100 text-amber-800",
        name: "Future Perfect",
        subtitle: "The Future Deadline",
        formula: "Subject + will + have + V3 (Past Participle)",
        example: "By Friday, I will have finished studying.",
        meaning: "Used to say an action will be 100% completed *before* a specific point or deadline in the future.",
        keywords: "by (tomorrow/Friday), by the time",
        svg: createTimelineSVG(`
            <line x1="650" y1="110" x2="650" y2="190" stroke="#EF4444" stroke-width="4" />
            <text x="650" y="210" font-family="sans-serif" font-size="14" font-weight="bold" fill="#EF4444" text-anchor="middle">Deadline</text>

            <path d="M 450 150 Q 550 150 640 150" fill="none" stroke="#F59E0B" stroke-width="4" />
            <polygon points="630,140 645,150 630,160" fill="#F59E0B" />
            <text x="550" y="130" font-family="sans-serif" font-size="16" font-weight="bold" fill="#F59E0B" text-anchor="middle">Finished before</text>
        `)
    },
    {
        group: "Future",
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50",
        borderClass: "border-amber-200",
        badgeClass: "bg-amber-100 text-amber-800",
        name: "Future Perfect Continuous",
        subtitle: "The Future Milestone",
        formula: "Subject + will + have + been + Verb-ing",
        example: "By next month, I will have been studying for a year.",
        meaning: "Looking forward to a future point to celebrate the accumulated duration of an ongoing action. Focus is on length of time.",
        keywords: "by next [time] + for [duration]",
        svg: createTimelineSVG(`
            <line x1="650" y1="110" x2="650" y2="190" stroke="#EF4444" stroke-width="4" stroke-dasharray="4" />
            <text x="650" y="210" font-family="sans-serif" font-size="14" font-weight="bold" fill="#EF4444" text-anchor="middle">Milestone</text>

            <path d="M 300 150 Q 350 120 400 150 T 500 150 T 600 150" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
            <polygon points="630,140 645,150 630,160" fill="#F59E0B" />
            <text x="480" y="100" font-family="sans-serif" font-size="16" font-weight="bold" fill="#F59E0B" text-anchor="middle">Accumulated time up to future</text>
        `)
    }
];

// --- 2. Logic & State ---

let currentIndex = 0;

const container = document.getElementById('slide-container');
const dotsContainer = document.getElementById('dots-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideCounter = document.getElementById('slide-counter');
const categoryBadge = document.getElementById('category-badge');

function init() {
    // Generate dots
    tensesData.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === 0 ? 'bg-gray-800 w-6' : 'bg-gray-300 hover:bg-gray-400'}`;
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });

    renderSlide(0);
    lucide.createIcons();
}

function updateUI() {
    // Update Buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === tensesData.length - 1;

    if (currentIndex === tensesData.length - 1) {
        nextBtn.innerHTML = 'Finish <i data-lucide="check" class="w-4 h-4"></i>';
    } else {
        nextBtn.innerHTML = 'Next <i data-lucide="arrow-right" class="w-4 h-4"></i>';
    }

    // Update Header
    slideCounter.textContent = `${currentIndex + 1} / 12`;
    categoryBadge.textContent = `${tensesData[currentIndex].group} Tenses`;

    // Update Dots
    Array.from(dotsContainer.children).forEach((dot, index) => {
        if (index === currentIndex) {
            dot.className = 'w-6 h-2.5 rounded-full bg-gray-800 transition-all duration-300';
        } else {
            dot.className = 'w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300';
        }
    });

    lucide.createIcons();
}

function renderSlide(index) {
    const data = tensesData[index];

    const slideHTML = `
        <div class="flex flex-col lg:flex-row min-h-full w-full animate-[fade-in_0.3s_ease-out]">

            <!-- Top/Left: Visualization -->
            <div class="lg:w-1/2 ${data.bgClass} flex items-center justify-center p-6 lg:border-r border-gray-200 border-b lg:border-b-0 min-h-[250px] lg:min-h-0 relative">
                <div class="absolute top-4 left-4">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${data.badgeClass} shadow-sm border border-white">
                        <i data-lucide="clock" class="w-3 h-3 mr-1.5"></i> ${data.group}
                    </span>
                </div>
                <div class="w-full max-w-md drop-shadow-sm">
                    ${data.svg}
                </div>
            </div>

            <!-- Bottom/Right: Text Content -->
            <div class="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                <div class="max-w-lg mx-auto w-full">

                    <h2 class="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1 leading-tight tracking-tight">${data.name}</h2>
                    <p class="text-lg font-medium ${data.colorClass} mb-8 flex items-center">
                        ${data.subtitle}
                    </p>

                    <div class="space-y-6">

                        <!-- Formula Box -->
                        <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
                            <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                                <i data-lucide="function-square" class="w-4 h-4 mr-2 text-gray-400"></i> Formula
                            </h3>
                            <p class="font-mono text-gray-800 font-semibold text-sm lg:text-base">${data.formula}</p>
                        </div>

                        <!-- Example -->
                        <div>
                            <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                                <i data-lucide="message-square-quote" class="w-4 h-4 mr-2 text-gray-400"></i> Example
                            </h3>
                            <p class="text-xl lg:text-2xl text-gray-900 font-serif italic border-l-4 ${data.borderClass} pl-4 py-1">
                                "${data.example}"
                            </p>
                        </div>

                        <!-- Core Meaning -->
                        <div>
                            <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                                <i data-lucide="info" class="w-4 h-4 mr-2 text-gray-400"></i> Core Meaning & Use
                            </h3>
                            <p class="text-gray-700 leading-relaxed">${data.meaning}</p>
                        </div>

                        <!-- Keywords -->
                        <div>
                            <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                                <i data-lucide="key" class="w-4 h-4 mr-2 text-gray-400"></i> Keywords / Time Markers
                            </h3>
                            <div class="flex flex-wrap gap-2">
                                ${data.keywords.split(', ').map(kw =>
        `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200">${kw}</span>`
    ).join('')}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `;

    // Apply fade effect
    container.innerHTML = slideHTML;
    container.firstElementChild.classList.add('fade-enter');

    // Force reflow
    void container.offsetWidth;

    container.firstElementChild.classList.add('fade-enter-active');

    // Reset scroll position to top when slide changes
    container.scrollTop = 0;

    updateUI();
}

function goToSlide(index) {
    if (index >= 0 && index < tensesData.length) {
        currentIndex = index;
        renderSlide(currentIndex);
    }
}

// Event Listeners
prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
    if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
});

// Initialize
init();