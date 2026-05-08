const techniques = [
    {
        title: "Synonym Replacement & Collocations",
        icon: "refresh-cw",
        imageColor: "text-blue-500",
        imageBg: "bg-blue-100",
        description: "Swapping individual words or entire phrases with equivalents that convey the exact same meaning, while ensuring the new words naturally fit together (collocations).",
        original: "The new algorithm is very fast.",
        paraphrase: "The updated model operates with high efficiency.",
        why: "It prevents repetition and demonstrates a broad Lexical Resource, showing the examiner or reader that you have a wide vocabulary at your disposal.",
        keywords: ["(No specific triggers, relies on vocabulary bank)"],
        howTo: "Identify the main nouns, verbs, and adjectives in a prompt or sentence. Ask yourself, 'What is a more precise or academic way to say this?' before speaking or writing."
    },
    {
        title: "Voice Alternation (Active to Passive)",
        icon: "arrow-left-right",
        imageColor: "text-purple-500",
        imageBg: "bg-purple-100",
        description: "Shifting the grammatical focus of the sentence from the 'doer' of the action (Active) to the 'receiver' or the action itself (Passive).",
        original: "Researchers developed a novel routing protocol to reduce fault rates.",
        paraphrase: "A novel routing protocol was developed to reduce fault rates.",
        why: "It instantly elevates the formality of the text. In academic research or technical writing, who performed the action is often less important than the action itself.",
        keywords: ["is", "are", "was", "were", "has been", "+ past participle (e.g., analyzed)"],
        howTo: "Locate the object in your sentence. Move the object to the front, add the appropriate 'to be' verb, and push the subject to the end (or remove it entirely)."
    },
    {
        title: "Nominalization (Word Class Shift)",
        icon: "box",
        imageColor: "text-emerald-500",
        imageBg: "bg-emerald-100",
        description: "The process of converting verbs (actions) or adjectives (descriptions) into nouns (concepts) to make writing sound more formal and objective.",
        original: "The satellite navigated accurately, which impressed the team.",
        paraphrase: "The accuracy of the satellite's navigation impressed the team.",
        why: "Native speakers use this heavily in professional contexts because it makes sentences denser and more objective, packing more information into fewer words.",
        keywords: ["-tion", "-ment", "-ity", "-ness", "-ance"],
        howTo: "When you see an action verb or adjective, try to turn it into a noun phrase. Instead of saying 'how they perform,' say 'their performance.'"
    },
    {
        title: "Clause Reduction",
        icon: "scissors",
        imageColor: "text-red-500",
        imageBg: "bg-red-100",
        description: "Taking a long relative clause (using who, which, or that) and shortening it into a compact phrase using an '-ing' or '-ed' verb.",
        original: "The students who are analyzing the datasets must submit reports.",
        paraphrase: "The students analyzing the datasets must submit reports.",
        why: "It eliminates clunky, unnecessary words, making your writing much more concise and your speaking much more fluid.",
        keywords: ["Removal of: who, which, that", "Removal of: is, are, was"],
        howTo: "Review your sentence for relative pronouns. If the pronoun is followed by a 'to be' verb, delete both and leave the main action verb."
    },
    {
        title: "Concession & Contrast Restructuring",
        icon: "git-compare",
        imageColor: "text-orange-500",
        imageBg: "bg-orange-100",
        description: "Changing the grammatical structure used to link two opposing ideas, moving away from simple conjunctions like 'but' or 'and'.",
        original: "The applicant studied for 8 hours, but still felt anxious.",
        paraphrase: "Despite studying for 8 hours, the applicant still felt anxious.",
        why: "It creates a complex sentence, which is a key requirement for high scores in Grammatical Range. It shows sophisticated logical reasoning.",
        keywords: ["Although", "Even though", "Despite", "In spite of", "Whereas", "While"],
        howTo: "Whenever you are about to use 'but' to connect two sentences, stop and start the first sentence with 'Although' or 'Despite' instead."
    },
    {
        title: "Conditional Rephrasing",
        icon: "shuffle",
        imageColor: "text-teal-500",
        imageBg: "bg-teal-100",
        description: "Turning a factual statement detailing a cause and an effect into a hypothetical 'if/then' scenario.",
        original: "The journal rejected the paper because the methodology lacked detail.",
        paraphrase: "If the methodology had not lacked detail, the journal would not have rejected the paper.",
        why: "Conditionals demonstrate a high degree of language control, specifically the ability to discuss unreal or past hypothetical situations.",
        keywords: ["If", "Unless", "Provided that", "Assuming that", "As long as"],
        howTo: "Look for sentences connected by 'because' or 'so.' Flip the logic to describe what would have happened if the cause did not exist."
    },
    {
        title: "Negative/Positive Framing",
        icon: "contrast",
        imageColor: "text-pink-500",
        imageBg: "bg-pink-100",
        description: "The technique of expressing an idea by negating its exact opposite.",
        original: "Securing funding for a master's program is quite difficult.",
        paraphrase: "Securing funding for a master's program is not particularly easy.",
        why: "It acts as a brilliant safety net during speaking. If you cannot remember the exact synonym for a complex word, you can simply use 'not' plus a basic word.",
        keywords: ["Not", "Never", "Hardly", "Rarely"],
        howTo: "Identify an adjective in your sentence. Think of its opposite, and put 'not' in front of it."
    },
    {
        title: "Cleft Sentences (Focus Structures)",
        icon: "target",
        imageColor: "text-indigo-500",
        imageBg: "bg-indigo-100",
        description: "Dividing a simple sentence into two parts to put intense grammatical focus on one specific piece of information, usually using 'It' or 'What'.",
        original: "The strict deadlines caused the most stress for the students.",
        paraphrase: "It was the strict deadlines that caused the most stress for the students.",
        why: "It adds powerful emphasis. In speaking, it makes you sound fluent and passionate. In writing, it forces the reader to pay attention to your main point.",
        keywords: ["It is/was... that...", "What... is/was..."],
        howTo: "Identify the most important noun or phrase. Wrap that noun inside 'It is [noun] that [the rest of the sentence].'"
    },
    {
        title: "Generalization & Specification",
        icon: "layers",
        imageColor: "text-cyan-500",
        imageBg: "bg-cyan-100",
        description: "Changing specific, detailed examples into a broad, general category—or doing the exact reverse.",
        original: "The laboratory requires new microscopes, glass beakers, and safety goggles.",
        paraphrase: "The laboratory requires updated scientific equipment.",
        why: "Moving to general is perfect for summaries. Moving to specific is a great speaking trick to expand on a short answer and keep talking fluently.",
        keywords: ["equipment", "facilities", "factors", "issues", "infrastructure (broad nouns)"],
        howTo: "If you see a list of items, replace them with their blanket category name. If you have a category name, replace it with 2-3 specific examples."
    },
    {
        title: "Direct to Indirect Speech",
        icon: "message-square",
        imageColor: "text-amber-500",
        imageBg: "bg-amber-100",
        description: "Taking a direct quote or statement from someone else and embedding it into your own sentence without using quotation marks.",
        original: "The professor said, 'The methodology is completely flawed.'",
        paraphrase: "The professor argued that the methodology was entirely incorrect.",
        why: "Using indirect speech allows you to integrate research smoothly into your own paragraphs without breaking the visual flow with quotation marks.",
        keywords: ["argued that", "stated that", "claimed that", "suggested that", "hypothesized that"],
        howTo: "Remove quotation marks, insert a strong reporting verb + 'that', and step the verb tense backward (e.g., change 'is' to 'was')."
    },
    {
        title: "Register Shifting (Phrasal vs. Formal Verbs)",
        icon: "briefcase",
        imageColor: "text-lime-600",
        imageBg: "bg-lime-100",
        description: "Swapping a multi-word, casual phrasal verb for a formal, single-word verb (usually Latin-based), or vice versa.",
        original: "We need to look into the problem before we give out the results.",
        paraphrase: "We must investigate the issue before we distribute the findings.",
        why: "It gives total control over formality. Phrasal verbs make speaking sound natural. Single-word verbs make essays sound highly academic.",
        keywords: ["Phrasal verbs: set up, figure out, bring up", "Formal: establish, discover, raise"],
        howTo: "When editing an essay, replace two-word verbs with single formal verbs. In a speaking exam, do the reverse to sound conversational."
    },
    {
        title: "Changing Word Order (Fronting)",
        icon: "arrow-right-left",
        imageColor: "text-rose-500",
        imageBg: "bg-rose-100",
        description: "Taking a prepositional phrase, time phrase, or adverb from the end of a sentence and moving it to the very front.",
        original: "The team decided to halt the experiment due to safety concerns.",
        paraphrase: "Due to safety concerns, the team decided to halt the experiment.",
        why: "It breaks up the monotony of always starting sentences with the subject. It instantly improves Coherence and Cohesion by making sentences link better.",
        keywords: ["Time: in 2020", "Location: in the lab", "Reason: due to, because of this"],
        howTo: "Look at the last words of your sentence. If they describe when, where, or why, cut them out, paste them at the beginning, and add a comma."
    }
];

