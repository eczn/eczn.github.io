// time.js 
var time = (function(){
	var _now = 0; 
	function inc(){
		if (_now < 29) {
			_now ++ ; 
		} else {
			_now = 0; 
		}
	}

	var _cb = function(now, OF) { console.log(now) } 

	function _go(){
		inc(); 
		_cb(_now, _now === 29); 
	}

	return {
		go: function(cb){
			if (cb){
				_cb = cb;
			} 
			setInterval(_go, 1000); 
		}
	}
})();
