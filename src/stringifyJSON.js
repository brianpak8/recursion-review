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
    var holder = '[';
    for ( var i = 0; i < obj.length; i++) {
      if (i === 0) {
        holder += stringifyJSON(obj[i]);
      } else {
        holder += ',' + stringifyJSON(obj[i]);
      }
      
    }
    return holder += ']';
  }
  return obj.toString();
};
