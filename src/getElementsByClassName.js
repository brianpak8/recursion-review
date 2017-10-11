// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var result = [];
  var traverse = function(node) {
    if (node.classList.contains(className)) {
      
      result.push(node);
    }
    if (node.hasChildNodes()) {
      var children = node.children;
      for (var i = 0; i < children.length; i++) {
        traverse(children[i]);
      }
    }  
  // 
  };
  traverse(document.body);
  
  
  
  return result;
};




 