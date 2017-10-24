// two way
var arr = [10, 10, 1, 2, 4, 3, 22, 123, 0]

function QuickSort(arr) {

  sort(arr, 0, arr.length -1)

}

function sort(arr, lo, hi) {
  if(hi <= lo) return
  var j = partition(arr, lo, hi)
  sort(arr, lo, j-1)
  sort(arr, j+1, hi)
}

function partition(a, lo, hi) {

  var i = lo, j = hi+1
  while(true) {
    while(a[++i] < a[lo]){
       if(i === hi) break
     }
    while(a[lo] < a[--j]) {
      if(j === lo) break
    }

    if(i >=j)break
    swap(a, i, j)
  }
  swap(a, lo, j)
  return j

}


function swap(arr, index, index1) {

  var temp = arr[index];
  arr[index] = arr[index1]
  arr[index1] = temp;

}


QuickSort(arr)
console.log(arr)