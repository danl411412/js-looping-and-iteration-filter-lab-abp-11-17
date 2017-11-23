// Code your solution in this file
findMatching(arr, name) {
    const filterFunc(x) {
      return x === name;
    }
    return arr.filter(filterFunc(x))
}
