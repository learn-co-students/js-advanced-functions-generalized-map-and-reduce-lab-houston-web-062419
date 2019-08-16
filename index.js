function map(array, func){
    let newArray = []

    for(let i = 0; i<array.length; i++){
        let element = array[i]
        newArray.push(func(element))
    }
    return newArray
}

// function reduce(arr, value=0) {
//     map(arr)
// }


function reduce(collection, callback, acc) {
    if (acc) {
      for(var i in collection) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    } else {
      acc = collection[0]
      for(var i = 1; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    }
  }