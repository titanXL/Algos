class SymbolTable {
  constructor() {
    this.data = {}
  }
  put(key, value) {
    this.data[key] = value
  }
  get(key) {
    return key ? {key: this.data[key]} : null
  }
  delete(key) {
    this.put(key, null)
  }
  contains(key) {
    return this.get(key) !== null
  }
  isEmpty() {
    return Object.keys(this.data).length > 0 ? false : true
  }
  size() {
    return Object.keys(this.data).length
  }
  keys() {
    return Object.keys(this.data)
  }

}

const test = 'alabalaportokala'

let st = new SymbolTable()
test.split('').forEach((el, index) => {
  st.put(el, index)
}) 

console.log(st)