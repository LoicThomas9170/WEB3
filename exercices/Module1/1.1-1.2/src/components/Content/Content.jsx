const Content = (props) => {
    return (
      <div>
        <p>{props.part[0].name} {props.part[0].number}</p>
        <p>{props.part[1].name} {props.part[1].number}</p>
        <p>{props.part[2].name} {props.part[2].number}</p>
      </div>
    )
  }

export default Content