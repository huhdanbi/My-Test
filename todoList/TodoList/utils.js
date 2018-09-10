'use strict';

var utils = {
    $ : function( elem , parentElem){
        return ( parentElem || document ).querySelector(elem);
    },
    $$ : function( elem, parentElem ){
        return ( parentElem || document ).querySelectorAll(elem);
    },
    assign : function( defaultOpts, opts ){
        var result = {};

		for(var i=0; i < arguments.length; i+=1){
			var obj = arguments[i];
			for( var keys in obj ){
				if( obj.hasOwnProperty(keys) ){
					result[keys] = obj[keys];
				}
			}
		}

		return result;
    }
};

