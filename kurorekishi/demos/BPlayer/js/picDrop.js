//picDrop.js
dropbox.addEventListener("dragover", function(e){
	e.stopPropagation();
    e.preventDefault();
}, false);

dropbox.addEventListener("drop", function(event){
	event.stopPropagation();
	event.preventDefault();

	var targetImg = event.dataTransfer.files[0];
	if (targetImg) {
		var reader = new FileReader();
		reader.onload = function ( event ){
			var txt = event.target.result;
			$("#i00").attr("src",txt);
			$("#i00").css("opacity",0);
			$("#i00").animate({
				opacity:1,
			},800);
		};
	}
	reader.readAsDataURL( targetImg );

	setTimeout(function(){
		var s=document.getElementById("i00").src;
		document.cookie="back_name="+123;
	},1000);
},false);

