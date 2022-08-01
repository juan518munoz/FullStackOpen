import React from "react"

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Total of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => (
        <Part key={part.id} part={part} />
    ))}
  </>

const Course = ({course}) => {
    const total_exercices = course.parts.reduce(
        (previousValue, currentPart) => 
            previousValue + currentPart.exercises,
            0 // starting value of previousValue
    )
    
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sum={total_exercices} />
        </div>
    )
}


export default Course