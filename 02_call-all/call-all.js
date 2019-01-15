function callAll(obj, arr) {
  return arr.map(function(fn) {
    return fn.call(obj);
  });
}
