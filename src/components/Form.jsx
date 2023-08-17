
function Form(props) {
  const getResponse = (e) => {
    e.preventDefault()
    const message = `Give me 10 inventions that would help me do ${e.target.value}`
    props.talkToChad(message)
  }

  return (
    <div>
      <form onSubmit={getResponse}> 
        <input type="text" placeholder="Name"/>
        <textarea name="input" id="input" cols="30" rows="10" placeholder="What are you thinking about today?"></textarea>
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default Form;