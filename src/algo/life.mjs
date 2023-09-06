export const NextRound = (values) => {
  if (values.length === 0) {
    return null
  }

  const nbLines = values.length
  for (var i = 0; i < values.length; i++) {
    var columns = values[i]
    var nbColumns = columns.length
    if (nbColumns !== nbLines) {
      return null
    }
  }
  const nextTab = nextStep(values)

  return nextTab
}

function extractTab(Tab, i, j) {
  const tab8 = []

  const size = Tab.length

  for (var n = -1; n <= 1; n++) {
    var indexI = i + n

    indexI = (indexI + size) % size

    for (var m = -1; m <= 1; m++) {
      var indexJ = j + m

      indexJ = (indexJ + Tab.length) % Tab.length
      if (!(n === 0 && m === 0)) {
        tab8.push(Tab[indexI][indexJ])
      }
    }
  }
  return tab8
}

function sum(tab) {
  var Sum = 0
  for (var i = 0; i < tab.length; i++) {
    Sum = Sum + tab[i]
  }
  return Sum
}

export function nextStep(Tab) {
  const newTab = []

  for (var i = 0; i < Tab.length; i++) {
    const newLine = []
    var columns = Tab[i]
    var nbColumns = columns.length
    for (var j = 0; j < nbColumns; j++) {
      var newValue
      var define = extractTab(Tab, i, j)

      const Sum = sum(define)
      if (Sum === 3) {
        newValue = 1
      } else if (Sum === 2) {
        newValue = Tab[i][j]
      } else {
        newValue = 0
      }
      newLine.push(newValue)
    }
    newTab.push(newLine)
  }

  return newTab
}
