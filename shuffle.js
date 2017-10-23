var arr = [ 10, 1, 2, 4, 3, 22, 123, 0]

function knuthShuffle(arr) {
  for(var i = 0; i < arr.length; i++) {
    var random = Math.floor(Math.random() * i)

    swap(arr, i , random)
  }
} 


function swap(arr, index, index1) {

  var temp = arr[index];
  arr[index] = arr[index1]
  arr[index1] = temp;

}

knuthShuffle(arr)
console.log(arr)