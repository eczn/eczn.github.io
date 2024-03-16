var light = (function($){
	var WAIT = 2000; 
	var fsm = StateMachine.create({
		initial: 'green', 

		events: [
			{ name: 'warn',  from: 'green',  to: 'yellow' },
			{ name: 'panic', from: 'yellow', to: 'red'    },
			{ name: 'calm',  from: 'red',    to: 'yellow' },
			{ name: 'clear', from: 'yellow', to: 'green'  },
			{ name: 'toRed', from: ['green', 'red', 'yellow'], to: 'red' },
			{ name: 'toYellow', from: ['green', 'red', 'yellow'], to: 'yellow' },
			{ name: 'toGreen', from: ['green', 'red', 'yellow'], to: 'green' } 
		]
	});

	// fsm.onyellow = function(){
	// 	alert('!'); 
	// }

	fsm.onbeforeevent = function(ev){
		$('.cir').attr('class', 'cir'); 
	}

	fsm.onafterevent = function(ev){
		console.log('STATE CHANGE');
		console.log(ev);
		console.log(fsm.current); 

		$('#' + fsm.current).addClass('color-'+fsm.current);
	}
 
	time.go(function(now, OF){
		$('time').html((now<10?('0'+now.toString()):now.toString()) + '<br />'); 

		if (OF){
			// toNextState();
			switch(fsm.current){
				case 'red':	
					fsm.calm(); 
					setTimeout(function(){
						fsm.clear(); 
					}, 1000); 
					break;
				case 'yellow':
					// do nothing 
					break;
				case 'green': 
					fsm.warn(); 
					setTimeout(function(){
						fsm.panic()
					}, 1000); 
					break; 
				default:
					// reset 			
			}
		} else {

		}
	}); 

	$('#red-btn').click(function(){
		fsm.toRed();
	});
	$('#yellow-btn').click(function(){
		var pre = fsm.current; 
		fsm.toYellow(); 
		setTimeout(function(){
			if (pre == 'red'){
				fsm.clear(); 
			} else if (pre == 'green') {
				fsm.panic(); 
			}
		}, 1000); 
	});
	$('#green-btn').click(function(){
		fsm.toGreen();
	});

})($); 
