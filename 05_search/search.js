function search(fnc) {
  let boolean = false;
  this.forEach(value => {
    if (Array.isArray(value) && boolean === false) {
      boolean = search.call(value, fnc);
    } else if (fnc(value)) {
      boolean = true;
    }
  });

  return boolean;
}
