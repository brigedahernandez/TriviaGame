//TIMER and buttons
var number = 60;
var intervalId;
var startbutton = document.getElementById("start");
var submitbutton = document.getElementById("submit");
var correctanswers = ["Teal","fightclub"]

//when the page loads, questions and results wil be hidden.
$("document").ready(function () {
    $("#questions").hide();
    $("#results").hide();
    $("#submitanswers").hide();

//when the start button is clicked,the questions and submit button will appear
    startbutton.onclick = function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#questions").show();
        $("#submitanswers").show();
    }
//If I take this out, the timer doesn't work... 
    submitanswers.onclick = function stop() {
        $("#results").show();
        $("#questions").hide();
    }
    
//function to subtract from and stop timer
    function decrement() {
        number--;

        $("#timer").html("<h2>" + number + "</h2>");

        if (number === 0) {
            stop();
            clearInterval(intervalId);
        }
    }
    //When submit button is pressed, it will loop through the array and compare user answers with correct answers. 
function showResults (){

    var userAnswer = "";
    var numCorrect = 0;

for (var i=0; i<correctanswers.length; i++);
    userAnswer = $('#radio').on("click");
    if(userAnswer===correctanswers[i]){

        numCorrect++;
    
    results.innerHTML = numCorrect + "out of" + correctanswers.length
$("#results").show();
}





}
//and then it will show the results 
submitanswers.onclick = function() {
    showResults();
}
})
