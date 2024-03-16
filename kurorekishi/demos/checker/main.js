// main.js
window.onload = function(){
	function getValue(){
		var o = {}; 
		var a = $('.user-info[type="tel"], .user-info[type="text"], .user-info[type="password"]').each((i, dom) => {
			var key = Object.keys(dom.dataset)[0]; 
			o[key] = $(dom).val(); 
		});

		var sex = $("input[name='sex'][type='radio']").filter((idx, dom) => dom.checked); 
		var val; 
		if (sex) val = $(sex).val(); 
		o.userSex = val; 

		return o; 
	}

	function toCheck(){
		var vals = getValue(); 
		console.log(vals); 
		var config = configGenerator(vals); 

		checker(config)(vals => {
		    console.log('全部通过校验'); 
		    // vals 是数组 里面存有相应的值 

		    alert('成功'); 

		    console.log(vals); 
		}, errs => {
		    // 至少有一个不能通过校验

		    $('.msg').html(errs.reduce((acc, cur) => {
		    	acc += '<li>' + cur + '</li>'
		    	return acc; 
		    }, ''));
		});

	}

	// 函数截流 
	function throttling(func, time){
		var timer; 

		return function(){
			timer && clearTimeout(timer); 
			return timer = setTimeout(func, time); 
		}
	}

	toCheck(); 
	var waitToCheck = throttling(toCheck, 500); 

	$('#commit').click(toCheck); 
	$('.user-info').on('keydown', function(){
		$('.msg').empty(); 
		waitToCheck(); 
	}).click(function(){
		$('.msg').empty(); 
		waitToCheck(); 
	}); 

}