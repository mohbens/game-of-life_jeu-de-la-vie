import "./style.scss"
import {useState, useEffect} from "react"
import {nextStep} from "../../algo/life.mjs"
import {Resize} from "../../algo/resize.mjs"
import {
  GetAllPatternNames,
  getTabByPatternName,
} from "../../algo/data/patternes"

function CreatGrid(gridValues) {
  var height =
    (gridValues[0].length === 0 ? 100 : 100 / gridValues[0].length) + "%"

  var gridElements = []
  gridValues.forEach((line, i) => {
    var gridlines = []
    line.forEach((box, j) => {
      let style = box === 0 ? "white" : "black"
      gridlines.push(
        <div
          className="element "
          style={{backgroundColor: style, height: height}}
        ></div>
      )
    })
    gridElements.push(
      <div className="line" style={{width: height}}>
        {gridlines}
      </div>
    )
  })

  return gridElements
}

function Home() {
  const [active, activate] = useState(false)

  const initValues = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]
  const [gridSize, setGridSize] = useState(initValues.length)

  var [gridValues, setGridValues] = useState(initValues)

  const startStop = () => {
    activate(!active)
  }
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setGridValues(nextStep(gridValues))
      }, 150)
    }
  }, [gridValues, active])

  const updateSize = (size) => {
    setGridSize(size)

    setGridValues(Resize(gridValues, gridSize))
  }

  // function handleClick(element) {
  // setGridValues((getTabByPatternName(element))

  // }
  let handleClick = (element) => {
    console.log(element.name)
    setGridValues(element.tab)
  }

  function GetAllPatternsElements() {
    const elements = []
    const patterns = GetAllPatternNames()

    patterns.forEach((element) => {
      elements.push(
        <div className="onePattern">
          <div
            className="patternName"
            key={element.name}
            onClick={() => handleClick(element)}
          >
            {element.name}
          </div>

          <img
            className="patternImg"
            src={element.img}
            alt={element.name}
          ></img>
        </div>
      )
    })
    // console.log(elements)
    return elements
  }

  return (
    <div className="home">
      <div className="header">
        <input
          id="input"
          type="number"
          onChange={(e) => updateSize(e.target.value)}
          value={gridSize}
          step="2"
        />
        <button className="btn" onClick={startStop}>
          {active ? "stop" : "start"}
        </button>
        <div className="titlePattern">Patterns</div>
        <div className="patterns">
          <GetAllPatternsElements />
        </div>
      </div>
      <div className="grid">{CreatGrid(gridValues)}</div>
    </div>
  )
}

export default Home
