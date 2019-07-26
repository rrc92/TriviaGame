var counter = 30;
	$('#counter').text(counter);

	var timer = setInterval(goDown, 1*1000);

	function goDown(){
		counter--;
		$('#countdown').text(counter);

		// if (counter == 0){
		// 	$("input[type='submit']").attr('disabled', true);
		// 	clearInterval(timer);
		// 	$('#content').text('timer is up!')
		// }

	}