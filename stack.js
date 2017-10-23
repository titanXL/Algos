class Stack {
  constructor() { 
    this.data = []
  }
  
  push(item) {
    this.data.push(item)
  }

  pop() {
    return this.data.pop()
  }

  isEmpty() {
    return this.data.length === 0
  }
  
  size() {
    return this.data.length
  }
}

var stack = new Stack();
stack.push(1)
stack.push(5)
stack.push(10)
stack.pop()
stack.isEmpty()
console.log(stack.data)