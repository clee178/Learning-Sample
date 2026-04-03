// === Course Data ===
const courseData = {
  title: "CompTIA A+ Core 2: Communication & Professionalism",
  objectives: [
    "Focus on developing critical soft skills and customer support strategies to improve user satisfaction and service outcomes",
    "Learn to communicate professionally using positive, jargon-free language while maintaining empathy and calmness under pressure",
    "De-escalate tense situations, take ownership of issues, and follow through with effective problem resolution",
    "Recognize cultural differences to communicate sensitively and collaborate remotely",
    "Manage time and documentation by setting realistic expectations, managing hold times, updating tickets, and contributing to knowledge bases"
  ],
  lessons: [
    {
      id: "overview",
      title: "Course Overview",
      duration: "1m 45s",
      durationSec: 105,
      type: "video",
      description: "Welcome to the CompTIA A+ Core 2: Communication & Professionalism course. This overview introduces the key topics and learning objectives you'll cover throughout the course."
    },
    {
      id: "proper-language",
      title: "Proper Language and Positive Attitude",
      duration: "4m 10s",
      durationSec: 250,
      type: "video",
      description: "Learn how to communicate professionally using positive, jargon-free language. Discover techniques for maintaining empathy and calmness even under pressure, and how your attitude directly impacts customer satisfaction."
    },
    {
      id: "difficult-customers",
      title: "Handling Difficult Customers and Escalations",
      duration: "3m 53s",
      durationSec: 233,
      type: "video",
      description: "Master the art of de-escalating tense customer interactions. Learn when and how to escalate issues appropriately, take ownership of problems, and follow through to resolution."
    },
    {
      id: "cross-cultural",
      title: "Cross-Cultural Communication and Sensitivity",
      duration: "4m 40s",
      durationSec: 280,
      type: "video",
      description: "Understand the importance of cultural awareness in customer support. Learn strategies for communicating sensitively across cultures and collaborating effectively with remote teams."
    },
    {
      id: "time-management",
      title: "Time Management and Support Documentation",
      duration: "4m 59s",
      durationSec: 299,
      type: "video",
      description: "Develop essential time management skills for support professionals. Learn to set realistic expectations, manage hold times, update tickets accurately, and contribute to knowledge bases."
    },
    {
      id: "confidentiality",
      title: "Confidentiality and Ethical Guidelines",
      duration: "5m 43s",
      durationSec: 343,
      type: "video",
      description: "Explore the ethical responsibilities of IT support professionals. Learn about data privacy regulations, handling sensitive information, and maintaining confidentiality in all customer interactions."
    },
    {
      id: "soft-skills",
      title: "Soft Skills Workshop: Active Listening and Rapport Building",
      duration: "4m 21s",
      durationSec: 261,
      type: "video",
      description: "Practice active listening techniques and learn how to build rapport with customers quickly. This interactive workshop covers verbal and non-verbal communication skills essential for support roles."
    },
    {
      id: "self-service",
      title: "Customer Self-Service Resource Creation",
      duration: "5m 51s",
      durationSec: 351,
      type: "video",
      description: "Learn how to create effective self-service resources including FAQs, knowledge base articles, and troubleshooting guides that empower customers to resolve common issues independently."
    },
    {
      id: "customer-satisfaction",
      title: "Customer Satisfaction: Finalizing and Reporting",
      duration: "3m 42s",
      durationSec: 222,
      type: "video",
      description: "Understand how to measure and report on customer satisfaction. Learn about CSAT scores, follow-up techniques, and how to use feedback data to continuously improve support quality."
    },
    {
      id: "summary",
      title: "Course Summary",
      duration: "1m 15s",
      durationSec: 75,
      type: "video",
      description: "A comprehensive review of all key concepts covered in this course. Revisit the learning objectives and ensure you're prepared for the assessment."
    },
    {
      id: "test",
      title: "Take Test",
      duration: null,
      durationSec: 0,
      type: "test",
      description: "Test your knowledge of communication and professionalism concepts covered in this course."
    },
    {
      id: "reflection",
      title: "Reflection: Reflect on what you've learned",
      duration: null,
      durationSec: 0,
      type: "reflection",
      description: "Take time to reflect on the key takeaways and how you'll apply them in your work."
    }
  ]
};

