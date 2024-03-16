// wordstream
var Ws = (function(){
	function Ws(str){
		this.fullContent = str; 
		this.tos = str.split(''); 
		this.get = (this.tos.shift).bind(this.tos); 
	}

	return Ws
})()
