// main.js
// 耦合度比较高的代码。。。 
// 这是个适合本人阅读的源代码书写风格。。 
// 读不懂不要打我。。。
		var name = "aurora-palace.mp3";
		var x = document.getElementById("music");


		var fileName = ["aurora-palace.mp3"];

		var listStatus = 0;
		var isiOS = 0; 

		setTimeout(function(){
			console.log(x.src);
		},5000);

		function installList(){
			var i=0;
			for (i=0;  ;i++){
				if (fileName[i]==null){
					break;  
				} else {
					var temp = "<p class='listName'>" + fileName[i] + "</p>"; 
					$(".list").append(temp);
				}	
			}
		}

		function setiOS(){
			if (browser.versions.ios){
				isiOS = 1; 
				
				$("#player").css("width","100%").css("height","100%").css("left","0%").css("top","0%").css("display","block").animate({opacity:"1"},800);
				
				$(".musicName").css("font-size","60px");

				$(".listName , #search").css("font-size","40px");


//				$("#player").on("touchmove",function(e){
//					e.preventDefault();
//				},false);
			}
		}

		function playFromList(){
			if ( this.className == "listNameS" || this.className == "searchList"){
				listStatus = 0; 

				$(".searchList").fadeTo(800,0,function(){
					$(this).empty().css("display","none");
				});

				if (this.className == "searchList"){
					return; 
				}
			}

			var tempStr = BGlobal.musicStore;
			x.src = tempStr + $(this).text();
			console.log('next x.src', x.src)
//			word_dis(".musicName",$(this).text(),25,0);
			$(".musicName").text($(this).text());
			x.pause();
			x = document.getElementById("music");
			$("#slide").css("left","-100%");

			$("#play").trigger("click");
		}


		var RESIZE_FLAG = 0; 
		function initWidthAndHeight(){
			// var pWidth  = parseInt(window.innerWidth  * 0.40) + "px";
			// var pHeight = parseInt(window.innerHeight * 0.36) + "px"; 
			// var pLeft   = parseInt(window.innerWidth  * 0.30) + "px"; 
			// var pTop    = parseInt(window.innerHeight * 0.32)+ "px";

			var pWidth = "90vw";
			var pHeight = "80vh";

			$("#player").animate({
				width:pWidth,
				height:pHeight,
				// left:pLeft,
				// top:pTop,
				opacity:"1",
			},800);
		}

		function volListen(event){
			event.preventDefault();
			if (listStatus==1){
				return; 
			}
			var temp; 
			if (event.wheelDelta>0){
				temp="滚轮上";
				temp = 0.04;

			} else if (event.wheelDelta<0) {
				temp="滚轮下";
				temp = -0.04;
			}


			if (temp+x.volume > 1 ){
				x.volume = 1; 
			} else if (temp + x.volume < 0 ){
				x.volume = 0;
			} else {
				x.volume += temp;
			}
			
			temp = 1 - x.volume; 
			
			temp = (temp * 100) + "%" ; 
			$(".volDiv").animate({
				top:temp,
			},50);

			word_dis(".volDiv","vol:"+(100-parseInt(temp)),50,0);

		}

		$(document).ready(function(){
			installList();
			flashSlide();
			
			setiOS();
			console.log(x.volume);


			
			setTimeout(function(){
				x.volume = 0.8;
				$(".volDiv").animate({
					top:"20%",
				},800);

				$(document).on("mousewheel",function(){
					volListen(event);
				});
			},800);

			if (isiOS == 0){
				initWidthAndHeight();

				$(window).resize(function(){
					$("#player").clearQueue();
					initWidthAndHeight();
				});
			}

			$("#slideS").click(function(){
				var playerWidth = $("#player").css("width");
				// console.log("playerWidth:"+playerWidth);
				// console.log(event.offsetX);
				console.log("persentage:"+event.offsetX/(parseInt(playerWidth))); 
				// console.log("Song time : " + x.duration);
				console.log("goto "+ x.duration * (event.offsetX/(parseInt(playerWidth))) + "s")

				x.currentTime = x.duration * (event.offsetX/(parseInt(playerWidth))); 

				// screenX;
				// pageX; 
				// x; 
				// offsetX; 
				// movementX;
				// layerX;
			});

			$("#next").click(function(){
				var tempStr = fileName[parseInt(Math.random()*fileName.length)];
				
				x.pause();	

				x.src = BGlobal.musicStore + tempStr;
				$(".musicName").text(tempStr);

				if ($("#play").css("display") == "none"){
					x.play();
				} else {
					$("#play").trigger("click");
				}
				
			})

			$(".listName").click(playFromList);


			$(".list").click(function(){
				if (listStatus == 0){
					$(".list").css("cursor","auto");
					listStatus = 1;



					$(this).animate({
						right:"-102%"
					},260,function(){
						$(this).animate({
							right:"-1%",
							paddingLeft:"10%",
							paddingRight:"10%"
						},1000,function(){
							$(this).animate({
								right:"-10%",
							},350);
						});
					});
				} else {
					$(".list").css("cursor","pointer");
					listStatus = 0; 
					$(this).animate({
						right:"-102%",
						paddingLeft:"0%",
						paddingRight:"0%"
					},1000,function(){
						$(this).animate({
							right:"-98%"
						},260);
					});

				}
			})

			function volUP(y){
				x.volume = y/100;
				console.log(x.volume);
				y++; 
				if (y<=100){
					setTimeout(function(){
						volUP(y);
					},13);	
				}
			}

			function volDOWN(y){
				x.volume = 1-(y/100); 
				console.log(x.volume);
				y++; 
				if (y<=100){
					setTimeout(function(){
						volDOWN(y);
					},13);	
				} else {
					x.pause();
				}
			}

			$(".btn").click(function(){
	//			console.log(x.getStartDate());
				if (this.id == "play"){

					$(this).fadeTo(200,0,function(){
						$(this).css("display","none");
					});

					$("#pause").css("display","block").fadeTo(200,1);
					
					//x.volume = 0;
//					volUP(0);

					x.play().then(console.log, console.error);
				} else if (this.id == "pause"){
					$(this).fadeTo(200,0,function(){
						$(this).css("display","none");
					});
					$("#play").css("display","block").fadeTo(200,1);

					//x.volume=1;
					x.pause();
					
					//volDOWN(0);
					
				}
			}).mouseenter(function(){
				$(this).animate({
					opacity:"0.5"
				},200);
			}).mouseleave(function(){
				$(this).animate({
					opacity:"1"
				},200);
			});

			$(".listName").mouseenter(function(){
				$(this).clearQueue();
				$(this).animate({opacity:"1"},200);
			}).mouseleave(function(){
				$(this).animate({opacity:"0.7"},200);
			});
		});		//ready ends; 

		function flashSlide(){
//			x.duration; // 音频总长
//			x.currentTime; // 当前播放到哪了


			var rate = x.currentTime / x.duration ;
			if (rate == 1){
				$("#next").trigger("click");
			}
			rate = rate - 1; 
			rate *= 100;
			rate += "%";

//			帧数限制
//			jQuery.fx.interval = 1;
			$("#slide").css("left",rate); 
	 		// console.log(rate);

			setTimeout(function(){
				flashSlide();
			},100);
		}
		

		function search(searchStr,event){
			var i = 0;

			if (event.which != "13"){
				console.log(event.which);
				console.log(searchStr);
				return;
			}

			$(".searchList").css("display","block").animate({
				opacity:"1"
			},800);
			listStatus = 1; 

			for (i=0; fileName[i]!=null ; i++){
				//stringObject.indexOf(searchvalue,fromindex)
				if (fileName[i].indexOf(searchStr,0) != -1){
//					console.log("find : "+fileName[i]);
					if (fileName[i] == "") return; 
					$(".searchList").append("<p class='listNameS'>" + fileName[i] + "</p>");
					$(".listNameS , .searchList").click(playFromList);
				}
			}
		}
