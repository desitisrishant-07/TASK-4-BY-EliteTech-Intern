
const courses = [
    {
        id: 1,
        title: "Web Development",
        category: "Development",
        icon: "💻",
        color: "#e0e7ff",
        description:
            "Learn HTML, CSS and JavaScript from the basics to advanced concepts.",
        lessons: [
            {
                title: "Introduction to Web Development",
                description:
                    "Understand how websites work and learn the fundamentals of web development.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "What language is used to structure a web page?",
                        options: [
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "Python"
                        ],
                        answer: 0
                    },
                    {
                        question:
                            "What does CSS primarily control?",
                        options: [
                            "Database",
                            "Web page styling",
                            "Server hardware",
                            "Authentication"
                        ],
                        answer: 1
                    }
                ]
            },

            {
                title: "HTML Fundamentals",
                description:
                    "Learn HTML elements, attributes, headings, links, images and forms.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "What does HTML stand for?",
                        options: [
                            "Hyper Text Markup Language",
                            "High Tech Modern Language",
                            "Hyperlink Text Management Language",
                            "Home Tool Markup Language"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                title: "CSS Fundamentals",
                description:
                    "Learn how to create beautiful layouts using CSS.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "Which CSS property changes text color?",
                        options: [
                            "font-size",
                            "background",
                            "color",
                            "text-style"
                        ],
                        answer: 2
                    }
                ]
            },

            {
                title: "JavaScript Basics",
                description:
                    "Learn variables, functions, events and DOM manipulation.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "Which keyword declares a JavaScript variable?",
                        options: [
                            "variable",
                            "let",
                            "define",
                            "string"
                        ],
                        answer: 1
                    }
                ]
            }
        ]
    },

    {
        id: 2,
        title: "Data Science",
        category: "Data",
        icon: "📊",
        color: "#dcfce7",
        description:
            "Explore data analysis, visualization and the fundamentals of data science.",
        lessons: [
            {
                title: "What is Data Science?",
                description:
                    "Discover the role of data science and how organizations use data.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "What is data science mainly concerned with?",
                        options: [
                            "Using data to find insights",
                            "Building houses",
                            "Designing clothes",
                            "Playing games"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                title: "Data Collection",
                description:
                    "Learn the different ways data can be collected and prepared.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "Which is an example of structured data?",
                        options: [
                            "Database table",
                            "Audio recording",
                            "Video",
                            "Handwritten note"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                title: "Data Visualization",
                description:
                    "Learn how charts and graphs communicate information.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "Which chart is commonly used to show trends over time?",
                        options: [
                            "Line chart",
                            "Pie chart",
                            "Map only",
                            "Icon"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },

    {
        id: 3,
        title: "UI/UX Design",
        category: "Design",
        icon: "🎨",
        color: "#fce7f3",
        description:
            "Learn user interface design, user experience principles and design thinking.",
        lessons: [
            {
                title: "Introduction to UI/UX",
                description:
                    "Understand the difference between UI and UX design.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "What does UX stand for?",
                        options: [
                            "User Experience",
                            "Universal Extension",
                            "User Example",
                            "Utility Experience"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                title: "Design Principles",
                description:
                    "Learn visual hierarchy, contrast, spacing and consistency.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "Why is visual hierarchy important?",
                        options: [
                            "It helps users understand content",
                            "It removes all images",
                            "It makes websites slower",
                            "It hides navigation"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },

    {
        id: 4,
        title: "Digital Marketing",
        category: "Marketing",
        icon: "📱",
        color: "#fef3c7",
        description:
            "Learn SEO, social media marketing, content strategy and digital campaigns.",
        lessons: [
            {
                title: "Digital Marketing Basics",
                description:
                    "Learn the fundamentals of modern digital marketing.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "What does SEO stand for?",
                        options: [
                            "Search Engine Optimization",
                            "Social Engagement Operation",
                            "Search Email Organization",
                            "System Engine Output"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                title: "Social Media Marketing",
                description:
                    "Understand how brands use social media to connect with audiences.",
                video:
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                quiz: [
                    {
                        question:
                            "Which is a social media platform?",
                        options: [
                            "Instagram",
                            "HTML",
                            "CSS",
                            "SQL"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    }
];


/* =====================================================
   APPLICATION STATE
===================================================== */

let currentCourse = null;
let currentLesson = 0;
let isRegisterMode = false;

let progress =
    JSON.parse(localStorage.getItem("learnhub_progress")) || {};

let users =
    JSON.parse(localStorage.getItem("learnhub_users")) || [];

let currentUser =
    JSON.parse(localStorage.getItem("learnhub_current_user")) || null;


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    renderCourses();

    updateAllProgress();

    updateAuthenticationUI();

    setupSearch();

    setupTheme();

});


/* =====================================================
   COURSE RENDERING
===================================================== */

function renderCourses(filter = "") {

    const grid = document.getElementById("courseGrid");

    const filteredCourses = courses.filter(course => {

        const search =
            filter.toLowerCase();

        return (
            course.title
                .toLowerCase()
                .includes(search) ||

            course.category
                .toLowerCase()
                .includes(search)
        );
    });

    if (filteredCourses.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column: 1/-1;
                text-align:center;
                padding:50px;
            ">
                <h3>No courses found</h3>
                <p>Try another search term.</p>
            </div>
        `;

        return;
    }

    grid.innerHTML = filteredCourses.map(course => {

        const percentage =
            getCourseProgress(course.id);

        return `
            <article class="course-card">

                <div
                    class="course-image"
                    style="background:${course.color}"
                >
                    ${course.icon}
                </div>

                <div class="course-body">

                    <span class="course-category">
                        ${course.category}
                    </span>

                    <h3>${course.title}</h3>

                    <p>
                        ${course.description}
                    </p>

                    <div class="course-meta">
                        <span>🎥 ${course.lessons.length} Lessons</span>
                        <span>📝 Quiz</span>
                    </div>

                    <div class="course-progress">

                        <div class="progress-label">
                            <span>Progress</span>
                            <strong>${percentage}%</strong>
                        </div>

                        <div class="progress-bar">
                            <div style="width:${percentage}%"></div>
                        </div>

                    </div>

                    <button
                        class="primary-btn"
                        style="width:100%"
                        onclick="openCourse(${course.id})"
                    >
                        ${percentage > 0 ? "Continue Learning" : "Start Learning"}
                    </button>

                </div>
            </article>
        `;
    }).join("");
}


/* =====================================================
   OPEN COURSE
===================================================== */

function openCourse(courseId) {

    currentCourse =
        courses.find(course => course.id === courseId);

    currentLesson = 0;

    if (!currentCourse) return;

    document.getElementById("courses")
        .classList.add("hidden");

    document.getElementById("learningArea")
        .classList.remove("hidden");

    document.getElementById("currentCourseTitle")
        .textContent = currentCourse.title;

    document.getElementById("currentCourseCategory")
        .textContent = currentCourse.category;

    renderLessonList();

    loadLesson(0);

    document.getElementById("learningArea")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =====================================================
   CLOSE COURSE
===================================================== */

function closeCourse() {

    document.getElementById("learningArea")
        .classList.add("hidden");

    document.getElementById("courses")
        .classList.remove("hidden");

    renderCourses();

    updateAllProgress();
}


/* =====================================================
   LESSON LIST
===================================================== */

function renderLessonList() {

    const list =
        document.getElementById("lessonList");

    const completedLessons =
        getCompletedLessons(currentCourse.id);

    list.innerHTML =
        currentCourse.lessons.map((lesson, index) => {

            const completed =
                completedLessons.includes(index);

            return `
                <div
                    class="
                        lesson-item
                        ${index === currentLesson ? "active" : ""}
                        ${completed ? "completed" : ""}
                    "
                    onclick="loadLesson(${index})"
                >

                    <div class="lesson-icon">
                        ${completed ? "✓" : index + 1}
                    </div>

                    <div class="lesson-item-info">

                        <strong>
                            ${lesson.title}
                        </strong>

                        <small>
                            Lesson ${index + 1}
                        </small>

                    </div>

                </div>
            `;

        }).join("");
}


/* =====================================================
   LOAD LESSON
===================================================== */

function loadLesson(index) {

    if (!currentCourse) return;

    currentLesson = index;

    const lesson =
        currentCourse.lessons[index];

    const video =
        document.getElementById("lessonVideo");

    video.src = lesson.video;

    video.load();

    document.getElementById("lessonNumber")
        .textContent =
        `Lesson ${index + 1} of ${currentCourse.lessons.length}`;

    document.getElementById("lessonTitle")
        .textContent = lesson.title;

    document.getElementById("lessonDescription")
        .textContent = lesson.description;

    const completed =
        getCompletedLessons(currentCourse.id)
            .includes(index);

    const button =
        document.getElementById("completeLessonBtn");

    if (completed) {

        button.textContent =
            "✓ Completed";

        button.classList.add("completed");

    } else {

        button.textContent =
            "✓ Mark Complete";

        button.classList.remove("completed");
    }

    renderLessonList();

    renderQuiz(lesson);

    updateCourseProgress();

    window.scrollTo({
        top: document.getElementById("learningArea").offsetTop - 80,
        behavior: "smooth"
    });
}


/* =====================================================
   COMPLETE LESSON
===================================================== */

document
    .getElementById("completeLessonBtn")
    .addEventListener("click", () => {

        if (!currentCourse) return;

        const completed =
            getCompletedLessons(currentCourse.id);

        if (!completed.includes(currentLesson)) {

            completed.push(currentLesson);

            saveCompletedLessons(
                currentCourse.id,
                completed
            );

            showToast("Lesson completed! 🎉");

            renderLessonList();

            updateCourseProgress();

            updateAllProgress();

        } else {

            showToast("You already completed this lesson.");
        }
    });


/* =====================================================
   PROGRESS STORAGE
===================================================== */

function getCompletedLessons(courseId) {

    return progress[courseId]?.completed || [];
}


function saveCompletedLessons(courseId, lessons) {

    if (!progress[courseId]) {

        progress[courseId] = {
            completed: [],
            quizScores: {}
        };
    }

    progress[courseId].completed =
        lessons;

    localStorage.setItem(
        "learnhub_progress",
        JSON.stringify(progress)
    );
}


/* =====================================================
   COURSE PROGRESS
===================================================== */

function getCourseProgress(courseId) {

    const course =
        courses.find(c => c.id === courseId);

    if (!course) return 0;

    const completed =
        getCompletedLessons(courseId);

    return Math.round(
        (completed.length / course.lessons.length) * 100
    );
}


function updateCourseProgress() {

    if (!currentCourse) return;

    const percentage =
        getCourseProgress(currentCourse.id);

    document.getElementById("courseProgressText")
        .textContent = `${percentage}%`;

    document.getElementById("courseProgressBar")
        .style.width = `${percentage}%`;
}


/* =====================================================
   OVERALL PROGRESS
===================================================== */

function calculateOverallProgress() {

    let totalLessons = 0;
    let completedLessons = 0;

    courses.forEach(course => {

        totalLessons += course.lessons.length;

        completedLessons +=
            getCompletedLessons(course.id).length;
    });

    if (totalLessons === 0) return 0;

    return Math.round(
        (completedLessons / totalLessons) * 100
    );
}


function updateAllProgress() {

    const percentage =
        calculateOverallProgress();

    document.getElementById("heroProgress")
        .textContent = `${percentage}%`;

    document.getElementById("heroProgressBar")
        .style.width = `${percentage}%`;

    document.getElementById("overallProgressText")
        .textContent = `${percentage}%`;

    document.getElementById("overallProgressBar")
        .style.width = `${percentage}%`;

    document.getElementById("overallProgressCircle")
        .textContent = `${percentage}%`;

    updateProgressCircle(percentage);

    const completedCourses =
        courses.filter(
            course =>
                getCourseProgress(course.id) === 100
        ).length;

    document.getElementById("completedCount")
        .textContent = completedCourses;

    renderProgressCourses();
}


function updateProgressCircle(percentage) {

    const circle =
        document.querySelector(".progress-circle");

    if (!circle) return;

    const degrees =
        percentage * 3.6;

    circle.style.background =
        `conic-gradient(
            var(--primary) ${degrees}deg,
            #e2e8f0 ${degrees}deg
        )`;
}


/* =====================================================
   PROGRESS COURSE CARDS
===================================================== */

function renderProgressCourses() {

    const container =
        document.getElementById("progressCourses");

    container.innerHTML =
        courses.map(course => {

            const percentage =
                getCourseProgress(course.id);

            return `
                <div class="progress-course">

                    <h3>
                        ${course.icon}
                        ${course.title}
                    </h3>

                    <div class="progress-label">
                        <span>Completion</span>
                        <strong>${percentage}%</strong>
                    </div>

                    <div class="progress-bar">
                        <div style="width:${percentage}%"></div>
                    </div>

                    <button
                        class="secondary-btn"
                        style="width:100%;margin-top:15px"
                        onclick="openCourse(${course.id})"
                    >
                        Open Course
                    </button>

                </div>
            `;

        }).join("");
}


/* =====================================================
   QUIZ
===================================================== */

function renderQuiz(lesson) {

    const quizBox =
        document.getElementById("quizBox");

    const quizContent =
        document.getElementById("quizContent");

    if (!lesson.quiz || lesson.quiz.length === 0) {

        quizBox.classList.add("hidden");

        return;
    }

    quizBox.classList.remove("hidden");

    document.getElementById("quizResult")
        .innerHTML = "";

    quizContent.innerHTML =
        lesson.quiz.map((question, qIndex) => {

            return `
                <div class="question">

                    <h4>
                        ${qIndex + 1}.
                        ${question.question}
                    </h4>

                    ${question.options.map(
                        (option, optionIndex) => {

                            return `
                                <label class="option">

                                    <input
                                        type="radio"
                                        name="question-${qIndex}"
                                        value="${optionIndex}"
                                    >

                                    ${option}

                                </label>
                            `;
                        }
                    ).join("")}

                </div>
            `;

        }).join("");
}


/* =====================================================
   SUBMIT QUIZ
===================================================== */

function submitQuiz() {

    if (!currentCourse) return;

    const lesson =
        currentCourse.lessons[currentLesson];

    let score = 0;

    let answered = 0;

    lesson.quiz.forEach((question, index) => {

        const selected =
            document.querySelector(
                `input[name="question-${index}"]:checked`
            );

        if (selected) {

            answered++;

            if (
                Number(selected.value) ===
                question.answer
            ) {

                score++;
            }
        }
    });

    if (answered < lesson.quiz.length) {

        showToast("Please answer all questions.");

        return;
    }

    const percentage =
        Math.round(
            (score / lesson.quiz.length) * 100
        );

    if (!progress[currentCourse.id]) {

        progress[currentCourse.id] = {
            completed: [],
            quizScores: {}
        };
    }

    progress[currentCourse.id].quizScores[currentLesson] =
        percentage;

    localStorage.setItem(
        "learnhub_progress",
        JSON.stringify(progress)
    );

    const result =
        document.getElementById("quizResult");

    if (percentage >= 70) {

        result.innerHTML = `
            <div style="color:#059669">
                🎉 Great job! You scored
                ${score}/${lesson.quiz.length}
                (${percentage}%).
            </div>
        `;

        showToast("Quiz passed! 🎉");

    } else {

        result.innerHTML = `
            <div style="color:#dc2626">
                Keep practicing! You scored
                ${score}/${lesson.quiz.length}
                (${percentage}%).
                Try again.
            </div>
        `;
    }
}


/* =====================================================
   SEARCH
===================================================== */

function setupSearch() {

    const input =
        document.getElementById("searchInput");

    input.addEventListener("input", event => {

        renderCourses(event.target.value);
    });
}


/* =====================================================
   AUTHENTICATION
===================================================== */

document
    .getElementById("loginBtn")
    .addEventListener("click", () => {

        document
            .getElementById("loginModal")
            .classList.remove("hidden");
    });


function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.add("hidden");

    document
        .getElementById("authMessage")
        .innerHTML = "";
}


function toggleAuthMode() {

    isRegisterMode =
        !isRegisterMode;

    const title =
        document.getElementById("authTitle");

    const subtitle =
        document.getElementById("authSubtitle");

    const button =
        document.getElementById("authButtonText");

    const nameField =
        document.getElementById("nameField");

    const switchText =
        document.getElementById("switchText");

    const switchButton =
        document.getElementById("switchAuthBtn");

    if (isRegisterMode) {

        title.textContent =
            "Create Account";

        subtitle.textContent =
            "Join LearnHub and start learning.";

        button.textContent =
            "Register";

        nameField.classList.remove("hidden");

        switchText.textContent =
            "Already have an account?";

        switchButton.textContent =
            "Login";

    } else {

        title.textContent =
            "Welcome Back!";

        subtitle.textContent =
            "Login to continue your learning journey.";

        button.textContent =
            "Login";

        nameField.classList.add("hidden");

        switchText.textContent =
            "Don't have an account?";

        switchButton.textContent =
            "Register";
    }
}


document
    .getElementById("authForm")
    .addEventListener("submit", event => {

        event.preventDefault();

        const email =
            document.getElementById("emailInput")
                .value.trim()
                .toLowerCase();

        const password =
            document.getElementById("passwordInput")
                .value;

        const name =
            document.getElementById("nameInput")
                .value.trim();

        const message =
            document.getElementById("authMessage");

        if (isRegisterMode) {

            if (!name) {

                message.innerHTML =
                    `<p style="color:#dc2626">
                        Please enter your name.
                    </p>`;

                return;
            }

            const existingUser =
                users.find(
                    user => user.email === email
                );

            if (existingUser) {

                message.innerHTML =
                    `<p style="color:#dc2626">
                        An account with this email already exists.
                    </p>`;

                return;
            }

            const newUser = {
                name,
                email,
                password
            };

            users.push(newUser);

            localStorage.setItem(
                "learnhub_users",
                JSON.stringify(users)
            );

            currentUser = newUser;

            localStorage.setItem(
                "learnhub_current_user",
                JSON.stringify(currentUser)
            );

            showToast("Account created successfully! 🎉");

            closeLogin();

            updateAuthenticationUI();

        } else {

            const user =
                users.find(
                    user =>
                        user.email === email &&
                        user.password === password
                );

            if (!user) {

                message.innerHTML =
                    `<p style="color:#dc2626">
                        Invalid email or password.
                    </p>`;

                return;
            }

            currentUser = user;

            localStorage.setItem(
                "learnhub_current_user",
                JSON.stringify(currentUser)
            );

            showToast(
                `Welcome back, ${user.name}! 👋`
            );

            closeLogin();

            updateAuthenticationUI();
        }
    });


/* =====================================================
   AUTH UI
===================================================== */

function updateAuthenticationUI() {

    const loginBtn =
        document.getElementById("loginBtn");

    const logoutBtn =
        document.getElementById("logoutBtn");

    if (currentUser) {

        loginBtn.classList.add("hidden");

        logoutBtn.classList.remove("hidden");

    } else {

        loginBtn.classList.remove("hidden");

        logoutBtn.classList.add("hidden");
    }
}


document
    .getElementById("logoutBtn")
    .addEventListener("click", () => {

        currentUser = null;

        localStorage.removeItem(
            "learnhub_current_user"
        );

        updateAuthenticationUI();

        showToast("You have been logged out.");
    });


/* =====================================================
   THEME
===================================================== */

function setupTheme() {

    const savedTheme =
        localStorage.getItem("learnhub_theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        document.getElementById("themeBtn")
            .textContent = "☀️";
    }
}


document
    .getElementById("themeBtn")
    .addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "learnhub_theme",
            dark ? "dark" : "light"
        );

        document.getElementById("themeBtn")
            .textContent =
            dark ? "☀️" : "🌙";
    });


/* =====================================================
   NAVIGATION
===================================================== */

function scrollToCourses() {

    document.getElementById("courses")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function showProgress() {

    document.getElementById("progress")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");

    toastMessage.textContent =
        message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}


/* =====================================================
   KEYBOARD / MODAL
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeLogin();
    }
});