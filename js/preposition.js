const prepositionData = [
    {
        title: "Introduction to Prepositions",
        type: "Overview",
        meaning: "A preposition is a word (or group of words) used before a noun, pronoun, or noun phrase to show direction, time, place, location, spatial relationships, or to introduce an object.",
        use: "They act as the 'glue' that connects elements in a sentence, establishing relationships between different ideas.",
        examples: [
            "The book is <strong>on</strong> the table.",
            "She went <strong>to</strong> the store."
        ],
        visual: `
            <div class="flex items-center justify-center h-full w-full bg-slate-100 rounded-xl p-6 border-2 border-dashed border-slate-300">
                <div class="text-center flex flex-col items-center">
                    <svg class="w-16 h-16 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                    <p class="text-slate-600 font-medium">Prepositions are the <strong>Links</strong> in our language.</p>
                </div>
            </div>
        `
    },
    {
        title: "Simple Prepositions",
        type: "Type 1",
        meaning: "These are short, single-word prepositions used to determine a relationship between nouns/pronouns and other words.",
        use: "Commonly used to indicate location, time, or basic relationships.",
        examples: [
            "The cat is <strong>in</strong> the box.",
            "The cup is <strong>on</strong> the table.",
            "She is hiding <strong>under</strong> the bed."
        ],
        visual: `
            <div class="flex flex-wrap justify-center gap-8 items-center h-full p-4 bg-white rounded-xl">
                <!-- IN -->
                <div class="flex flex-col items-center gap-2">
                    <div class="graph-box flex items-center justify-center">
                        <div class="graph-ball !relative"></div>
                    </div>
                    <span class="font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded">IN</span>
                </div>
                <!-- ON -->
                <div class="flex flex-col items-center gap-2">
                    <div class="relative w-20 h-20">
                        <div class="absolute bottom-0 w-20 h-10 bg-indigo-100 border-2 border-indigo-500 rounded"></div>
                        <div class="graph-ball" style="top: 14px; left: 28px;"></div>
                    </div>
                    <span class="font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded">ON</span>
                </div>
                <!-- UNDER -->
                <div class="flex flex-col items-center gap-2">
                    <div class="relative w-20 h-20">
                        <div class="absolute top-2 w-20 h-10 bg-indigo-100 border-2 border-indigo-500 rounded"></div>
                        <div class="graph-ball" style="bottom: 2px; left: 28px;"></div>
                    </div>
                    <span class="font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded">UNDER</span>
                </div>
            </div>
        `
    },
    {
        title: "Double Prepositions",
        type: "Type 2",
        meaning: "Formed by combining two simple prepositions to create a new word. They often indicate direction or movement.",
        use: "Used to show a transition from one state or location to another.",
        examples: [
            "The frog jumped <strong>into</strong> the pond.",
            "He climbed <strong>onto</strong> the roof.",
            "She walked <strong>out of</strong> the room."
        ],
        visual: `
            <div class="flex flex-col items-center justify-center h-full gap-8 bg-indigo-50/50 rounded-xl p-4">
                <!-- INTO -->
                <div class="flex items-center gap-6">
                    <div class="relative w-40 h-24 border-2 border-dashed border-slate-400 rounded-lg flex items-center p-2 bg-white">
                        <div class="graph-ball absolute" style="left: -10px; opacity: 0.5;"></div>
                        <svg class="w-16 h-8 text-blue-500 absolute" style="left: 10px; top: 32px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        <div class="graph-box !w-16 !h-16 absolute right-4 flex items-center justify-center bg-blue-50 border-blue-400">
                            <div class="graph-ball !relative"></div>
                        </div>
                    </div>
                    <span class="font-bold text-lg text-blue-700">INTO</span>
                </div>
            </div>
        `
    },
    {
        title: "Participle Prepositions",
        type: "Type 3",
        meaning: "These are verbs ending in '-ing' or '-ed' or '-en' that function as prepositions in a sentence.",
        use: "They connect subjects to related thoughts or conditions without acting as verbs.",
        examples: [
            "<strong>Regarding</strong> your request, we have approved it.",
            "<strong>Considering</strong> the weather, we should stay inside.",
            "All were present <strong>barring</strong> John."
        ],
        visual: `
            <div class="flex items-center justify-center h-full bg-slate-50 rounded-xl relative overflow-hidden">
                <div class="flex items-center gap-8 relative z-10">
                    <!-- Brain/Thinking -->
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-400 shadow-lg">
                        <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </div>

                    <!-- Arrow with Word -->
                    <div class="flex flex-col items-center">
                        <span class="text-sm font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full mb-1 border border-purple-200">Regarding</span>
                        <svg class="w-20 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>

                    <!-- Document -->
                    <div class="w-16 h-20 bg-white rounded flex flex-col items-center justify-center border-2 border-slate-300 shadow-md">
                        <div class="w-8 h-1 bg-slate-200 mb-2 rounded"></div>
                        <div class="w-10 h-1 bg-slate-200 mb-2 rounded"></div>
                        <div class="w-6 h-1 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Prepositions of Source",
        type: "Type 4",
        meaning: "Indicate the origin, source, or starting point of something.",
        use: "Used to show where a person or thing comes from.",
        examples: [
            "She drew water <strong>from</strong> the well.",
            "He is <strong>from</strong> New York.",
            "I received a gift <strong>from</strong> my sister."
        ],
        visual: `
            <div class="flex items-center justify-center h-full bg-orange-50 rounded-xl relative p-8">
                <div class="flex items-center w-full justify-between max-w-xs">
                    <!-- Origin -->
                    <div class="text-center">
                        <div class="w-16 h-16 bg-white border-4 border-orange-400 rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto">
                            <span class="text-2xl">🎁</span>
                        </div>
                        <span class="text-sm font-semibold text-orange-800">Source (Sister)</span>
                    </div>

                    <!-- Arrow -->
                        <div class="flex flex-col items-center mt-[-20px]">
                        <span class="font-bold text-orange-600 bg-orange-200 px-3 py-1 rounded-full text-sm mb-1">FROM</span>
                        <svg class="w-16 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>

                    <!-- Destination -->
                    <div class="text-center">
                        <div class="w-16 h-16 bg-white border-4 border-slate-300 rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto">
                            <svg class="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        <span class="text-sm font-semibold text-slate-600">Me</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Prepositions of Possession",
        type: "Type 5",
        meaning: "Indicate ownership or that something belongs to someone or something.",
        use: "Common prepositions include 'of', 'with', and 'to'.",
        examples: [
            "He is a friend <strong>of</strong> mine.",
            "The girl <strong>with</strong> the red hair is smiling.",
            "This house belongs <strong>to</strong> him."
        ],
        visual: `
            <div class="flex items-center justify-center h-full bg-emerald-50 rounded-xl relative">
                <div class="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                    <!-- Person -->
                    <div class="flex flex-col items-center">
                            <div class="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2 border-2 border-emerald-300">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        <span class="font-bold text-sm text-slate-600">The Girl</span>
                    </div>

                    <!-- Link -->
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">WITH</span>
                        <div class="h-1 w-12 bg-emerald-300 rounded"></div>
                    </div>

                    <!-- Object -->
                    <div class="flex flex-col items-center">
                            <div class="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-2 border-2 border-red-200">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                        <span class="font-bold text-sm text-slate-600">Red Hair</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Prepositions of Material",
        type: "Type 6",
        meaning: "Indicate the material from which an object is made, or the instrument used to do something.",
        use: "Common prepositions include 'by', 'with', and 'of'.",
        examples: [
            "The table is made <strong>of</strong> wood.",
            "She cut the paper <strong>with</strong> scissors.",
            "The story was written <strong>by</strong> him."
        ],
        visual: `
            <div class="flex flex-col items-center justify-center h-full bg-stone-100 rounded-xl">
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border border-stone-200">
                    <!-- Tool/Material -->
                    <div class="w-16 h-16 flex items-center justify-center text-3xl bg-stone-50 rounded-lg border border-stone-200">
                        ✂️
                    </div>

                    <!-- Action -->
                    <div class="flex flex-col items-center px-4">
                        <span class="text-xs uppercase font-bold text-slate-400 mb-1">Instrument</span>
                        <span class="font-bold text-lg text-stone-700 bg-stone-200 px-4 py-1 rounded-full">WITH</span>
                    </div>

                    <!-- Object modified -->
                    <div class="w-16 h-16 flex items-center justify-center text-3xl bg-blue-50 rounded-lg border border-blue-200">
                        📄
                    </div>
                </div>
            </div>
        `
    }
];

let currentStep = 0;

const contentArea = document.getElementById('content-area');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const progressBar = document.getElementById('progress-bar');
const stepCounter = document.getElementById('step-counter');

function renderStep(index) {
    const data = prepositionData[index];

    // Format examples into HTML list
    const examplesHtml = data.examples.map(ex => `<li class="flex items-start gap-2 text-slate-700">
        <svg class="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span>${ex}</span>
    </li>`).join('');

    // Construct full slide HTML
    const slideHtml = `
        <div class="step-container active flex flex-col h-full animate-fade-in">
            <div class="mb-2">
                <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">${data.type}</span>
                <h2 class="text-3xl font-bold text-slate-800 mb-6">${data.title}</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                <!-- Left Column: Text Content -->
                <div class="flex flex-col gap-6">
                    <div class="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                        <h3 class="text-sm font-bold text-blue-800 uppercase mb-2 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                            Meaning
                        </h3>
                        <p class="text-slate-700 leading-relaxed">${data.meaning}</p>
                    </div>

                    <div>
                        <h3 class="text-sm font-bold text-slate-500 uppercase mb-2">How it's used</h3>
                        <p class="text-slate-600 italic bg-slate-50 p-3 rounded-lg border-l-4 border-slate-300">${data.use}</p>
                    </div>

                    <div>
                        <h3 class="text-sm font-bold text-slate-800 mb-3">Examples:</h3>
                        <ul class="space-y-3">
                            ${examplesHtml}
                        </ul>
                    </div>
                </div>

                <!-- Right Column: Visual Graph -->
                <div class="flex flex-col">
                    <h3 class="text-sm font-bold text-slate-500 uppercase mb-3 hidden md:block">Visual Representation</h3>
                    <div class="flex-grow min-h-[250px] border-2 border-slate-100 rounded-2xl overflow-hidden shadow-inner bg-slate-50">
                        ${data.visual}
                    </div>
                </div>
            </div>
        </div>
    `;

    contentArea.innerHTML = slideHtml;
    updateUI();
}

function updateUI() {
    // Update buttons
    btnBack.disabled = currentStep === 0;

    if (currentStep === prepositionData.length - 1) {
        btnNext.innerHTML = `Finish <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
        btnNext.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        btnNext.classList.add('bg-green-600', 'hover:bg-green-700', 'shadow-green-500/30');
    } else {
        btnNext.innerHTML = `Next <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`;
        btnNext.classList.add('bg-blue-600', 'hover:bg-blue-700');
        btnNext.classList.remove('bg-green-600', 'hover:bg-green-700', 'shadow-green-500/30');
    }

    // Update Header/Progress
    stepCounter.innerText = `Step ${currentStep + 1} of ${prepositionData.length}`;
    const progressPercentage = ((currentStep + 1) / prepositionData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

btnNext.addEventListener('click', () => {
    if (currentStep < prepositionData.length - 1) {
        currentStep++;
        renderStep(currentStep);
    } else {
        // End of presentation behavior
        currentStep.disabled = true;
        // contentArea.innerHTML = `
        //     <div class="flex flex-col items-center justify-center h-full w-full animate-fade-in text-center pt-10">
        //         <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
        //             <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        //         </div>
        //         <h2 class="text-3xl font-bold text-slate-800 mb-4">Great Job!</h2>
        //         <p class="text-slate-600 mb-8 max-w-md">You've successfully explored the different types of prepositions and how they visually connect elements in English grammar.</p>
        //         <button onclick="currentStep = 0; renderStep(currentStep);" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors">Start Over</button>
        //     </div>
        // `;
        // btnNext.style.display = 'none';
        // btnBack.style.display = 'none';
        // stepCounter.innerText = "Completed";
        // progressBar.style.width = "100%";
        // progressBar.classList.replace('bg-blue-600', 'bg-green-500');
    }
});

btnBack.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        renderStep(currentStep);

        // Ensure buttons are visible in case user clicks back after somehow hiding them
        btnNext.style.display = 'flex';
        btnBack.style.display = 'flex';
        progressBar.classList.replace('bg-green-500', 'bg-blue-600');
    }
});

// Initialize the first view
renderStep(currentStep);