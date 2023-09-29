import Part from "./Part/Part"

const Content = ({parts}) => {
    return (
      <>
        {parts.map(part => (
          <Part name={part.name} number={part.exercises} key={part.id}/>
        ))}
      </>
    )
  }

export default Content