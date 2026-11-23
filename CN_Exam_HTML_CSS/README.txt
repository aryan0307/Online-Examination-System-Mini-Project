COMPUTER NETWORKS ONLINE EXAM - SINGLE PAGE (HTML + CSS + JAVASCRIPT)

Files:
- index.html    = the only page. Open this in a browser.
- style.css     = common design (unchanged)
- questions.js  = all 30 questions, options and the correct answer of each
- exam.js       = JavaScript that switches questions on the same page

How it works:
1. exam.js reads questions.js and draws the question, options and navigator.
2. Next / Previous / question numbers change the question with JavaScript (no anchor tags, no extra pages).
3. The selected answer is saved in the browser (localStorage) and restored when you return to a question.
4. Submit Exam shows the result view with the score.
