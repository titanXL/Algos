function BinarySearch(arr, key) {
  var lo = 0, hi = arr.length - 1
  
  while(lo <= hi) {
    var mid = Math.floor((lo + (hi - lo)/ 2 ) )

    if(key < arr[mid]) hi = mid - 1
    else if(key > arr[mid]) lo = mid + 1
    else return mid
    
  }
  return -1
}

var arr = [1, 2, 5, 10, 11, 13]
console.log(BinarySearch(arr, 1))