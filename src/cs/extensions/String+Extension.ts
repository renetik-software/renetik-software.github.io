interface String {
  toBoolean(): boolean

  equals(value: any): boolean

  jsonParse(): any
}

String.prototype.toBoolean = function(): boolean {
  switch (this) {
    case 'true':
    case '1':
    case 'on':
    case 'yes':
      return true
    default:
      return false
  }
}

String.prototype.equals = function(value: any): boolean {
  return this === value
}

String.prototype.jsonParse = function(): any {
  return JSON.parse(this.toString())
}
