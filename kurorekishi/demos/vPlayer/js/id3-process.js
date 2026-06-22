// give it url and the img#albumPic will be refresh from the new urlMp3 file. 
function aID3(url){
	ID3.loadTags(url, function() {
		showTags(url);
	}, {
		tags: ["title","artist","album","picture"]
	});

	function showTags(url) {
		var tags = ID3.getAllTags(url);
		// console.log(tags);
		// document.getElementById('title').textContent = tags.title || "";
		// document.getElementById('artist').textContent = tags.artist || "";
		// document.getElementById('album').textContent = tags.album || "";

		var image = tags.picture;
		if (image) {
			var base64String = "";
			for (var i = 0; i < image.data.length; i++) {
				base64String += String.fromCharCode(image.data[i]);
			}
			var base64 = "data:" + image.format + ";base64," +
			window.btoa(base64String);
			document.getElementById('albumPic').setAttribute('src',base64);

		} else {
			document.getElementById('albumPic').style.display = "none";
		}
	}


}

// init 
aID3(musicList[0]);
