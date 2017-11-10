class PriorityQueue {
   constructor(){
      this.data = {}
      this.numOfElements = 0;
   }

   isEmpty() {
     return this.data.length === 0
   }
   
   insert(item) {
	this.data[this.numOfElements++] = item
   }

   delMax() {
      var max = 0;
      for(var i = 1;i < this.numOfElements; i++) {
	if(max < i) max = i
      }  
      swap(this.data, max, this.numOfElements -1)
      return this.data[--this.numOfElements]
   }
}

function swap(arr, index, index1) {

  var temp = arr[index];
  arr[index] = arr[index1]
  arr[index1] = temp;

}

var pq = new PriorityQueue()

pq.insert(3)

pq.insert(33)
pq.insert(31)
pq.insert(3111)

console.log(pq.delMax())
console.log(pq.delMax())
console.log(pq.data)