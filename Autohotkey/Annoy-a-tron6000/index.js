var setting = 0;

$('button.changeSetting').click(function(){
	setting = ++setting % 80;
	$('span.setting').text(setting);
})

$('button.applySetting').click(function(){
	if(setting === 53) alert('Success!')
});

///////////

$('button.checkDropdowns').click(function(){
	if($('select.first').val() == '4' &&
		$('select.second').val() == '2' &&
		$('input.third').val() == 'go!'){
		alert('Success');
	}
})

////

var timeout = 4;
var ready = false;
$('button.prime').click(function(){
	var count = timeout ;
	$('.countdown').text(timeout);
	var timer = setInterval(function(){
		count--;
		$('.countdown').text(count);
		if(count == 0){
			clearInterval(timer);
			ready = true;
			$('.countdown').text('ready');
			setTimeout(function(){
				ready = false;
				$('.countdown').text('');
			}, 1000)
		}
	}, 1000)
});

$('button.fire').click(function(){
	if(ready) alert('Success');
})