// === Test Questions ===
const testQuestions = [
  {
    question: "1. When communicating with a non-technical customer, which approach is most appropriate?",
    options: [
      "Use technical jargon to demonstrate expertise",
      "Use clear, simple language and avoid acronyms",
      "Speak quickly to resolve the issue faster",
      "Redirect them to online documentation"
    ],
    correct: 1
  },
  {
    question: "2. A customer is visibly frustrated and raising their voice. What is the best first step?",
    options: [
      "Ask the customer to calm down",
      "Immediately transfer to a manager",
      "Acknowledge their frustration and listen actively",
      "Put them on hold until they cool off"
    ],
    correct: 2
  },
  {
    question: "3. Which of the following best demonstrates cultural sensitivity in a support interaction?",
    options: [
      "Assuming all customers prefer informal communication",
      "Using slang to build rapport quickly",
      "Being mindful of different communication styles and avoiding assumptions",
      "Speaking louder if the customer has an accent"
    ],
    correct: 2
  },
  {
    question: "4. What is the primary purpose of documenting support interactions in a ticketing system?",
    options: [
      "To monitor employee performance only",
      "To create a record for billing purposes",
      "To ensure continuity, track patterns, and build a knowledge base",
      "To satisfy regulatory requirements only"
    ],
    correct: 2
  },
  {
    question: "5. A customer asks you to share another customer's account details to help resolve an issue. What should you do?",
    options: [
      "Share the information if it seems harmless",
      "Politely decline and explain confidentiality policies",
      "Share only the customer's name",
      "Ask your manager to share it instead"
    ],
    correct: 1
  },
  {
    question: "6. Which active listening technique involves restating what the customer said in your own words?",
    options: [
      "Mirroring",
      "Summarizing",
      "Paraphrasing",
      "Deflecting"
    ],
    correct: 2
  },
  {
    question: "7. When creating a knowledge base article for customer self-service, which element is most important?",
    options: [
      "Using highly technical language to be precise",
      "Making it as brief as possible with no images",
      "Clear step-by-step instructions with screenshots when helpful",
      "Including internal notes and escalation procedures"
    ],
    correct: 2
  },
  {
    question: "8. What is a CSAT score used to measure?",
    options: [
      "Average call handling time",
      "Employee productivity ratings",
      "Customer satisfaction with a specific interaction or service",
      "Number of tickets resolved per day"
    ],
    correct: 2
  },
  {
    question: "9. When you need to put a customer on hold, what is the best practice?",
    options: [
      "Just put them on hold immediately",
      "Explain why, ask permission, and provide an estimated wait time",
      "Transfer them without explanation",
      "Hang up and call them back later"
    ],
    correct: 1
  },
  {
    question: "10. Which of the following is the best way to conclude a support interaction?",
    options: [
      "End the call as quickly as possible",
      "Ask if there is anything else you can help with and summarize actions taken",
      "Transfer to a satisfaction survey without warning",
      "Tell the customer to call back if they have more questions"
    ],
    correct: 1
  }
];

// === State ===
let state = {
  currentLessonIndex: 0,
  lessonProgress: {}, // id -> 'not_started' | 'started' | 'completed'
  isPlaying: false,
  simElapsed: 0,
  simInterval: null,
  testAnswers: {},
  testSubmitted: false,
  testScore: null,
  reflectionSubmitted: false
};

// Initialize progress
courseData.lessons.forEach(l => {
  state.lessonProgress[l.id] = 'not_started';
});

// === DOM Elements ===
const sidebarContent = document.getElementById('sidebarContent');
const lessonTitle = document.getElementById('lessonTitle');
const lessonDescription = document.getElementById('lessonDescription');
const placeholderTitle = document.getElementById('placeholderTitle');
const videoPlaceholder = document.getElementById('videoPlaceholder');
const simControls = document.getElementById('simControls');
const simPlayPause = document.getElementById('simPlayPause');
const simProgressBar = document.getElementById('simProgressBar');
const simProgressFill = document.getElementById('simProgressFill');
const simTime = document.getElementById('simTime');
const playPauseIcon = document.getElementById('playPauseIcon');
const progressBadge = document.getElementById('progressBadge');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
const lessonInfo = document.getElementById('lessonInfo');
const testModal = document.getElementById('testModal');
const testBody = document.getElementById('testBody');
const testModalClose = document.getElementById('testModalClose');
const submitTestBtn = document.getElementById('submitTest');
const reflectionModal = document.getElementById('reflectionModal');
const reflectionModalClose = document.getElementById('reflectionModalClose');
const submitReflectionBtn = document.getElementById('submitReflection');

