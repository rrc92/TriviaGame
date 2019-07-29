    
    var counter = 100;
    $('#counter').text(counter);

    var timer = setInterval(goDown, 1*1000);

    answers =['Fred', 'Chester', 'Sheen','Princess-Yue','Chuckie','Reggie-Rocket','The-Squirrel','Nine','In-the-Attic','Gordon'];

    function goDown(){
        counter--;
        $('#countdown').text(counter);

        if (counter == 0){
            $("input[type='submit']").attr('disabled', true);
            clearInterval(timer);
            $('#content').text('timer is up!')
        }

    }


    $("input[type='submit']").on('click', function(){
        var ans = $("input[name='cap']:checked").val();

        if (ans == answers[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]){
            $('#content').text('correct');
        }else{
            $('#content').text('incorrect')
        }

        event.preventDefault(); //prevent the page from refreshing
    });