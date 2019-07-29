
//Start Button

$(document).on("click", function () {

    setTimeout(() => {
        $("#start").css("display", "block");

    }, 200);


});
var counter = 5;
var ansv = ["3", "6", "11", "15", "20", "22", "26", "29", "33", "38"];
var cor = [];
var wro = [];




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


var timer = setInterval(goDown, 1 * 1000);
$('#counter').text(counter);


$("#submit").on('click', function () {
    clearInterval(timer);
    $("#submit").attr('disabled', true);
    $('#content').text('timer is up!');
    var q = $("<p>").text(cor.length);
    var t = $("<p>").text(wro.length);
    var aa = $("<p>").text(answers);
    $("#content").append(q, t, aa);
});


var answers = ['Fred', 'Chester', 'Sheen', 'Princess-Yue', 'Chuckie', 'Reggie-Rocket', 'The-Squirrel', 'Nine', 'In-the-Attic', 'Gordon'];


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
        $("#content").append(q, t, aa);

    }

}



