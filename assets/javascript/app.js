
//Start Button

$(document).on("click", function () {

    setTimeout(() => {
        $("#start").css("display", "block");

    }, 200);


});

// Global variables
var counter = 101;
var ansv = ["3", "6", "11", "15", "20", "22", "26", "29", "33", "38"];
var cor = [];
var wro = [];


// Correct answer condition

$("input").on("click", function () {

    var ck = $(this);
    for (var i = 0, length = ck.length; i < length; i++) {

        var c = ck[i].value


        if ((c == ansv[0]) || (c == ansv[1]) || (c == ansv[2]) || (c == ansv[3]) || (c == ansv[4]) || (c == ansv[5]) || (c == ansv[6]) || (c == ansv[7]) || (c == ansv[8]) || (c == ansv[9])) {

            cor.push(c);

        } else {

            wro.push(c);
        }

        break;
    }
});

// countdown timer
var timer = setInterval(goDown, 1 * 1000);
$('#counter').text(counter);


// Submit button function and commands for results
$("#submit").on('click', function () {
    clearInterval(timer);
    $("#submit").attr('disabled', true);
    $('#content').text('timer is up!');
    var q = $("#corrects").text("Correct: " + cor.length);
    var t = $("#wrongs").text("Wrong: "+ wro.length);
    var aa = $("#rights").text("Right Answers: " + answers);
    // $("#content").append(q, t, aa);
});

// Right answers array

var answers = ['Fred', 'Chester', 'Sheen', 'Princess-Yue', 'Chuckie', 'Reggie-Rocket', 'The-Squirrel', 'Nine', 'In-the-Attic', 'Gordon'];

// countdown timer instructions

function goDown() {
    counter--;
    $('#countdown').text(counter);


    if (counter == 0) {
        $("#submit").attr('disabled', true);
        clearInterval(timer);
        $('#content').text('timer is up!');
        var q = $("#corrects").text(cor.length);
        var t = $("#wrongs").text(wro.length);
        var aa = $("#rights").text(answers);
        // $("#content").append(q, t, aa);

    }

}



