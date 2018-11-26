export function createTable (x, y) {
  const table = new Array(x)
  for (var i = 0; i < x; i++) {
    table[i] = new Array(y)
  }
  return table
}

export default {
  createTable
}
