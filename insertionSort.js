var arr = [ 10, 1, 2, 4, 3, 22, 123, 0]

function insertionSort(arr) {

for(var i = 0; i < arr.length; i++) {

  for(var j = i; j > 0; j--) {
    if(arr[j] < arr[j-1]) {
       swap(arr, j, j -1)
    } else break
  }
}

}


function swap(arr, index, index1) {

  var temp = arr[index];
  arr[index] = arr[index1]
  arr[index1] = temp;

}


insertionSort(arr)
console.log(arr)