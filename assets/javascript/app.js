    
    var counter = 120;
    $('#counter').text(counter);

    var timer = setInterval(goDown, 1*1000);

    function goDown(){
        counter--;
        $('#countdown').text(counter);

        if (counter == 0){
            $("input[type='submit']").attr('disabled', true);
            clearInterval(timer);
            $('#content').text('timer is up!')
        }

    }

debugger;
    $("input[type='submit']").on('click', function(){
        var ans = $("input[name='cap']:checked").val();

        if (ans == 'sacramento'){
            $('#content').text('correct');
        }else{
            $('#content').text('incorrect')
        }

        event.preventDefault(); //prevent the page from refreshing
    });