class UF{
  constructor(n){
    this.data = []
    this.entries = n
  }
  
  init() {
    for(var i = 0; i< this.entries; i++) {
	this.data.push(i)
    }
  }
  
  connected(p, q) {
     return this.data[p] === this.data[q]	
  }

  union(p, q) {
    var pid = this.data[p]
    var qid = this.data[q]
    
    for(var i = 0; i < this.data.length; i++) {
	if(this.data[i] === pid) this.data[i] = qid
    }
  }

  
}


//  var uf = new UF(10);
//  uf.init()

//  var lineReader = require('readline').createInterface({
//  input: require('fs').createReadStream('test.txt')
// });


//  lineReader.on('line', function (line) {
//  uf.union(1, 2)
//  uf.union(3, 1)
//  console.log(uf.connected(2, 3))
//  console.log(uf.data)
// });

class QuickU{
  constructor(n) {
    this.data = []
    this.sz = []
    this.entries = n
    this.maxes = []
  }

  init() {
    for(var i = 0; i < this.entries; i++) {
	this.data.push(i)
        this.sz.push(1)
        this.maxes.push(-1)
    }
  }

  root(i) {
    var j = i;
    while(i !== this.data[i]) {
       this.data[i] = this.data[this.data[i]]
       i = this.data[i]
	
      if(this.maxes[i] < j) this.maxes[i] = j
    }
    return i
  }

  connected(p, q) {
     return this.root(p) === this.root(q)
  }

  union(p, q) {
    var i = this.root(p)
    var j = this.root(q)
    if(i === j) return
    if(this.sz[i] < this.sz[j]) {
      this.data[i] = j;
      this.sz[j] += this.sz[i]
    } else {
      this.data[j] = i
      this.sz[i] += this.sz[j]
    }
  }

  find(l) {
     return this.maxes[this.root(l)]
  }

}


var qu = new QuickU(10);
qu.init()

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('test.txt')
});


lineReader.on('line', function (line) {
  console.log(qu.connected(2, 3))
  qu.union(1, 2)
  console.log(qu.data)
  qu.union(3, 2)
  console.log(qu.connected(2, 3))
  console.log(qu.data)
  console.log(qu.sz)
  qu.union(4, 5)
  qu.union(5, 6)
  qu.union(4, 7)
  console.log(qu.find(4))
  console.log(qu.maxes)
});

1. Generate N * N board all blocked
2. Union all first row to a common root
3. Union all btm row to a common root
4. Start generating random open blocks untill percolation is true => root of top rows is connected to root of btm rows using weighted union find
