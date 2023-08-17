function Result(props) {
  return (
    <div>
      <p>{props.message}</p>
      <button onClick={props.back}>Back to form</button>
    </div>
  )
}

export default Result;