let currentPage = 0;

const contentContainer = document.getElementById('content-container');
const pageIndicator = document.getElementById('page-indicator');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const progressDots = document.getElementById('progress-dots');

// Initialize progress dots
techniques.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? 'bg-indigo-600 w-4' : 'bg-slate-300'}`;
    dot.id = `dot-${index}`;
    progressDots.appendChild(dot);
});

function updateDots() {
    techniques.forEach((_, index) => {
        const dot = document.getElementById(`dot-${index}`);
        if (index === currentPage) {
            dot.className = 'w-4 h-2 rounded-full transition-all duration-300 bg-indigo-600';
        } else {
            dot.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-slate-300';
        }
    });
}

function renderPage() {
    // Trigger reflow for animation
    contentContainer.classList.remove('fade-in');
    void contentContainer.offsetWidth;
    contentContainer.classList.add('fade-in');

    const tech = techniques[currentPage];

    // Format keywords into badges
    const keywordBadges = tech.keywords.map(kw =>
        `<span class="inline-block bg-slate-100 text-slate-700 border border-slate-200 rounded-full px-3 py-1 text-xs sm:text-sm font-medium mr-2 mb-2">${kw}</span>`
    ).join('');

    contentContainer.innerHTML = `
        <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 rounded-2xl ${tech.imageBg} ${tech.imageColor} flex items-center justify-center shadow-inner shrink-0">
                <i data-lucide="${tech.icon}" class="w-8 h-8"></i>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">${tech.title}</h2>
        </div>

        <div class="bg-slate-50 border-l-4 border-indigo-500 p-5 rounded-r-xl mb-8">
            <p class="text-slate-700 text-lg sm:text-xl leading-relaxed">
                ${tech.description}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="bg-red-50/50 border border-red-100 p-5 rounded-xl">
                <div class="flex items-center gap-2 text-red-600 font-semibold mb-2">
                    <i data-lucide="x-circle" class="w-4 h-4"></i> Original Concept
                </div>
                <p class="text-slate-800 italic text-lg">"${tech.original}"</p>
            </div>
            <div class="bg-emerald-50/50 border border-emerald-100 p-5 rounded-xl shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-16 h-16 bg-emerald-200 rounded-full opacity-20 -mr-8 -mt-8"></div>
                <div class="flex items-center gap-2 text-emerald-600 font-semibold mb-2 relative z-10">
                    <i data-lucide="check-circle-2" class="w-4 h-4"></i> Paraphrased Concept
                </div>
                <p class="text-slate-800 font-medium text-lg relative z-10">"${tech.paraphrase}"</p>
            </div>
        </div>

        <div class="space-y-6">
            <div>
                <h3 class="flex items-center gap-2 text-lg font-bold text-slate-800 mb-2">
                    <i data-lucide="zap" class="w-5 h-5 text-amber-500"></i> Why it works
                </h3>
                <p class="text-slate-600 leading-relaxed">${tech.why}</p>
            </div>

            <div>
                <h3 class="flex items-center gap-2 text-lg font-bold text-slate-800 mb-3">
                    <i data-lucide="key" class="w-5 h-5 text-indigo-500"></i> Key Words / Triggers
                </h3>
                <div class="flex flex-wrap">
                    ${keywordBadges}
                </div>
            </div>

            <div class="bg-blue-50 border border-blue-100 p-5 rounded-xl">
                <h3 class="flex items-center gap-2 text-lg font-bold text-blue-900 mb-2">
                    <i data-lucide="search" class="w-5 h-5 text-blue-600"></i> How to spot or use it
                </h3>
                <p class="text-blue-800 leading-relaxed">${tech.howTo}</p>
            </div>
        </div>
    `;

    // Re-initialize Lucide icons for the newly injected HTML
    lucide.createIcons();

    // Update UI state
    pageIndicator.textContent = `Page ${currentPage + 1} of 12`;
    btnPrev.disabled = currentPage === 0;

    // Change Next button text on last page
    if (currentPage === techniques.length - 1) {
        btnNext.innerHTML = 'Finish <i data-lucide="check" class="w-5 h-5"></i>';
        btnNext.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
        btnNext.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
    } else {
        btnNext.innerHTML = 'Next <i data-lucide="arrow-right" class="w-5 h-5"></i>';
        btnNext.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
        btnNext.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
    }
    lucide.createIcons();
    updateDots();
}

// Event Listeners
btnNext.addEventListener('click', () => {
    if (currentPage < techniques.length - 1) {
        currentPage++;
        renderPage();
    } else {
        // Optional finish action
        // alert("Congratulations! You've reviewed all 12 master paraphrasing techniques. Start applying them in your speaking and writing!");
        // currentPage = 0; // reset for demo purposes
        if (currentPage !== techniques.length - 1) {
            renderPage();
        }
    }
});

btnPrev.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
});

// Initial render
renderPage();