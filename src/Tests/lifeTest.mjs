// const NextRound = require("../algo/life")
import {NextRound} from "../algo/life.mjs"
const tests = {
  test1: {
    title: "test unsquare 1",
    input: [
      [1, 1, 1],
      [0, 0, 1],
    ],
    output: null,
  },
  test2: {
    title: "test unsquare 2",
    input: [
      [1, 1, 1],
      [0, 0],
      [0, 1],
    ],
    output: null,
  },
  test3: {
    title: "test unsquare 3",
    input: [
      [1, 1, 0, 1],
      [0, 0],
      [0, 1],
    ],
    output: null,
  },
  test4: {
    title: "test empty",
    input: [],
    output: null,
  },
  test5: {
    title: "test stable",
    input: [
      [0, 0],
      [0, 0],
    ],
    output: [
      [0, 0],
      [0, 0],
    ],
  },

  test6: {
    title: "test algo returning next step",
    input: [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 1],
    ],
    output: [
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
    ],
  },

  test7: {
    title: "test algo in special cases",
    input: [
      [0, 0, 0, 0, 0, 1, 1, 0],
      [1, 1, 1, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
    ],
    output: [
      [0, 1, 0, 0, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
    ],
  },
}
for (const [key, test] of Object.entries(tests)) {
  console.log(key)
  var input = test.input
  var output = test.output

  var result = NextRound(input)

  console.log(input)
  console.log(result)

  var success = Array.isArray(output)
    ? testArrays(result, output)
    : result === output

  if (success) {
    console.log(test.title + " success")
  } else {
    console.log(test.title + " failed *******************")
  }
}

function testArrays(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2)
}
