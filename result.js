
document.addEventListener("DOMContentLoaded", function () {
    var result = JSON.parse(localStorage.getItem("examResult"));

    if (!result) {
        document.querySelector(".welcome-content p").textContent =
            "No exam result found. Please complete an examination first.";
        return;
    }

    var total = result.totalMarks || 0;
    var score = result.score || 0;
    var correct = result.correct || 0;
    var wrong = result.wrong || 0;
    var skipped = result.skipped || 0;

    var percentage = total > 0
        ? Math.round((score / total) * 100)
        : 0;

    var passed = percentage >= 40;

    // Feature 1: Dynamically update the result banner and score
    document.querySelector(".welcome-content h1").textContent =
        "Well done, " + (result.studentName || "Student") + "!";

    document.querySelector(".welcome-content p").textContent =
        "You have completed the " + result.examName + " exam. Here is your performance.";

    document.querySelector(".score-box strong").textContent = score;
    document.querySelector(".score-box span:not(.status-pill)").textContent =
        "out of " + total;

    // Feature 2: Update correct, wrong, skipped and percentage statistics
    var stats = document.querySelectorAll(".stat-value");

    stats[0].textContent = correct;
    stats[1].textContent = wrong;
    stats[2].textContent = skipped;
    stats[3].textContent = percentage + "%";

    // Feature 3: Automatically show pass/fail status
    var status = document.querySelector(".status-pill");

    status.textContent = passed ? "Passed" : "Failed";
    status.className = passed
        ? "status-pill status-passed"
        : "status-pill status-failed";

    // Feature 4: Update exam details and progress bar
    var details = document.querySelectorAll(".info-item strong");

    details[0].textContent = result.examName;
    details[1].textContent = result.date || new Date().toLocaleDateString();
    details[2].textContent = (result.duration || 30) + " Minutes";
    details[3].textContent = result.timeTaken
        ? result.timeTaken + " Minutes"
        : "Not recorded";
    details[4].textContent = total;
    details[5].textContent = "40%";

    var scoreLabels = document.querySelectorAll(".score-bar-labels span");

    scoreLabels[0].innerHTML =
        "Your score: <strong>" + score + " / " + total + "</strong>";

    scoreLabels[1].textContent = percentage + "%";

    var progress = document.querySelector(".progress-bar-fill");
    progress.style.width = percentage + "%";

    // Feature 5: Add a print result button
    var actions = document.querySelector(".result-actions");
    var printButton = document.createElement("button");

    printButton.textContent = "Print Result";
    printButton.className = "btn btn-secondary";
    printButton.type = "button";

    printButton.addEventListener("click", function () {
        window.print();
    });

    actions.appendChild(printButton);
});
