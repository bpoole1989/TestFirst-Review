const accessor = obj => {
  return (key, value) => {
    if (value === undefined) {
      return obj[key];
    }
    obj[key] = value;
  };
};
