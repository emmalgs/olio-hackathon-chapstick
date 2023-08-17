import PropTypes from 'prop-types'
function Form(props) {
  const getResponse = (e) => {
    e.preventDefault()
    console.log(e.target.diet.value)
    const message = `Could you give me a recipe that is zero waste? I want this recipe to focus on food near me in ${e.target.location.value} and follows these dietary requirements: egg.`
    props.talkToChad(message)
  }

  return (
    <div>
      <form onSubmit={getResponse}> 
        <label>My location</label><input type='text' name='location' placeholder='Location'/>
        <label>Omnivore</label><input type='checkbox' name='diet' value='omnivore' />
        <label>Herbavore</label><input type='checkbox' name='diet' value='herbavore' />
        <label>Vegan</label><input type='checkbox' name='diet' value='vegan' />
        <label>Whole30</label><input type='checkbox' name='diet' value='whole30' />
        <label>Gluten Free</label><input type='checkbox' name='diet' value='gluten-free' />
        <label>Nut-free</label><input type='checkbox' name='diet' value='nut-free' />
        <label>Dairy-free</label><input type='checkbox' name='diet' value='dairy-free' />
        <label>Raw</label><input type='checkbox' name='diet' value='raw' />
        <button type="submit">Give Me Recipes</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  talkToChad: PropTypes.func,
}

export default Form;