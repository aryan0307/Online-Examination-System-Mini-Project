# ExamSphere

ExamSphere is a web-based exam platform built with HTML and CSS. Students register, log in, pick an exam from the dashboard, read the instructions, take a 30-question MCQ test and see their result.

## Page flow

```
index.html (Login) <-> register.html
        |
        v
dashboard.html
   |-- Start Exam --> <SUBJECT>_Exam_HTML_CSS/instructions.html
   |                        |-- Start Exam --> exam1.html ... exam30.html
   |                                                  |-- Submit Exam --> result.html
   |-- View Result (past results) --> <SUBJECT>_Exam_HTML_CSS/result.html
   ^                                                  |
   +---------------- Back to Dashboard ---------------+
```

`<SUBJECT>` is one of `DBMS`, `OS`, `CN`.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html`, `login.css` | Login page |
| `register.html`, `register.css` | Student registration page |
| `dashboard.html`, `dashboard.css` | Student dashboard (available exams and past results) |
| `instructions.css` | Shared styles for the instructions pages |
| `result.css` | Extra styles for the result pages (used together with `dashboard.css`) |
| `phto.png` | Illustration used on the login page |
| `DBMS_Exam_HTML_CSS/` | DBMS exam: `instructions.html`, `exam1-30.html`, `result.html`, `style.css` |
| `OS_Exam_HTML_CSS/` | Operating Systems exam (same files) |
| `CN_Exam_HTML_CSS/` | Computer Networks exam (same files) |

## Running it

No build step is needed. Open `index.html` in a browser (or use the VS Code Live Server extension).

## Notes

- The project is HTML and CSS only, so answers are not saved or scored and the result pages show sample data.
- The login and registration forms only navigate to the next page; there is no real authentication yet.
