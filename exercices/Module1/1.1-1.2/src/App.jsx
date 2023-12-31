import './App.css'

import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Total from "./components/Total/Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    {name: part1, number: exercises1},
    {name: part2, number: exercises2},
    {name: part3, number: exercises3},
  ]

  return (
    <div>
      <Header course = {course} />
      <Content part={parts} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}

export default App