import PropTypes from "prop-types";
import { useState } from 'react';

function Form(props) {
  const [checked, setChecked] = useState('');
  const handleChecked = (e) => {
    if (e.target.checked) {
      const checkList = `${checked} ${e.target.value}`
      setChecked(checkList)
    }
  }

  const getResponse = (e) => {
    e.preventDefault();
    console.log(e.target.diet.value);
    const message = `Could you give me a recipe that has no carbon footprint? I want this recipe to focus on food near me in ${e.target.location.value} and follows these dietary requirements: ${checked}. If the recipe has any waste I want ideas for things I can make out of the waste. Could you format your response so that the title of the dish outputs first?`;
    props.talkToChad(message);
    // props.createImage();
  };

  return (
    <div>
      <form onSubmit={getResponse}>
        <label>My location</label>
        <input type="text" name="location" placeholder="Location" />
        <div>
          <label>Omnivore</label>
          <input type="checkbox" name="diet" value="omnivore" onChange={handleChecked}/>
          <label>Herbavore</label>
          <input type="checkbox" name="diet" value="herbavore" onChange={handleChecked}/>
          <label>Vegan</label>
          <input type="checkbox" name="diet" value="vegan" onChange={handleChecked}/>
          <label>Whole30</label>
          <input type="checkbox" name="diet" value="whole30" onChange={handleChecked}/>
          <label>Gluten Free</label>
          <input type="checkbox" name="diet" value="gluten-free" onChange={handleChecked}/>
          <label>Nut-free</label>
          <input type="checkbox" name="diet" value="nut-free" onChange={handleChecked}/>
          <label>Dairy-free</label>
          <input type="checkbox" name="diet" value="dairy-free" onChange={handleChecked}/>
          <label>Raw</label>
          <input type="checkbox" name="diet" value="raw" onChange={handleChecked}/>
        </div>
        <button type="submit">Give Me Recipes</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  talkToChad: PropTypes.func,
  createImage: PropTypes.func
};

export default Form;
