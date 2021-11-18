var video = document.querySelector("#player1" );

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	console.log(video.currentTime)
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = 0.5;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = 3.0;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.seeking();
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.muted = true;
	video.play()
	console.log(video.currentTime)
});

document.querySelector("#volume").addEventListener("click", function() {
	console.log("Half Volume " + video.playbackRate);
	video.volume = 0.2;
	console.log("Full Volume " + video.playbackRate);
	video.volume = 1.0;
});