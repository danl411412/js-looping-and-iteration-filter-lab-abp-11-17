// Code your solution in this file
findingMatching(arr, name) {
    const filterFunc(x) {
      return x === name;
    }
    return arr.filter(filterFunc(x))
}