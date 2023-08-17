import PropTypes from 'prop-types'

function Result(props) {
  const paragraphs = props.message.split('/n')
  console.log(paragraphs)
  return (
    <div>
      <img src={props.img} alt="an image"/>
      <p>{props.message}</p>
      <button onClick={props.back}>Back to form</button>
    </div>
  )
}

Result.propTypes = {
  img: PropTypes.string,
  message: PropTypes.string,
  back: PropTypes.func
}

export default Result;