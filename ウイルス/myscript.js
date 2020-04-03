
function play_se(){
	var warning = new Audio('https://raw.githubusercontent.com/hipenpen/penpen/master/Warning-Alarm02-2L.mp3');
	var voice = new Audio('https://raw.githubusercontent.com/hipenpen/penpen/master/voice.wav');
	warning.play();
	voice.play();
	navigator.vibrate([200,100,200,100,900,1])

}
 $(function(){
 	
 	var device = navigator.userAgent.match(/Windows|iPhone|Android|iPad/);
 	$('#device').text(device);
 	if (device == null) {
 		device='端末';
 	}

 	var time =60;
 	setInterval(function(){
 		time--;
 		$('#timer').text(time);
 	},1000);

 	$('.modal').modal({dismissible: false});
 	$('#alert').modal('open');
 	$('#close').click(function(){
 		$('#alert').modal('close');
 		play_se();
 	})

 
 	     

    
   


 	
 });
