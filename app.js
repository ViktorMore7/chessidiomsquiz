// State management
let currentQuestion = 0;
let answers = new Array(40).fill(null);
let userAnswers = new Array(40).fill(null);

// DOM Elements
const introScreen = document.getElementById('introScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const reviewScreen = document.getElementById('reviewScreen');
const masterListScreen = document.getElementById('masterListScreen');

const questionCard = document.getElementById('questionCard');
const questionText = document.getElementById('questionText');
const questionNum = document.getElementById('questionNum');
const hintText = document.getElementById('hintText');
const optionsContainer = document.getElementById('optionsContainer');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    renderMasterList();
});

function setupEventListeners() {
    document.getElementById('startBtn').addEventListener('click', startQuiz);
    document.getElementById('prevBtn').addEventListener('click', () => navigate(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigate(1));
    document.getElementById('infoBtn').addEventListener('click', showInfo);
    document.getElementById('reviewBtn').addEventListener('click', showReview);
    document.getElementById('masterListBtn').addEventListener('click', showMasterList);
    document.getElementById('retryBtn').addEventListener('click', resetQuiz);
    document.getElementById('backFromReview').addEventListener('click', () => {
        reviewScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
    });
    document.getElementById('backFromMaster').addEventListener('click', () => {
        masterListScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
    });
}

function startQuiz() {
    introScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentQuestion = 0;
    answers.fill(null);
    userAnswers.fill(null);
    renderQuestion();
    updateSectionIndicator();
}

function renderQuestion() {
    const q = quizData.questions[currentQuestion];
    
    // Update progress
    progressText.textContent = `Question ${currentQuestion + 1} of 40`;
    progressBar.style.width = `${((currentQuestion + 1) / 40) * 100}%`;
    
    // Update question
    questionNum.textContent = q.id;
    questionText.textContent = q.question;
    hintText.classList.toggle('hidden', !q.hint);
    
    // Add animation
    questionCard.classList.remove('fade-in');
    void questionCard.offsetWidth;
    questionCard.classList.add('fade-in');
    
    // Render options
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-card w-full text-left p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition flex items-start gap-3';
        
        // Check if answered
        if (userAnswers[currentQuestion] !== null) {
            btn.classList.add('disabled');
            btn.disabled = true;
            
            if (idx === q.correct) {
                btn.classList.add('correct');
            } else if (idx === userAnswers[currentQuestion] && idx !== q.correct) {
                btn.classList.add('incorrect');
            }
        }
        
        if (userAnswers[currentQuestion] === idx) {
            btn.classList.add('selected');
        }
        
        const letter = String.fromCharCode(65 + idx);
        btn.innerHTML = `
            <span class="flex-shrink-0 w-8 h-8 rounded-lg ${userAnswers[currentQuestion] === idx ? 'bg-amber-600 text-white' : 'bg-white text-gray-600'} font-semibold text-sm flex items-center justify-center shadow-sm">${letter}</span>
            <span class="text-gray-700 leading-relaxed">${opt.substring(3)}</span>
        `;
        
        if (userAnswers[currentQuestion] === null) {
            btn.addEventListener('click', () => selectAnswer(idx));
        }
        
        optionsContainer.appendChild(btn);
    });
    
    // Update navigation
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = userAnswers[currentQuestion] === null;
    nextBtn.innerHTML = currentQuestion === 39 ? 'See Results <i data-lucide="trophy" class="w-4 h-4 inline ml-2"></i>' : 'Next <i data-lucide="arrow-right" class="w-4 h-4 inline ml-2"></i>';
    
    lucide.createIcons();
    updateSectionIndicator();
}

