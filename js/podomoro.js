let timer;
let couterDownTime;
let initTime = 5;
let timeTarget = initTime;
let countTomato = 0;
let startClick = false;
console.log("todo list connected");
$("#buttonStart").on("click", function() {
    if (!startClick) {
        let display = $("#time");
        fiveMinutes = timeTarget;
        startTimer(fiveMinutes, display);
        startClick = true;
    }
});
$("#buttonEnd").on("click", function() {
    clearInterval(couterDownTime);
    startClick = false;
});

$("#buttonReset").on("click", function() {
    clearInterval(couterDownTime);
    timeTarget = initTime;
    $("#time").text("25:00");
    startClick = false;
});

function startTimer(duration, display) {
    timeTarget = duration;
    let minutes;
    let seconds;
    console.log(timeTarget);
    if (timeTarget > 0) {
        couterDownTime = setInterval(function() {
            minutes = parseInt(timeTarget / 60, 10);
            seconds = parseInt(timeTarget % 60, 10);

            //check digit of minutes and seconds
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.text(minutes + ":" + seconds);
            timeTarget = timeTarget - 1;
            if (timeTarget < 0) {
                $("#time").text("25:00");
                $("#tomato-logo").append("<i class='fas fa-apple-alt mr-4'></i>");
                clearInterval(couterDownTime);
                countTomato = countTomato + 1;
                timeTarget = initTime;
                console.log(countTomato);
                if (countTomato === 4) {
                    $("#tomato-logo").html("");
                    countTomato = 0;
                }
                startClick = false;
            }
        }, 1000);
    }
}