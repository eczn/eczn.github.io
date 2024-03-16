function _random_string(x){
	var i=0,str="";
	var table = "abcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+-={}[]|/?;:,."
	for (i=0;i<x;i++){
		str += table.charAt(parseInt(Math.random()*table.length)); 
	}
	return str;
}

function word_dis(se,LEN,time,i){
	var str = _random_string(LEN.length);
	var count=0;
	var obj="";
	for (count=0;count<i;count++){
		obj += LEN.charAt(count);
	}
	var c = Math.random() * 2;
	for (count=i;count<i+c+3;count++){
		obj += str.charAt(count);
	}
	if (i++==LEN.length+2){
		return; 
	}
	$(se).html(obj);
	setTimeout(function(){
		word_dis(se,LEN,time,i);
	},time);
}