// === Render Sidebar ===
function renderSidebar() {
  sidebarContent.innerHTML = '';
  courseData.lessons.forEach((lesson, index) => {
    const item = document.createElement('div');
    item.className = 'lesson-item' + (index === state.currentLessonIndex ? ' active' : '') + (lesson.type !== 'video' ? ' special' : '');
    item.dataset.index = index;

    const progress = state.lessonProgress[lesson.id];
    let statusClass = '';
    let statusLabel = 'NOT STARTED';
    let statusLabelClass = '';
    let circleContent = '';

    if (index === state.currentLessonIndex && lesson.type === 'video') {
      if (state.isPlaying) {
        statusClass = 'playing';
        statusLabel = 'CURRENTLY PLAYING';
        statusLabelClass = 'current';
        circleContent = '<svg viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="6,4 20,12 6,20"/></svg>';
      } else if (progress === 'started') {
        statusClass = 'started';
        statusLabel = 'STARTED';
        circleContent = '<span class="dot"></span>';
      } else if (progress === 'completed') {
        statusClass = 'completed';
        statusLabel = 'COMPLETED';
        statusLabelClass = 'complete';
        circleContent = '<svg viewBox="0 0 24 24" fill="white" stroke="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
      }
    } else if (progress === 'completed') {
      statusClass = 'completed';
      statusLabel = 'COMPLETED';
      statusLabelClass = 'complete';
      circleContent = '<svg viewBox="0 0 24 24" fill="white" stroke="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
    } else if (progress === 'started') {
      statusClass = 'started';
      statusLabel = 'STARTED';
      circleContent = '<span class="dot"></span>';
    }

    item.innerHTML = `
      <div class="status-circle ${statusClass}">${circleContent}</div>
      <div class="lesson-text">
        <div class="lesson-status-label ${statusLabelClass}">${statusLabel}</div>
        <div class="lesson-name">${lesson.title}</div>
        ${lesson.duration ? `<div class="lesson-duration">${lesson.duration}</div>` : ''}
      </div>
      <button class="kebab-btn" aria-label="More options">&#8942;</button>
    `;

    item.addEventListener('click', (e) => {
      if (e.target.closest('.kebab-btn')) return;
      selectLesson(index);
    });

    sidebarContent.appendChild(item);
  });
}

