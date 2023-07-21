export const Resize = (Table, newSize) => {
  if (newSize === Table.length) {
    return Table
  }

  if (newSize > Table.length) {
    var offset = Math.trunc((newSize - Table.length) / 2)
    var newTab = []
    for (var i = 1; i <= newSize; i++) {
      var newLine = []
      for (var j = 1; j <= newSize; j++) {
        newLine.push(0)
      }
      newTab.push(newLine)
    }

    for (var m = 0; m < Table.length; m++) {
      for (var n = 0; n < Table.length; n++) {
        newTab[offset + m][offset + n] = Table[m][n]
      }
    }
  }

  if (newSize < Table.length) {
    offset = Math.trunc((Table.length - newSize) / 2)

    var newTab = []

    for (var a = 0; a < newSize; a++) {
      var newLine = []
      for (var b = 0; b < newSize; b++) {
        newLine.push(Table[offset + a][offset + b])
      }
      newTab.push(newLine)
    }
  }

  return newTab
}
