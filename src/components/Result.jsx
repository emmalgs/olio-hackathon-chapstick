import PropTypes from 'prop-types'

function Result(props) {
  return (
    <div>
      <img src={props.img} alt="an image" className='cooked-food'/>
      <div className='recipe'>
      {props.message.map((paragraph, index) => {
        return (
          <p key={index}>{paragraph}</p>
        )
      })}
      </div>
      <button onClick={props.back}>Back to form</button>
    </div>
  )
}

Result.propTypes = {
  img: PropTypes.string,
  message: PropTypes.array,
  back: PropTypes.func
}

export default Result;