// === Select Lesson ===
function selectLesson(index) {
  stopSimulation();
  state.currentLessonIndex = index;
  const lesson = courseData.lessons[index];

  if (lesson.type === 'test') {
    openTest();
    renderSidebar();
    return;
  }

  if (lesson.type === 'reflection') {
    openReflection();
    renderSidebar();
    return;
  }

  // Video lesson
  lessonTitle.textContent = lesson.title;
  lessonDescription.textContent = lesson.description;
  placeholderTitle.textContent = lesson.title;

  // Show learning objectives for the overview lesson
  renderLessonContent(lesson);

  // Reset simulation
  state.simElapsed = 0;
  state.isPlaying = false;
  updateSimUI();
  videoPlaceholder.style.display = 'flex';
  simControls.style.display = 'flex';

  if (state.lessonProgress[lesson.id] === 'not_started') {
    state.lessonProgress[lesson.id] = 'started';
  }

  renderSidebar();
  updateProgressBadge();

  // Scroll active item into view
  const activeItem = sidebarContent.querySelector('.lesson-item.active');
  if (activeItem) {
    activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// === Render Lesson Content Below Video ===
function renderLessonContent(lesson) {
  // Remove old objectives section if present
  const existing = document.querySelector('.learning-objectives');
  if (existing) existing.remove();

  if (lesson.id === 'overview') {
    const objSection = document.createElement('div');
    objSection.className = 'learning-objectives';
    objSection.innerHTML = `
      <h3>Learning Objectives</h3>
      <p class="objectives-intro"><strong>In this course, we will:</strong></p>
      <ul>
        ${courseData.objectives.map(obj => `<li>${obj}</li>`).join('')}
      </ul>
    `;
    lessonInfo.after(objSection);
  }
}

// === Video Simulation ===
function startSimulation() {
  const lesson = courseData.lessons[state.currentLessonIndex];
  if (lesson.type !== 'video') return;

  state.isPlaying = true;
  videoPlaceholder.style.display = 'none';
  updatePlayPauseIcon();
  renderSidebar();

  state.simInterval = setInterval(() => {
    state.simElapsed += 1;
    if (state.simElapsed >= lesson.durationSec) {
      state.simElapsed = lesson.durationSec;
      completeCurrentLesson();
      stopSimulation();
      autoAdvance();
    }
    updateSimUI();
  }, 1000);
}

function stopSimulation() {
  state.isPlaying = false;
  if (state.simInterval) {
    clearInterval(state.simInterval);
    state.simInterval = null;
  }
  updatePlayPauseIcon();
  renderSidebar();
}

function toggleSimulation() {
  if (state.isPlaying) {
    stopSimulation();
  } else {
    startSimulation();
  }
}

function completeCurrentLesson() {
  const lesson = courseData.lessons[state.currentLessonIndex];
  state.lessonProgress[lesson.id] = 'completed';
  updateProgressBadge();
  renderSidebar();
}

function autoAdvance() {
  const nextIndex = state.currentLessonIndex + 1;
  if (nextIndex < courseData.lessons.length) {
    setTimeout(() => selectLesson(nextIndex), 800);
  }
}

function updateSimUI() {
  const lesson = courseData.lessons[state.currentLessonIndex];
  if (!lesson || lesson.type !== 'video') return;

  const pct = lesson.durationSec > 0 ? (state.simElapsed / lesson.durationSec) * 100 : 0;
  simProgressFill.style.width = pct + '%';
  simTime.textContent = `${formatTime(state.simElapsed)} / ${formatTime(lesson.durationSec)}`;
}

function updatePlayPauseIcon() {
  if (state.isPlaying) {
    playPauseIcon.outerHTML = '<rect id="playPauseIcon" x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/>';
  } else {
    // Re-query after outerHTML replacement
    const existing = document.getElementById('playPauseIcon');
    if (existing && existing.tagName !== 'polygon') {
      existing.outerHTML = '<polygon id="playPauseIcon" points="6,4 20,12 6,20" fill="currentColor"/>';
    }
  }
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// === Progress Bar Click (seek) ===
simProgressBar.addEventListener('click', (e) => {
  const lesson = courseData.lessons[state.currentLessonIndex];
  if (!lesson || lesson.type !== 'video') return;

  const rect = simProgressBar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  state.simElapsed = Math.floor(pct * lesson.durationSec);

  if (state.simElapsed >= lesson.durationSec) {
    state.simElapsed = lesson.durationSec;
    completeCurrentLesson();
    stopSimulation();
  }

  updateSimUI();
});

// === Play/Pause Button ===
simPlayPause.addEventListener('click', toggleSimulation);

// === Video Placeholder Click ===
videoPlaceholder.addEventListener('click', () => {
  startSimulation();
});

// === Sidebar Toggle ===
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.add('collapsed');
  sidebarOpenBtn.style.display = 'flex';
});

sidebarOpenBtn.addEventListener('click', () => {
  sidebar.classList.remove('collapsed');
  sidebarOpenBtn.style.display = 'none';
});

// === Progress Badge ===
function updateProgressBadge() {
  const total = courseData.lessons.length;
  const completed = Object.values(state.lessonProgress).filter(s => s === 'completed').length;
  const pct = Math.round((completed / total) * 100);
  progressBadge.textContent = `${pct}% Complete`;

  if (pct === 100) {
    progressBadge.style.borderColor = 'var(--success)';
    progressBadge.style.color = 'var(--success)';
    showCompletionBanner();
  }
}

function showCompletionBanner() {
  if (document.querySelector('.completion-banner')) return;
  const banner = document.createElement('div');
  banner.className = 'completion-banner';
  banner.innerHTML = `
    <h3>Course Complete!</h3>
    <p>Congratulations! You have successfully completed the CompTIA A+ Core 2: Communication & Professionalism course.</p>
  `;
  lessonInfo.after(banner);
}

// === Test Modal ===
function openTest() {
  testModal.style.display = 'flex';
  if (state.testSubmitted) {
    renderTestResults();
  } else {
    renderTestQuestions();
  }
  if (state.lessonProgress['test'] === 'not_started') {
    state.lessonProgress['test'] = 'started';
  }
}

function renderTestQuestions() {
  testBody.innerHTML = '';
  testQuestions.forEach((q, qi) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'test-question';
    qDiv.innerHTML = `
      <div class="question-text">${q.question}</div>
      <div class="question-options">
        ${q.options.map((opt, oi) => `
          <div class="question-option ${state.testAnswers[qi] === oi ? 'selected' : ''}" data-q="${qi}" data-o="${oi}">
            <div class="option-radio"></div>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
    `;
    testBody.appendChild(qDiv);
  });

  // Option click handlers
  testBody.querySelectorAll('.question-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const qi = parseInt(opt.dataset.q);
      const oi = parseInt(opt.dataset.o);
      state.testAnswers[qi] = oi;

      // Update selection UI
      opt.closest('.question-options').querySelectorAll('.question-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');

      // Show submit if all answered
      if (Object.keys(state.testAnswers).length === testQuestions.length) {
        submitTestBtn.style.display = 'inline-block';
      }
    });
  });

  submitTestBtn.style.display = Object.keys(state.testAnswers).length === testQuestions.length ? 'inline-block' : 'none';
}

function renderTestResults() {
  let correct = 0;
  testQuestions.forEach((q, qi) => {
    if (state.testAnswers[qi] === q.correct) correct++;
  });
  state.testScore = correct;
  const pct = Math.round((correct / testQuestions.length) * 100);
  const passed = pct >= 70;

  testBody.innerHTML = `
    <div class="test-result ${passed ? 'passed' : ''}">
      <div class="test-score">${pct}%</div>
      <div class="test-result-text">${passed ? 'Congratulations! You passed the assessment.' : 'You did not pass. Review the material and try again.'}<br>You answered ${correct} out of ${testQuestions.length} questions correctly.</div>
    </div>
  `;

  // Show detailed answers
  testQuestions.forEach((q, qi) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'test-question';
    qDiv.innerHTML = `
      <div class="question-text">${q.question}</div>
      <div class="question-options">
        ${q.options.map((opt, oi) => {
          let cls = '';
          if (oi === q.correct) cls = 'correct';
          else if (state.testAnswers[qi] === oi && oi !== q.correct) cls = 'incorrect';
          return `
            <div class="question-option ${cls} ${state.testAnswers[qi] === oi ? 'selected' : ''}">
              <div class="option-radio"></div>
              <span>${opt}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
    testBody.appendChild(qDiv);
  });

  submitTestBtn.style.display = 'none';

  if (passed) {
    state.lessonProgress['test'] = 'completed';
  }
  updateProgressBadge();
  renderSidebar();
}

submitTestBtn.addEventListener('click', () => {
  state.testSubmitted = true;
  renderTestResults();
});

testModalClose.addEventListener('click', () => {
  testModal.style.display = 'none';
});

testModal.addEventListener('click', (e) => {
  if (e.target === testModal) testModal.style.display = 'none';
});

// === Reflection Modal ===
function openReflection() {
  reflectionModal.style.display = 'flex';
  if (state.lessonProgress['reflection'] === 'not_started') {
    state.lessonProgress['reflection'] = 'started';
  }
  updateProgressBadge();
  renderSidebar();
}

submitReflectionBtn.addEventListener('click', () => {
  const r1 = document.getElementById('reflect1').value.trim();
  const r2 = document.getElementById('reflect2').value.trim();
  const r3 = document.getElementById('reflect3').value.trim();

  if (!r1 || !r2 || !r3) {
    alert('Please complete all reflection questions before submitting.');
    return;
  }

  state.reflectionSubmitted = true;
  state.lessonProgress['reflection'] = 'completed';
  reflectionModal.style.display = 'none';
  updateProgressBadge();
  renderSidebar();
});

reflectionModalClose.addEventListener('click', () => {
  reflectionModal.style.display = 'none';
});

reflectionModal.addEventListener('click', (e) => {
  if (e.target === reflectionModal) reflectionModal.style.display = 'none';
});

// === Keyboard Shortcuts ===
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;

  if (e.code === 'Space') {
    e.preventDefault();
    const lesson = courseData.lessons[state.currentLessonIndex];
    if (lesson.type === 'video') {
      toggleSimulation();
    }
  }

  if (e.code === 'ArrowRight' && e.shiftKey) {
    const next = state.currentLessonIndex + 1;
    if (next < courseData.lessons.length) selectLesson(next);
  }

  if (e.code === 'ArrowLeft' && e.shiftKey) {
    const prev = state.currentLessonIndex - 1;
    if (prev >= 0) selectLesson(prev);
  }

  if (e.code === 'Escape') {
    testModal.style.display = 'none';
    reflectionModal.style.display = 'none';
  }
});

// === Initialize ===
function init() {
  renderSidebar();
  selectLesson(0);
  updateProgressBadge();
}

init();
