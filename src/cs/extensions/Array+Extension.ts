interface Array<T> {
  pushAll(other: T[]): this

  randomize(): this

  first(): T

  second(): T

  third(): T

  last(): T

  lastIndex(): number

}

Array.prototype.pushAll = function (other) {
  this.push(...other)
  return this
}

Array.prototype.randomize = function () {
  this.sort(() => Math.random() * 2 - 1)
  return this
}

Array.prototype.first = function <T>(): T { return this[0] }
Array.prototype.second = function <T>(): T { return this[1] }
Array.prototype.third = function <T>(): T { return this[2] }
Array.prototype.last = function <T>(): T { return this[this.lastIndex()] }
Array.prototype.lastIndex = function (): number { return this.length - 1 }

// Object.defineProperty(Array.prototype, 'lastIndex', {
//   get(this: Array) {return this.length - 1},
//   enumerable: false,
//   configurable: true
// })


