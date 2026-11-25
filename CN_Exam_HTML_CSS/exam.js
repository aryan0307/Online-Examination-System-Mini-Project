/* =========================================================
   Exam engine - one page, no anchor tags, no extra HTML files.
   Reads the questions from questions.js (window.EXAM_DATA) and
   switches questions by re-rendering the same page layout.
   ========================================================= */
var Exam = (function () {
    "use strict";

    var data      = window.EXAM_DATA;
    var questions = data.questions;
    var TOTAL     = questions.length;
    var LETTERS   = ["A", "B", "C", "D"];
    var STORE_KEY = data.subject + "_exam_answers";

    var app     = document.getElementById("app");
    var current = 0;                 /* index of the question being shown */
    var answers = loadAnswers();     /* { questionNumber: "A".."D" } */

    /* ---------- storage ---------- */
    function loadAnswers() {
        try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
        catch (e) { return {}; }
    }
    function saveAnswers() {
        try { localStorage.setItem(STORE_KEY, JSON.stringify(answers)); } catch (e) {}
    }

    /* ---------- templates (same markup/classes as the original pages) ---------- */
    function headerHTML(withUser) {
        return '<header class="header">' +
                 '<div class="logo">Examly</div>' +
                 (withUser
                    ? '<div class="user">' +
                        '<div class="avatar">U</div>' +
                        '<div><strong>User</strong><br><small>Student ID: #2026-CS</small></div>' +
                      '</div>'
                    : '') +
               '</header>';
    }

    function optionsHTML(q, number) {
        return q.options.map(function (text, i) {
            var letter  = LETTERS[i];
            var checked = answers[number] === letter ? " checked" : "";
            return '<label class="option"><input type="radio" name="answer" value="' + letter + '"' +
                   checked + '> ' + letter + '. ' + text + '</label>';
        }).join("\n");
    }

    function navigatorNumbersHTML() {
        return questions.map(function (_, i) {
            return '<span class="number' + (i === current ? " current" : " ") +
                   '" role="button" tabindex="0" data-goto="' + i + '">' + (i + 1) + '</span>';
        }).join("\n");
    }

    function buttonsHTML() {
        var isFirst = current === 0;
        var isLast  = current === TOTAL - 1;

        var left = '<span class="btn" role="button" tabindex="0" data-goto="' +
                   (isFirst ? 0 : current - 1) + '">&larr; ' + (isFirst ? "Dashboard" : "Previous") + '</span>';

        var right = isLast
            ? '<span class="btn" role="button" tabindex="0" data-action="submit">Submit Exam &rarr;</span>'
            : '<span class="btn" role="button" tabindex="0" data-goto="' + (current + 1) + '">Next &rarr;</span>';

        return left + "\n" + right;
    }

    function examViewHTML() {
        var number = current + 1;
        var q = questions[current];

        return headerHTML(true) +
        '<section class="exam-banner">' +
            '<h1>' + data.heading + '</h1>' +
            '<div class="exam-info">Total Questions: ' + TOTAL + ' &nbsp; | &nbsp; Time: ' + data.minutes + ' Minutes</div>' +
        '</section>' +
        '<main class="container">' +
            '<section class="question-card">' +
                '<div class="question-number">Question ' + number + ' of ' + TOTAL + '</div>' +
                '<h2 class="question">' + q.question + '</h2>' +
                '<form>' + optionsHTML(q, number) + '</form>' +
                '<div class="buttons">' + buttonsHTML() + '</div>' +
            '</section>' +
            '<aside class="navigator">' +
                '<h2>Question Navigator</h2>' +
                '<div class="numbers">' + navigatorNumbersHTML() + '</div>' +
                '<div class="legend">' +
                    '<div><span class="box current-box"></span> Current Question</div>' +
                    '<div><span class="box empty-box"></span> Not Answered</div>' +
                '</div>' +
            '</aside>' +
        '</main>';
    }

    function resultViewHTML() {
        var right = 0, wrong = 0, skipped = 0;
        questions.forEach(function (q, i) {
            var given = answers[i + 1];
            if (!given) skipped++;
            else if (given === q.answer) right++;
            else wrong++;
        });

        return headerHTML(false) +
        '<section class="exam-banner">' +
            '<h1>Exam Submitted</h1>' +
            '<p>Your ' + data.resultName + ' examination has been submitted.</p>' +
            '<p style="margin-top:10px;">Score: ' + right + ' / ' + TOTAL +
              '  (Correct: ' + right + ', Wrong: ' + wrong + ', Not answered: ' + skipped + ')</p>' +
        '</section>';
    }

    /* ---------- views ---------- */
    function showQuestion(index) {
        current = Math.max(0, Math.min(TOTAL - 1, index));
        app.innerHTML = examViewHTML();
        document.title = data.subject + " Exam - Question " + (current + 1);
        window.scrollTo(0, 0);
    }

    function submitExam() {
    var correct = 0;
    var wrong = 0;
    var skipped = 0;

    questions.forEach(function (q, i) {
        var given = answers[i + 1];

        if (!given) {
            skipped++;
        } else if (given === q.answer) {
            correct++;
        } else {
            wrong++;
        }
    });

    var result = {
        studentName: JSON.parse(localStorage.getItem("currentUser") || "{}").name || "Student",
        examName: data.resultName,
        score: correct,
        totalMarks: TOTAL,
        correct: correct,
        wrong: wrong,
        skipped: skipped,
        date: new Date().toLocaleDateString(),
        duration: data.minutes,
        timeTaken: "Not recorded"
    };

    localStorage.setItem("examResult", JSON.stringify(result));

    window.location.href = "result.html";
}

    /* ---------- events (delegated, so they survive re-rendering) ---------- */
    function activate(el) {
        if (el.hasAttribute("data-goto")) {
            showQuestion(parseInt(el.getAttribute("data-goto"), 10));
        } else if (el.getAttribute("data-action") === "submit") {
            submitExam();
        }
    }

    app.addEventListener("click", function (e) {
        var el = e.target.closest("[data-goto], [data-action]");
        if (el) activate(el);
    });

    app.addEventListener("keydown", function (e) {
        if (e.key !== "Enter" && e.key !== " ") return;
        var el = e.target.closest("[data-goto], [data-action]");
        if (el) { e.preventDefault(); activate(el); }
    });

    app.addEventListener("change", function (e) {
        if (e.target.name === "answer") {
            answers[current + 1] = e.target.value;
            saveAnswers();
        }
    });

    /* ---------- start ---------- */
    showQuestion(0);

    return { goTo: showQuestion, submit: submitExam };
})();
