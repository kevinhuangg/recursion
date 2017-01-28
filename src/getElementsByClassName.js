// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, parent = document.body, results = []) {
  
  if (parent.classList.contains(className))
    results.push(parent);
  
  //recursive case
  for(var i = 0; i < parent.children.length; i++) {
    results.concat(getElementsByClassName(className, parent.children[i], results));
  }
  
  return results;
}