document.addEventListener("DOMContentLoaded", function () {
    showGreeting();
    showCountdowns();
    setupSearch();
});


// ---------- 1. PERSONALIZED GREETING ----------

function showGreeting() {
    var greetingElement = document.getElementById("greeting");
    var hour = new Date().getHours(); // 0 - 23
    var message;

    if (hour < 12) {
        message = "Good Morning";
    } else if (hour < 18) {
        message = "Good Afternoon";
    } else {
        message = "Good Evening";
    }

    greetingElement.textContent = message;
}


// ---------- 2. EXAM COUNTDOWN ----------

function showCountdowns() {
    var examCards = document.querySelectorAll(".exam-card");

    // Today's date with the time set to midnight,
    // so we compare whole days only
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var millisecondsPerDay = 1000 * 60 * 60 * 24;

    examCards.forEach(function (card) {
        // data-date looks like "2026-09-21"
        var parts = card.dataset.date.split("-");
        var year = Number(parts[0]);
        var month = Number(parts[1]) - 1; // JavaScript months start at 0
        var day = Number(parts[2]);

        var examDate = new Date(year, month, day);
        var daysLeft = Math.round((examDate - today) / millisecondsPerDay);

        var countdown = card.querySelector(".countdown");

        if (daysLeft < 0) {
            countdown.textContent = "⏳ Exam date has passed";
            countdown.classList.add("countdown-passed");
        } else if (daysLeft === 0) {
            countdown.textContent = "⏳ Exam is today!";
        } else if (daysLeft === 1) {
            countdown.textContent = "⏳ 1 day remaining";
        } else {
            countdown.textContent = "⏳ " + daysLeft + " days remaining";
        }
    });
}


// ---------- 3. SEARCH EXAMS ----------

function setupSearch() {
    var searchInput = document.getElementById("exam-search");
    var noResults = document.getElementById("no-results");
    var examCards = document.querySelectorAll(".exam-card");

    searchInput.addEventListener("input", function () {
        // Lowercase + trim so the search ignores capital letters and extra spaces
        var searchText = searchInput.value.toLowerCase().trim();
        var visibleCount = 0;

        examCards.forEach(function (card) {
            var examName = card.querySelector("h3").textContent.toLowerCase();
            var subject = card.querySelector(".subject-pill").textContent.toLowerCase();

            // An empty search text matches everything, so all exams show again
            if (examName.includes(searchText) || subject.includes(searchText)) {
                card.style.display = ""; // go back to the normal CSS display
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        // Show the "No exams found" message only when nothing matches
        noResults.hidden = visibleCount > 0;
    });
}