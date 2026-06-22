// progress.js
// var myTest = $("#my-test");
// $("#my-test").css('animation-duration', '200s'); 

function Rotater(targetClass, domAudioId){
	var $target = $('.'+targetClass); 
	var domAudio = document.getElementById(domAudioId);
	




	function setTime(time){
		$target.css('animation-duration', time+'s'); 
	}
	function start(){
		$target.addClass("animation-go");
	}
	function stop(){
		$target.removeClass("animation-go");
	}
	function reLoadAndStart(){
		// animation-name: rotaing;
		// $target.removeClass("rotating-init");
		stop();

		$target.css('animation-name', 'rotaingd'); 
		// $target.addClass("rotating-init");

		
		console.log(domAudio.duration);

		start();
		setTimeout(function(){			
			$target.css('animation-name', 'rotaing');
		},100);
	}

	this.setTime = setTime;
	this.start = start
	this.stop = stop;
	this.reLoadAndStart = reLoadAndStart;
}



// mp3Rotater.setTime(10);
// mp3Rotater.start();
