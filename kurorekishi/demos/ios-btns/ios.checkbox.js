// ios.checkbox.js
var IosCheckbox = (function(){
	var id = 0; 
	function idGenerator(){
		id = id + 1; 
		return `ios-checkbox-${id}`; 
	}

	var css = `
		/*b.css*/
		[ios-checkbox] * {
			margin: 0; 
			padding: 0; 
		}

		[ios-checkbox] {
			position: relative;
			width: 92px; 
			height: 52px; 
			border-radius: 40px;
			/*background-color: #BBB;*/
			/*overflow: hidden;*/
		}

		[ios-checkbox] > .hidden-input {
			opacity: 0; 
			position: absolute;
			top: 0; 
			left: 0; 
			width: 100%;
			height: 100%; 
			z-index: 9; 
		}


		[ios-checkbox] .hidden-input:checked ~ .slider {
			stroke: rgb(103, 203, 103);
			stroke-width: 50px;
		}

		[ios-checkbox] .slider {
			stroke: #DDD;
			stroke-width: 2px;
			transition: stroke-width .3s; 
			border-radius: 50px;
		}

		[ios-checkbox] .circle {
			position: absolute;
			border: 1px solid #DDD; 
			left: 1px; 
			top: 1px;
			width: 50px; 
			height: 50px; 
			box-sizing: border-box;
			border-radius: 50px;
			background-color: #FFF; 
			box-shadow: 0 6px 7px -3px rgba(0, 0, 0, .4);

			transition-property: all; 
			transition-duration: .3s; 
			transition-delay: .05s; 
		}

		[ios-checkbox] .hidden-input:checked ~ .circle {
			left: 40px; 
		}
	`;
	var $css = document.createElement('style'); 
	$css.innerHTML = css; 
	var head = document.getElementsByTagName('head')[0];
	head.appendChild($css); 



	IosCheckbox.prototype.launch = function(sel){
		var dom = this.$; 
		var target = document.querySelector(sel); 

		target.appendChild(dom); 
	}

	IosCheckbox.prototype.isSlected = function(){
		return this.$id.checked; 
	}

	IosCheckbox.prototype.addEvt = function(cb, eventName = 'click'){
		this.$.addEventListener(eventName, e => {
			var isSlected = this.isSlected();
			cb.bind(this.$)(isSlected, e); 
		}); 
	}

	function IosCheckbox(){
		this.id = idGenerator(); 
		var tpl = `
			<input id="${this.id}" class="hidden-input" type="checkbox" />
			<svg class="slider" width="92" height="52">
				<path class="tracker"
					d="M 26 51 A 25 25 180 0 1 26 1 L 66 1 A 25 25 180 0 1 66 51 L 26 51"
					style="fill: none;"
				/>
			</svg>
			<div class="circle"></div>
		`; 

		var container = document.createElement('div'); 
		container.setAttribute('ios-checkbox', '');

		container.innerHTML = tpl; 

		this.$ = container; 

		this.$id = this.$.children[0];
	}

	return IosCheckbox; 
})()