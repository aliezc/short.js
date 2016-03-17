!function(){
	'use strict';
	window.$ = document.querySelectorAll.bind(document);
	HTMLElement.prototype.$ = HTMLElement.prototype.querySelectorAll;
	NodeList.prototype.each = function(f){
		if('function' != typeof f) return false;
		for(var i = 0; i < this.length; i++){
			f.call(this[i], this[i]);
		}
	}
	HTMLElement.prototype.childs = function(f){
		if('function' == typeof f) return false;
		var nodes = this.childNodes;
		for(var i = 0; i < nodes.length; i++){
			f.call(this, nodes[i]);
		}
	}
	HTMLElement.prototype.css = function(c, s){
		if('string' == typeof c){
			if('string' == typeof s){
				this.style[c] = s;
			}else{
				return window.getComputedStyle(this, null)[c];
			}
		}
		return this;
	}
	HTMLElement.prototype.addclass = function(s){
		if('string' == typeof s) this.classList.add(s);
		return this;
	}
	HTMLElement.prototype.rmclass = function(s){
		if('string' == typeof s) this.classList.remove(s);
		return this;
	}
	HTMLElement.prototype.attr = function(c, s){
		if('string' == typeof c){
			if('string' == typeof s){
				this.setAttribute(c, s);
			}else{
				return this.getAttribute(c);
			}
		}
		return this;
	}
}();
