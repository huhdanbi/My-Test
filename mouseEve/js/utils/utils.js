window.utils = {
	assign : (...args) => {
		const result = {};

		args.map((i,e) => {
			const obj = args[e];
			for ( const keys in obj ){
				if ( obj.hasOwnProperty(keys) ) {
					result[keys] = obj[keys];
				}
			}
		});
		return result;
	},
	$ : (elemName, parentElem) => {
		return (parentElem || document).querySelector(elemName);
	},
	$$ : (elemName, parentElem) => {
		return (parentElem || document).querySelectorAll(elemName);
	},
	ajax : function(url, callback , isJsonType) {
		try {
			const xhr = new (XMLHttpRequest || ActiveXObject);
			xhr.open('GET' , url);
			xhr.onreadystatechange = function () {
				xhr.readyState > 3 ? callback(isJsonType ? JSON.parse(xhr.responseText) : xhr.responseText) : null;
			};
			xhr.send();
		} catch (e) {
			console.log(e);
		}
	},
};

export default utils;