function selectAnswer(idx) {
    if (userAnswers[currentQuestion] !== null) return;
    
    userAnswers[currentQuestion] = idx;
    
    // Update UI immediately
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach((btn, i) => {
        btn.classList.add('disabled');
        btn.disabled = true;
        
        if (i === quizData.questions[currentQuestion].correct) {
            btn.classList.add('correct');
        } else if (i === idx) {
            btn.classList.add(idx === quizData.questions[currentQuestion].correct ? 'correct' : 'incorrect');
        }
        
        // Update letter styling
        const letterSpan = btn.querySelector('span:first-child');
        if (i === idx || i === quizData.questions[currentQuestion].correct) {
            letterSpan.className = `flex-shrink-0 w-8 h-8 rounded-lg ${i === quizData.questions[currentQuestion].correct ? 'bg-green-600' : 'bg-red-500'} text-white font-semibold text-sm flex items-center justify-center shadow-sm`;
        }
    });
    
    nextBtn.disabled = false;
    
    // Show explanation after selection
    showExplanation();
}

function showExplanation() {
    const q = quizData.questions[currentQuestion];
    const isCorrect = userAnswers[currentQuestion] === q.correct;
    
    const explanationDiv = document.createElement('div');
    explanationDiv.className = `mt-4 p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'} fade-in`;
    explanationDiv.innerHTML = `
        <div class="flex items-start gap-3">
            <i data-lucide="${isCorrect ? 'check-circle' : 'lightbulb'}" class="w-5 h-5 ${isCorrect ? 'text-green-600' : 'text-amber-600'} flex-shrink-0 mt-0.5"></i>
            <div>
                <p class="font-medium ${isCorrect ? 'text-green-800' : 'text-amber-800'} mb-1">${isCorrect ? 'Correct!' : 'Explanation'}</p>
                <p class="text-sm ${isCorrect ? 'text-green-700' : 'text-amber-700'} leading-relaxed">${q.explanation}</p>
            </div>
        </div>
    `;
    
    optionsContainer.appendChild(explanationDiv);
    lucide.createIcons();
}

function navigate(direction) {
    const newIndex = currentQuestion + direction;
    
    if (newIndex < 0 || newIndex > 39) return;
    
    if (newIndex === 40 || (direction === 1 && currentQuestion === 39 && userAnswers[39] !== null)) {
        showResults();
        return;
    }
    
    currentQuestion = newIndex;
    renderQuestion();
}

function updateSectionIndicator() {
    const q = quizData.questions[currentQuestion];
    document.querySelectorAll('.section-card').forEach((el, idx) => {
        const sectionNum = idx + 1;
        if (sectionNum === q.section) {
            el.classList.add('active');
            el.classList.remove('bg-amber-100', 'text-amber-800');
        } else {
            el.classList.remove('active');
            el.classList.add('bg-amber-100', 'text-amber-800');
        }
    });
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    // Calculate score
    let correct = 0;
    const sectionScores = [0, 0, 0, 0];
    
    quizData.questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) {
            correct++;
            sectionScores[q.section - 1]++;
        }
    });
    
    // Animate score
    const scoreCircle = document.getElementById('scoreCircle');
    const scoreNum = document.getElementById('scoreNum');
    const deg = (correct / 40) * 360;
    scoreCircle.style.setProperty('--score-deg', `${deg}deg`);
    
    // Count up animation
    let displayScore = 0;
    const interval = setInterval(() => {
        if (displayScore >= correct) {
            clearInterval(interval);
            scoreNum.textContent = correct;
        } else {
            displayScore++;
            scoreNum.textContent = displayScore;
        }
    }, 30);
    
    // Result message
    const percentage = (correct / 40) * 100;
    const titles = ['Novice Pawn', 'Developing Knight', 'Strategic Bishop', 'Tactical Rook', 'Championship Queen', 'Grandmaster King'];
    const messages = [
        'Every grandmaster was once a beginner. Review the master list and try again!',
        'Solid foundations! You recognize the classic patterns.',
        'Strong positional play! Your strategic vocabulary is developing well.',
        'Excellent tactics! You see the combinations others miss.',
        'Regal performance! Your command of chess idioms is truly commanding.',
        'Absolute mastery! You would triumph in any linguistic tournament.'
    ];
    const titleIdx = Math.min(Math.floor(percentage / 17), 5);
    
    document.getElementById('resultTitle').textContent = `${titles[titleIdx]} — ${Math.round(percentage)}%`;
    document.getElementById('resultMessage').textContent = messages[titleIdx];
    
    // Section breakdown
    const breakdown = document.getElementById('sectionBreakdown');
    breakdown.innerHTML = '';
    
    quizData.sections.forEach((s, idx) => {
        const sectionCorrect = sectionScores[idx];
        const sectionTotal = idx === 0 ? 10 : idx === 1 ? 15 : idx === 2 ? 10 : 5;
        const sectionPct = (sectionCorrect / sectionTotal) * 100;
        
        const colors = ['bg-red-500', 'bg-amber-500', 'bg-yellow-500', 'bg-green-500', 'bg-emerald-500'];
        const colorIdx = Math.min(Math.floor(sectionPct / 20), 4);
        
        breakdown.innerHTML += `
            <div class="flex items-center gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <i data-lucide="${s.icon}" class="w-6 h-6 text-amber-700"></i>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between text-sm mb-1">
                        <span class="font-medium text-gray-700">${s.name}</span>
                        <span class="text-gray-500">${sectionCorrect}/${sectionTotal}</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full ${colors[colorIdx]} transition-all duration-500" style="width: ${sectionPct}%"></div>
                    </div>
                </div>
            </div>
        `;
    });
    
    lucide.createIcons();
}

