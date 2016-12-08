var activation = 0;
$('.play').click(function(){
	if (activation == 0){
		activation++;
	}else{
		activation--;
	}
})
$('.settings-button').click(function(){
	$('.settings').slideDown();
})
$('.close').click(function(){
	$('.settings').slideUp();
})