import React from 'react'

const App = (props) => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      { 
        name: 'Using props to pass data',
        exercises: 7 
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const name = 'Peter'  
  const age = 10

  const {counter} = props

  return (
    <>
      <Header course={course.name}/>

      <Content parts={course.parts}/>
      
      <Total parts={course.parts}/>

      <div>
        <h1>Greetings</h1>
        <Hello name='Maya' age={26 + 10}/>
        <Hello name={name} age={age}/>
      </div>

      <div>
        {counter}
      </div>
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  const parts = props.parts
  let x = 0
  parts.forEach(value => {
    x += value.exercises
  })

  return (
    <p>
      Number of exercises {x}
    </p>
  )
}

const Hello = (props) => {
  // const name = props.name
  // const age = props.age
  // -- OR --
  const {name, age} = props

  const bornYear = () => new Date().getFullYear() - age

  return (
    <>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  )
}

export default App;

// https://fullstackopen.com/en/part1/java_script