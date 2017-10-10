// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }
  
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (Array.isArray(obj)) {
    //itterate array
    //at the end return `[ ${strJson(i)} ]`
    var mapped = obj.map(function(element) {
      return stringifyJSON(element);
    });
    return `[${mapped}]`;
  }
  
  
  
  
  return obj.toString();
};
