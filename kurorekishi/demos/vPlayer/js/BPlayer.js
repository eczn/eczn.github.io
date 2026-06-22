// BPlayer.js

function BPlayer(domAudio){
	// console.log(domAudio);
	// console.log("BPlayer init ready");

	// var isPlaying;
	isPlaying = false; 

	function playPause(){
		if (isPlaying === true){
			isPlaying = false; 
			domAudio.pause(); 
		} else {
			isPlaying = true; 
			domAudio.play();
		}
	}

	function sayStatus(){
		console.log("now in BPlayer.sayStatus: " + isPlaying);
		return isPlaying; 
	}

	this.isPlaying = isPlaying;
	this.playPause = playPause;
	this.fresh = sayStatus; 
}
