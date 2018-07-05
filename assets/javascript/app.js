//TIMER 

var number = 60;
var intervalId;
var button = document.getElementById("start");

$("document").ready(function () {


    
button.onclick = function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
run();
    function decrement() {
        number--;

        $("#timer").html("<h2>" + number + "</h2>");

        if (number === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);

        
    }
})