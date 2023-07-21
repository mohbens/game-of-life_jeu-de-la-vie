import {Resize} from "../algo/resize.mjs"

const tests = {
  test1: {
    title: "test 1 agrandir Tab",
    input1: [
      [1, 1],
      [1, 1],
    ],
    input2: 5,
    output: [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  test2: {
    title: "test 2 reduire Tab",
    input1: [
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
    ],
    input2: 2,
    output: [
      [1, 1],
      [0, 1],
    ],
  },
  test3: {
    title: "test 3 reduire Tab",
    input1: [
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
    ],
    input2: 4,
    output: [
      [0, 1, 0, 0],
      [0, 1, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 0],
    ],
  },
}

for (const [key, test] of Object.entries(tests)) {
  console.log(key)
  var input1 = test.input1
  var input2 = test.input2
  var output = test.output

  var result = Resize(input1, input2)

  console.log(input1)
  console.log(input2)
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