function showReview() {
    resultsScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    
    const container = document.getElementById('reviewContainer');
    container.innerHTML = '';
    
    quizData.questions.forEach((q, idx) => {
        const isCorrect = userAnswers[idx] === q.correct;
        const userAnswer = userAnswers[idx];
        
        container.innerHTML += `
            <div class="bg-white rounded-xl p-4 shadow-sm border ${isCorrect ? 'border-green-200' : 'border-red-200'}">
                <div class="flex items-start gap-3 mb-3">
                    <div class="flex-shrink-0 w-8 h-8 rounded-lg ${isCorrect ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center">
                        <i data-lucide="${isCorrect ? 'check' : 'x'}" class="w-5 h-5 ${isCorrect ? 'text-green-600' : 'text-red-600'}"></i>
                    </div>
                    <div class="flex-1">
                        <p class="text-xs text-gray-500 mb-1">Question ${q.id} • Section ${q.section}</p>
                        <p class="text-gray-800 font-medium">${q.question}</p>
                    </div>
                </div>
                <div class="ml-11 space-y-1 text-sm">
                    <p class="${isCorrect ? 'text-green-700' : 'text-red-700'}">
                        Your answer: ${userAnswer !== null ? String.fromCharCode(65 + userAnswer) : '—'} • ${userAnswer !== null ? q.options[userAnswer].substring(3) : 'Not answered'}
                    </p>
                    ${!isCorrect ? `<p class="text-green-700">Correct: ${String.fromCharCode(65 + q.correct)} • ${q.options[q.correct].substring(3)}</p>` : ''}
                    <p class="text-gray-500 text-xs mt-2">${q.explanation}</p>
                </div>
            </div>
        `;
    });
    
    lucide.createIcons();
}

function renderMasterList() {
    const container = document.getElementById('masterListContainer');
    const sorted = [...quizData.masterList].sort((a, b) => 
        a.idiom.toLowerCase().localeCompare(b.idiom.toLowerCase())
    );
    
    container.innerHTML = sorted.map(item => `
        <div class="p-4 bg-amber-50/50 rounded-lg border border-amber-100">
            <p class="font-semibold text-amber-900 mb-1">${item.idiom}</p>
            <p class="text-sm text-gray-600 leading-relaxed">${item.definition}</p>
        </div>
    `).join('');
}

function showMasterList() {
    resultsScreen.classList.add('hidden');
    masterListScreen.classList.remove('hidden');
}

function resetQuiz() {
    currentQuestion = 0;
    answers.fill(null);
    userAnswers.fill(null);
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    renderQuestion();
}

function showInfo() {
    document.getElementById('infoModal').classList.remove('hidden');
    document.getElementById('infoModal').classList.add('flex');
}

function closeInfo() {
    document.getElementById('infoModal').classList.add('hidden');
    document.getElementById('infoModal').classList.remove('flex');
}

// Close modal on backdrop click
document.getElementById('infoModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeInfo();
});