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
	video.playbackRate = 2.0;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead" + video.seeking);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted === false){
	    video.muted = true;
	}

	else {
		video.muted = false ;
	}
	video.play()
	console.log(video.currentTime)
});

// document.querySelector("#volume").addEventListener("click", function() {
// 	("#volume").slider({
// 	min: 0,
//   	max: 100,
//   	value: 0,
// 		range: "min",
//   	slide: function(event, ui) {
//     	setVolume(ui.value / 100);
//   	}
// });

// document.querySelector("#vintage").addEventListener("click",function() {
// 	var element = document.getElementById("video");
// 	element.classList.add("Old School");
// });

// document.querySelector("#orig").addEventListener("click",function() {
// 	var element = document.getElementById("video");
// 	element.classList.add("Original");
// });	