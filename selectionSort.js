var arr = [ 10, 1, 2, 4, 3, 22, 123, 0]

function selectionSort(arr) {

  for(var i = 0;i< arr.length; i++) {
    var min = i;
    
     for(var j = i+1; j< arr.length;j++) {
      if(arr[j] < arr[min]){
        min = j
      }
      
    }

    swap(arr, i, min)
  }
}

function swap(arr, i, min) {

  var temp = arr[i];
  arr[i] = arr[min]
  arr[min] = temp;

}

selectionSort(arr)

console.log(arr)