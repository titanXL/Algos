class Node {
  constructor(key, value) {
     this.key = key
     this.value = value
     this.left = null
     this.right = null
     this.count = 0
  }
}

class BST {
  constructor(){
    this.root = null
  }
  size() {
    return this.sizeNode(root)
  }
  sizeNode(node) {
    if(node === null) return 0
    return node.count
  }
  put(key, val) {
    this.root = this.putNode(this.root, key, val)
  }
  putNode(node, key, val) {

    if(node === null) return new Node(key, val)
    let cmp = key > node.key ? 1 : -1
    if(cmp < 0) {
      node.left = this.putNode(node.left, key, val)
    } else if (cmp > 0) {
      node.right = this.putNode(node.right, key, val)
    } else {
      node.val = val
    }

    node.count = 1 + this.sizeNode(node.left) + this.sizeNode(node.right)
    return node
  }
  floor(key) {
    let node = this.floorNode(this.root, key)
    if(node === null) return null
    return node.key
  }
  floorNode(node, key){
    if(node === null) return null
    var cmp
    if(key > node.key) cmp = 1
    if(key < node.key) cmp = -1
    else cmp = 0
    
	console.log(cmp)

    if(cmp === 0) return node
    if(cmp < 0) return this.floorNode(node.left, key)
    
    var t = this.floorNode(node.right, key)
    if(t !== null) return t
    else return node
  }
  get(key) {
     let x = this.root
     while(x !== null) {
	var cmp
        if(key > x.key) cmp = 1
        if(key < x.key) cmp = -1
        else cmp = 0

	if(cmp < 0) x = x.left
	else if (cmp > 0) x = x.right
	else return x.value
     }
     return null

  }
  rank(key) {
    return this.rankNode(key, this.root)
  }
  rankNode(key, node) {
    if (node === null) return 0
    var cmp
    if(key > node.key) cmp = 1
    if(key < node.key) cmp = -1
    else cmp = 0
    if(cmp < 0) return this.rankNode(key, node.left)
    else if(cmp > 0) return this.rankNode(key, node.right)
    else return this.sizeNode(node.left)
  }
  delete(key) {
    
  }
  iterator() {
    
  }
}

var bst = new BST()
bst.put('B', 3)
bst.put('A', 2)
bst.put('C', 1)
bst.put('D', 0)
console.log(bst)