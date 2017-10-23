
function shellSort(arr) {
  var h = 1 
  while(h < arr.length/3) h = 3*h+1

  while(h >=1){
    for(var i = h; i < arr.length; i++) {
      for(var j = i; j >= h && (arr[j] < arr[j-h]); j -=h) {
 	  swap(arr, j, j-h)
	}
    }
   h = Math.floor(h/3)
  }
}

var arr = [ 10, 1, 2, 4, 3, 22, 123, 0]

function swap(arr, index, index1) {

  var temp = arr[index];
  arr[index] = arr[index1]
  arr[index1] = temp;

}

shellSort(arr)
console.log(arr)