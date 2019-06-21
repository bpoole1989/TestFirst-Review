### Array.prototype

#### Description

Just like you did in TestFirst, you are tasked once again to recreate a few `Array.prototype` methods. Here is the twist, you will actually replace (re-assign) your own version of the method to the Array.prototype method.

Here are a few thoughts to keep in mind when approaching the problem:

- When you call `arr.map((val) => console.log(val))`, how does the `.map` method access
  the `arr` it is called on? (Hint: you got **this**!)
- Do not worry about optional arguments, focus on the callback function passed to map/filter and the first argument passed to the callback function.
