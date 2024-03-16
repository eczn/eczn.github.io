/* 
 * jP is a kind of player plugins based on canvas and web audio API 
 * 
 * usage : 1,add canvas tag named jP in .html 
 *         2,and add code:'jP.init()' after <body> to use this script 
 *         3,if sucess... you can see a simply player display... 
 *
 *         ** jP is bind to the audio and canvas html element (id is "jPA" and "jPC")
 *
 *         ** jPen has some function to draw. it needs some para 
 * 
 */ 

function jPCC(domAudioId,domCanvasId){
	var domAudio = window.document.getElementById(domAudioId);
	var domCanvas = window.document.getElementById(domCanvasId);
	domCanvas.width =  parseInt(window.innerWidth);
	domCanvas.height = parseInt(window.innerHeight);

	// var AudioContext = AudioContext||webkitAudioContext||safariAudioContext;	 //web audio API 
	// var AudioContext = AudioContext;	 //web audio API 
	// var AudioContext = AudioContext||webkitAudioContext||safariAudioContext;	 //web audio API 
	var context = new AudioContext(); // new a context for dom controling 
	
	var source = context.createMediaElementSource( domAudio );
	var analyser = context.createAnalyser();

	source.connect(analyser); 
	analyser.connect(context.destination); 

	var length = analyser.frequencyBinCount*44100/context.sampleRate|0;
	var output = new Uint8Array(length); 

	function returnOutputFrequency(){
		analyser.getByteFrequencyData(output);
		return output;
	}
	function returnOutputDomain(){
		analyser.getByteTimeDomainData(output);
		return output;
	}

	this.domAudio = domAudio;
	this.domCanvas = domCanvas; 
	this.AudioContext = AudioContext; 
	this.context = context; 
	this.source = source;
	this.analyser = analyser; 
	this.length = length;

	this.returnOutputFrequency = returnOutputFrequency; 
	this.returnOutputDomain = returnOutputDomain; 
}

function jPenCC(jP){
	var g = jP.domCanvas.getContext('2d'),
		width = jP.domCanvas.width,
		height = jP.domCanvas.height,
		output = jP.returnOutputDomain();


	function line(){
		output = jP.returnOutputDomain(); 

		g.beginPath();
		g.fillStyle = 'rgba(211,211,211,0.3)';
		g.fillRect(0,0,width,height); 
		g.lineWidth = 2; 

		g.moveTo(0,height/2);

		for(var i=0,f=0;i<width;i+=4){
			g.lineTo(f,(output[i])+(height/2-127)); 
			f += width/output.length * 8;
		}
		g.stroke();

		window.setTimeout(function(){
			line(jP);
		},50);
	}

	function circleS(){
		var avg = 0,i; 
		output = jP.returnOutputFrequency(); 

		for(i=0;i<100;i+=10){
			avg += output[i]; 
		}
		avg /= 10;

		g.beginPath();
		g.fillStyle = 'rgba(255,255,255,0.6)';
		g.fillRect(0,0,width,height);
		g.fillStyle = 'rgba(0,0,0,0.90)';
		g.lineWidth = 2; 
		g.moveTo(0,height/2);

		g.arc(width/2,height/2,  Math.abs((avg-100)*1.5)  ,0,6.29,false);

		g.fill();//画实心圆
		g.closePath();

		window.requestAnimationFrame(function(){
			circleS();
		}); 
	}

	function circleM(){
		output = jP.returnOutputFrequency();
//output[Math.random()*output.length]

		var tempR = Math.random()*output[20]/2;

		_drawArc(g,width*Math.random(),height*Math.random(),tempR,0,0.5);

		g.beginPath();
		g.fillStyle = 'rgba(255,255,255,0.3)';
		g.fillRect(0,0,width,height);
		g.closePath(); 

		//console.log( output[ parseInt(Math.random()*output.length) ] );

		//setTimeout(circleM,40);

		window.requestAnimationFrame(circleM);
	}

	function _drawArc(ctx,cX,cY,r,i,vi){
		
		ctx.beginPath();
		// ctx.fillStyle = 'rgba(255,255,255,0.6)';
		// ctx.fillRect(0,0,width,height);
		ctx.strokeStyle = '#332233';
		ctx.arc(cX, cY, i, 0, 2 * Math.PI, false);
		ctx.stroke();
		
		//console.log(output);

		requestAnimationFrame(function(){
			if(r<i) return ;
			_drawArc(ctx,cX,cY,r,i+vi,vi)
		})
	}

	this.line = line;
	this.circleS = circleS; 
	this.circleM = circleM;
}
