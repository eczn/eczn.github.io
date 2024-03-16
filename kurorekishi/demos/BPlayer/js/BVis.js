//BVis.js 浏览器不支持 init 的时候播，只能用户操作后才能播
function initAll(){
	// 哦？是吗？
	// doSomething
	// return; 

	var context = new AudioContext();
	//加载媒体
	var audio = document.getElementById("music");
	console.log('audio', audio);

	audio.addEventListener('error', (e) => {
		console.log('err?', e);
	});

	//创建节点
	var source = context.createMediaElementSource(audio);
	var analyser = context.createAnalyser();
	//连接：source → analyser → context.destination
	source.connect(analyser);
	analyser.connect(context.destination);

	//计算出采样频率44100所需的缓冲区长度
	var length = analyser.frequencyBinCount*44100/context.sampleRate|0;
	//创建数据
	var output = new Uint8Array(length);

	// setTimeout(function(){
	// 	$(".BLine").fadeTo(800,1);
	// },800);

	var picR = 0;
	function _aniControl(){
		console.log('@@ _aniControl', audio.paused, picR);
		if ( audio.paused || picR == 3){
			setTimeout(_aniControl,150);
			return; 
		} else if (picR == 0) {
			_Vis(); 
			return; 
		} else if (picR == 1) {
			_waveLine(); 
			return; 
		} else if (picR == 2) {
			_waveChart();
			return; 
		} 
	}
	_aniControl();


	function _Vis(){
		if (audio.paused || picR != 0){
			console.log("???");
//			setTimeout(_Vis,100);
			_aniControl();
			return; 
		}

		//analyser.getByteTimeDomainData(output);
		analyser.getByteFrequencyData(output);
		var sum = 0;
		for (var f=0;f<output.length;f+=1){
			sum += output[f]; 
		}
		sum /= output.length;

		$("#upLine").css("top",sum*0.7 +"px");
		$("#downLine").css("bottom",sum*0.7+"px"); 

		// : rgb(50,30,30);
		$(".BLine").css("background-color","rgb(" + parseInt(sum)*0.5 + ",50,"+ (255-parseInt(sum))*0.5 + ")")
			.css("opacity",sum/100);

	//	setTimeout(_Vis,40);
		requestAnimationFrame(_Vis);
	}


	///////////////////////////////////

	console.log(parseInt($("#player").css("width")));

	canvas.width =  parseInt(window.innerWidth  * 0.90);
	canvas.height = parseInt(window.innerHeight * 0.80);


	var width = canvas.width , height = canvas.height;

	var g = canvas.getContext("2d");

	//g.globalCompositeOperation = "lighter";
	//g.translate(0.5,0.5);
	//播放帧
	function _waveLine(e){
		if (picR != 1){
			_aniControl();
			return; 
		}
		analyser.getByteTimeDomainData(output);
	//	analyser.getByteFrequencyData(output);

	//	将缓冲区的数据绘制到Canvas上
	//	g.globalAlpha = 0.5;
	
	//	g.clearRect(0,0,width,height);


		g.beginPath();
	//	g.lineWidth = "5";
	//	g.moveTo(0,height);

	//Icy Summit
		var imgTemp = g.getImageData(0,0,width,height); 

		for(var i=0; i<imgTemp.data.length ; i+=4 ){
	//		imgTemp.data[i] = 255-imgTemp.data[i];
	//		imgTemp.data[i+1] = 255-imgTemp.data[i+1];
	//		imgTemp.data[i+2] = 255-imgTemp.data[i+2];
			imgTemp.data[i+3] /= 1.5;
		}
		g.putImageData(imgTemp,0,0);

		g.lineWidth = 2; 
		g.moveTo(0,height/2);

	//	var sum = 0; 
		for(var i=0;i<width;i++){
	//		g.lineTo(i,height-height*output[Math.round(length*i/width)]/255);
	//		g.moveTo(i,height-(output[i]-6));
			g.lineTo(i,height-(output[i])); 
	//		sum += output[i]; 
		}
		g.stroke();

	//	console.log(sum / output.length);
	//	g.fill();
	//	请求下一帧
	//	requestAnimationFrame(_waveLine);
		setTimeout(_waveLine,30);
	}


	function _waveChart(){
		if (picR != 2){
			_aniControl();
			return; 
		}
		analyser.getByteFrequencyData(output);
	//	将缓冲区的数据绘制到Canvas上

		var imgTemp = g.getImageData(0,0,width,height); 
		for(var i=0; i<imgTemp.data.length ; i+=4 ){
			imgTemp.data[i+3] /= 1.5;
		}
		g.putImageData(imgTemp,0,0);


	//	g.clearRect(0,0,width,height);
		g.beginPath(),g.moveTo(0,height);
		for(var i=0;i<width;i++)
			g.lineTo(i,height-height*output[Math.round(length*i/width)]/255);

		g.lineTo(i,height),g.fill();
	//	请求下一帧
	//	requestAnimationFrame(_waveChart);

		setTimeout(_waveChart,40);
		// setTimeout(function(){
		// 	_waveLine(); 
		// },60);
	}


	$("#changeAnimate").click(function(){
		console.log(picR)
		picR += 1; 
		if (picR > 3){
			picR = 0;
		}

		if (picR == 3){
			$("canvas").fadeTo(800,0);
			$(".BLine").fadeTo(800,0);
			return; 	
		}

		if (picR == 0){
			$("canvas").fadeTo(800,0);
			$(".BLine").fadeTo(800,1);		
		} else {
			$("canvas").fadeTo(800,1);
			$(".BLine").fadeTo(800,0);
		}

	// 	if (picR == 1 ){
	// //		picR = 0;
	// 		$("canvas").fadeTo(800,0);
	// 		$(".BLine").fadeTo(800,1);
	// 		// 	$("#player").css("-webkit-border-radius",temp);
	// 		// 	if ( $("#player").css("-webkit-border-radius") == "15px"){
	// 		// 		return; 
	// 		// 	} else {
	// 		// 		setTimeout(function(){
	// 		// 			_borderR(d+1); 
	// 		// 		},20)
	// 		// 	}
	// 		// })(0);
	// 	} else {
	// //		picR = 1;
	// 		$("canvas").fadeTo(800,1);
	// 		$(".BLine").fadeTo(800,0);
	// 		// $("#player").css("-webkit-border-radius","0px");
	// 		// (function _borderR(d){
	// 		// 	var temp = d+"px"; 
	// 		// 	$("#player").css("-webkit-border-radius",temp);
	// 		// 	if ( $("#player").css("-webkit-border-radius") == "0px"){
	// 		// 		return; 
	// 		// 	} else {
	// 		// 		setTimeout(function(){
	// 		// 			_borderR(d-1); 
	// 		// 		},20)
	// 		// 	}
	// 		// })(15);
	// 	}

	});

	document.getElementById('fileinput').addEventListener('change', fileinputChangeed);
	function fileinputChangeed(e) {
		var file = this.files[0];
		console.log(file);
		if (!file) return;
		var url = URL.createObjectURL(file); // 这里就懒得 revoke 了, demo 🐶
		// url
		x.pause();
		x.src = url;
		x.play();
		console.log('file', file)
		$(".musicName").text(file.name);
	}
}


document.addEventListener('click', initAllfn, {
	capture: true,
});
function initAllfn() {
	console.log('@@ ?');
	document.removeEventListener('click', initAllfn, { capture: true });
	initAll();
}
