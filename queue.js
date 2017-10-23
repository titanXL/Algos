class Queue{
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
  }

  dequeue() {
    return this.data.shift()
  }

  isEmpty() {
    return this.data.length === 0
  }
}

var qu = new Queue()
qu.enqueue(1)
qu.enqueue(5)
qu.enqueue(10)
console.log(qu.data)
console.log(qu.dequeue())
console.log(qu.data)
console.log(qu.dequeue())
console.log(qu.data)
console.log(qu.isEmpty())