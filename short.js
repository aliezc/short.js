!function(){
	'use strict';
	window.$ = document.querySelectorAll.bind(document);
	window.on = window.addEventListener;
	window.rmon = window.removeEventListener;
	document.ready = function(f){
		document.addEventListener('DOMContentLoaded', f);
	}
	document.on = document.addEventListener;
	document.rmon = document.removeEventListener;
	HTMLElement.prototype.$ = HTMLElement.prototype.querySelectorAll;
	HTMLElement.prototype.on = HTMLElement.prototype.addEventListener;
	HTMLElement.prototype.rmon = HTMLElement.prototype.removeEventListener;
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
	HTMLElement.prototype.data = function(c, s){
		if('string' == typeof c){
			if('string' == typeof s){
				this.dataset[c] = s;
			}else{
				return this.dataset[c];
			}
		}
		return this;
	}
	window.ajax = function(options, cb){
		var xhr = new XMLHttpRequest(), qs = '';
		xhr.open(options.method || 'GET', options.url, true);
		if(options.headers){
			for(var i in options.headers){
				xhr.setRequestHeader(i, options[i]);
			}
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				cb.call(window, xhr.responseText, xhr.status);
			}
		}
		if(options.method == 'POST' && options.data){
			for(var i in options.data){
				qs += i + '=' + options.data[i] + '&';
			}
			qs = qs.slice(0, -1);
		}
		if(qs){
			xhr.send(qs);
		}else{
			xhr.send();
		}
	}
}();
