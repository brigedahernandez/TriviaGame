//TIMER 

var number = 60;
var intervalId;
var startbutton = document.getElementById("start");
var submitbutton = document.getElementById("submit");
var correctanswers = ["Teal","fightclub"]


$("document").ready(function () {
    $("#questions").hide();
    $("#results").hide();
    $("#submitanswers").hide();


    startbutton.onclick = function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#questions").show();
    }

    submitbutton.onclick = function stop() {
        $("#results").show();
        $("#questions").hide();
    }
    

    function decrement() {
        number--;

        $("#timer").html("<h2>" + number + "</h2>");

        if (number === 0) {
            stop();
            
        }
    }

    //function stop() {
        //clearInterval(intervalId);
        //event.preventDefault();
//checkanswers();

    }
   
    //if i comment this thing out, it does something weird with the jquery in the next code block 
    ,startbutton.onclick = function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#questions").show();
    }
,$("#questions").get(function (event) {
        
        stop();
        
console.log(event)

    }))
