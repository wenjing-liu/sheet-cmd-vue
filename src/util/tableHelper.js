export function createTable (x, y) {
  const table = new Array(x)
  for (var i = 0; i < x; i++) {
    table[i] = new Array(y)
  }
  return table
}

export function updateTable (table, x, y, value) {
  table[x][y] = value
  return table
}

export function getValue (table, x, y) {
  return table[x - 1][y - 1]
}

export function sumValue (table, x1, y1, x2, y2) {
  const value1 = getValue(table, x1, y1)
  const value2 = getValue(table, x2, y2)
  if ([undefined, null].includes(value1) && [undefined, null].includes(value2)) {
    return value1 + value2
  }
  return false
}

export default {
  createTable,
  updateTable,
  getValue,
  sumValue
}
