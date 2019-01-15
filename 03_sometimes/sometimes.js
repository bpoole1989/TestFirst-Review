function sometimes(fn) {
  let invocationCount = 0;
  return function(num1, num2) {
    invocationCount++;
    if (invocationCount >= 4 && invocationCount % 2 === 0) {
      return 'I do not know!';
    }

    console.log(arguments);
    return fn.apply(null, arguments);
    // return fn(num1, num2);
  };
}
