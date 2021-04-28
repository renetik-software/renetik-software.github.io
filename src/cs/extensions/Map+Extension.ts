interface Map<K, V> {
  valuesArray(): V[]

  keysArray(): K[]
}

Map.prototype.keysArray = function <K, V>(): K[] {
  const array = new Array<K>()
  for (const project of this.keys()) array.push(project)
  return array
}

Map.prototype.valuesArray = function <K, V>(): V[] {
  const array = new Array<V>()
  for (const project of this.values()) array.push(project)
  return array
}


