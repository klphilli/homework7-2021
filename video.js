var video = document.querySelector("#player1" );

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
	volume.innerHTML= slider.value + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	console.log(video.currentTime)
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *=.95
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /=.95
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	console.log(video.currentTime);
	video.currentTime+= 15
	if (video.currentTime>=video.duration){
		video.currentTime=0
		video.play()
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("UnMute");
	video.muted = true;
	video.play();
	console.log(video.currentTime);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log();
	video.volume = this.value/100;
	volume.innerHTML = this.value + "%"
	console.log(video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.add("Old School")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.add("Old School")
});

// document.querySelector("#faster").addEventListener("click", function() {
// 	console.log("Old video speed is " + video.playbackRate);
// 	video.playbackRate = 2.0;
// 	console.log("New video speed is " + video.playbackRate);
// });