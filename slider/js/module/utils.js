const utils = {
	deviceCheck : function(){
		const device = /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i;

		return ( (navigator.userAgent.match(device)!== null) || document.body.offsetWidth <= 768) ? 'mobile' : 'desktop';
	},
	assign : function( originOpts, opts ){
		const result = {};

		for(let i=0; i < arguments.length; i+=1){
			const obj = arguments[i];
			for( const keys in obj ){
				if( obj.hasOwnProperty(keys) ){
					result[keys] = obj[keys];
				}
			}
		}

		return result;
	},
	$ : function( elem, ctxElem ){
		return ( ctxElem || document).querySelector(elem);
	},
	$$ : function( elem, ctxElem ){
		return ( ctxElem || document).querySelectorAll(elem);
	},
	ajax : function( url, callback, data, x ) {
		try {
			x = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
			x.open(data ? 'POST' : 'GET', url, 1);
			x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			x.onreadystatechange = function () {
				x.readyState > 3 && callback && callback(x.responseText, x);
			};
			x.send(data)
		} catch (e) {
			window.console && console.log(e);
		}
	},
	index : function( node ){
		return Array.prototype.indexOf.call(node.parentNode.children, node);
	},
	trigger : function(el, eventName, options){
		let event;
		if (window.CustomEvent) {
			event = new CustomEvent(eventName, options);
		} else {
			event = document.createEvent('CustomEvent');
			event.initCustomEvent(eventName, true, true, options);
		}
		el.dispatchEvent(event);
	}
};