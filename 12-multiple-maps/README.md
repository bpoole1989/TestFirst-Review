### Multiple Maps

Create the function `multipleMaps` that accepts 2 array arguments and returns an array of the mapped items.

#### Arguments

- `mapper` - the first argument is an array and the values are mapped to the second argument (the maps)
- `maps` - an array of maps, this will be an array of one or multiple objects. Each map is a lookup table to each element from the array in the first argument.

Here are a few examples:

```js
multipleMaps([5, 6, 7], [{ 5: 'five', 6: 'six', 7: 'seven' }]); // returns ==> ['five', 'six', 'seven'];
multipleMaps(['a', 'b', 'c', 'd'], [{ a: 0, b: 1, c: 2, d: 3 }]); // returns ==> [0, 1, 2, 3]
```

```js
multipleMaps([1, 2, 3, 4], [{ 1: '!', 2: '@' }, { 3: '#', 4: '$' }]); // returns ==> ['!', '@', '#', '$'];
multipleMaps(['a', 'b', 'c', 'd'], [{ a: 0, b: 1 }, { c: 2 }, { d: 3 }]);
```
