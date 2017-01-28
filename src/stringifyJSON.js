// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(val) {

	// base case

	// val is a primitive
	if (val === null || typeof val === 'function' || val === undefined){
		return 'null'
	}
	if (typeof val === 'function'){
		return 'null'
	}
	if (typeof val === 'string'){
		return '"' + val + '"'
 	}
	if (typeof val === 'boolean'){
		return val.toString()
	}
	if (typeof val === 'number'){
		return val.toString()
	}
	if (Array.isArray(val) && val.length === 0){
		return '[]'
	}

	if (typeof val === 'object' && isEmpty(val)){
		return '{}'
	}

	else {
		if (Array.isArray(val)){
		  var JSONstring = []
		  if (val.length !== 1){
		    for (var i = 0; i<val.length; i++){
		  	  JSONstring.push(stringifyJSON(val[i]))
		    }
		    return '[' + JSONstring.join(',') + ']'
		  }
		  if (val.length === 1){
		  	for (var i = 0; i<val.length; i++){
		  	  return '[' + stringifyJSON(val[i]) + ']'
		  	}
		  }
		  
		}
		//if val is an obj not an array
		if (typeof val === 'object'){
		  var JSONstring = []
		  for (var prop in val){
		  	if (typeof val[prop] !== 'function' && val[prop] !== undefined){
		      JSONstring.push(stringifyJSON(prop) + ':' + stringifyJSON(val[prop]))
		    }
		  }
		  return '{' + JSONstring.join(',') + '}'
		}
	}
}



function isEmpty(val) { 
  for (var prop in val ){ 
    return false; 
  } 
  return true; 
}