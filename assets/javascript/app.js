//TIMER 

var number = 60;
var intervalId;

$("document").ready(function () {

    
    $("#start").on("click", run);


    function run() {
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