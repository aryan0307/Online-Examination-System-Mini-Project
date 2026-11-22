
var checkbox = document.getElementById("read-confirm");
var startButton = document.querySelector(".btn-start");

startButton.disabled = true;

checkbox.addEventListener("change", function() {

    if (checkbox.checked == true) {
        startButton.disabled = false;
    } 
    else {
        startButton.disabled = true;
    }

});

startButton.addEventListener("click", function() {

    if (checkbox.checked == true) {

        var choice = confirm("Are you ready to start the examination?");

        if (choice == true) {
            alert("Your examination is starting!");
            window.location.href = "exam.html";
        }

    } 
    else {
        alert("Please read and accept the instructions first.");
    }

});
