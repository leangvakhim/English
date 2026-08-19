// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Data structure for the topics. This allows easy expansion.
// I've added some dummy 'subtopics' to demonstrate the expansion feature you requested.
const topics = [
    {
        id: 'tense',
        title: 'Tense & Sub-tense',
        url: './html/tense.html',
        description: 'Understand the timeline of actions. Learn past, present, and future forms.',
        subtopics: ['Present Simple', 'Past Continuous', 'Future Perfect']
    },
    {
        id: 'paraphrase',
        title: 'Paraphrasing Techniques',
        url: './html/paraphrase.html',
        description: 'Express the same meaning using different words. Crucial for writing and speaking.',
        subtopics: ['Using Synonyms', 'Changing Word Class', 'Changing Sentence Structure']
    },
    {
        id: 'passive',
        title: 'Tense (Passive)',
        url: './html/passive_tense.html',
        description: 'Focus on the action receiving the verb, rather than who is doing it.',
        subtopics: ['Passive in Present', 'Passive in Past', 'Reporting Verbs']
    },
    {
        id: 'relative',
        title: 'Relative Pronouns',
        url: './html/relative_pronoun.html',
        description: 'Connect clauses using who, whom, whose, which, and that.',
        subtopics: ['Defining Clauses', 'Non-defining Clauses', 'Omission of Pronoun']
    },
    {
        id: 'conditional',
        title: 'Conditional Type',
        url: './html/conditional.html',
        description: 'Master "if" clauses. Learn zero, first, second, third, and mixed conditionals.',
        subtopics: ['Zero Conditional (Facts)', 'First Conditional (Real Future)', 'Second Conditional (Unreal Present)']
    },
    {
        id: 'conjunctive',
        title: 'Conjunctive Adverbs',
        url: './html/conjunctive_adverb.html',
        description: 'Connect independent clauses smoothly with words like however, therefore, and moreover.',
        subtopics: ['Showing Contrast', 'Showing Result', 'Adding Information']
    },
    {
        id: 'conjunctions',
        title: 'Conjunctions',
        url: './html/conjunction.html',
        description: 'Link words, phrases, or clauses. Explore coordinating and subordinating types.',
        subtopics: ['FANBOYS (Coordinating)', 'Subordinating Conjunctions', 'Correlative Conjunctions']
    }
];

const topicListElement = document.getElementById('topic-list');

// Function to render the list items
function renderTopics() {
    topics.forEach((topic, index) => {
        // Calculate animation delay for staggered entrance
        const delay = index * 0.05;

        const li = document.createElement('li');
        // Apply base styling and staggered animation class
        li.className = `topic-card bg-white rounded-2xl border border-slate-200 overflow-hidden opacity-0 animate-slide-up`;
        li.style.animationDelay = `${delay}s`;

        // HTML structure for each topic card
        li.innerHTML = `
            <div class="p-1">
                <button
                    class="w-full text-left px-5 py-4 flex items-center justify-between rounded-xl hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50 transition-colors group"
                    onclick="toggleTopic('${topic.id}')"
                    aria-expanded="false"
                    aria-controls="content-${topic.id}"
                    id="btn-${topic.id}"
                >
                    <div class="flex items-start gap-4">
                        <div class="mt-1 flex-shrink-0 h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-semibold group-hover:bg-brand-100 group-hover:text-brand-700 transition-colors">
                            ${index + 1}
                        </div>
                        <div>
                            <h2 class="text-xl font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">${topic.title}</h2>
                            <p class="text-sm text-slate-500 mt-1">${topic.description}</p>
                        </div>
                    </div>
                    <div class="flex-shrink-0 ml-4 text-slate-400 group-hover:text-brand-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </button>
            </div>

            <div id="content-${topic.id}" class="expandable-content bg-slate-50 border-t border-slate-100">
                <div class="expandable-inner">
                    <div class="px-6 py-5 sm:px-10 sm:py-6 sm:pl-[5.5rem]">
                        <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">What you'll learn</h3>
                        <ul class="space-y-2 mb-6">
                            ${topic.subtopics.map(sub => `
                                <li class="flex items-start text-slate-600 text-sm">
                                    <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    ${sub}
                                </li>
                            `).join('')}
                        </ul>
                        <a href="${topic.url}" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors">
                            Start Lesson
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `;

        topicListElement.appendChild(li);
    });
}

// Initialize rendering
renderTopics();

// Function to handle the expanding/collapsing of topics
let currentlyOpenId = null;

function toggleTopic(id) {
    const content = document.getElementById(`content-${id}`);
    const btn = document.getElementById(`btn-${id}`);
    const isExpanded = btn.classList.contains('expanded-icon');

    // If accordion style is desired (only one open at a time):
    if (currentlyOpenId && currentlyOpenId !== id) {
        const prevContent = document.getElementById(`content-${currentlyOpenId}`);
        const prevBtn = document.getElementById(`btn-${currentlyOpenId}`);

        if (prevContent && prevBtn) {
            prevContent.classList.remove('expanded');
            prevBtn.classList.remove('expanded-icon');
            prevBtn.setAttribute('aria-expanded', 'false');
        }
    }

    if (isExpanded) {
        // Close the current one
        content.classList.remove('expanded');
        btn.classList.remove('expanded-icon');
        btn.setAttribute('aria-expanded', 'false');
        currentlyOpenId = null;
    } else {
        // Open the clicked one
        content.classList.add('expanded');
        btn.classList.add('expanded-icon');
        btn.setAttribute('aria-expanded', 'true');
        currentlyOpenId = id;
    }
}