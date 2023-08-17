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
    const message = `Could you give me a recipe that has no carbon footprint? I want this recipe to focus on food near me in ${e.target.location.value} and follows these dietary requirements: ${checked}. Could you format your response so that the title of the dish outputs first followed by the Recipe section? And add a section at the end on what I can specifically do with vegetable scraps and plastic waste. Give me three craft projects I can do with waste materials.`;
    props.talkToChad(message);
  };

  return (
    <div>
      <p className="description">Enter a location and we will give you a recipe that is as carbon neutral and zero waste as possible. Our recipes are tailored to the available fresh fruits and vegetables in your area</p>
      <form onSubmit={getResponse}>
        <input type="text" name="location" placeholder="Location" />
        <div className="checkboxes">
          <h3>Please select your dietary preferences</h3>
          <div className="check-line"><label>Omnivore</label>
          <input type="checkbox" name="diet" value="omnivore" onChange={handleChecked}/></div>
          <div className="check-line"><label>Herbavore</label>
          <input type="checkbox" name="diet" value="herbavore" onChange={handleChecked}/></div>
          <div className="check-line"><label>Vegan</label>
          <input type="checkbox" name="diet" value="vegan" onChange={handleChecked}/></div>
          <div className="check-line"><label>Whole30</label>
          <input type="checkbox" name="diet" value="whole30" onChange={handleChecked}/></div>
          <div className="check-line"><label>Gluten Free</label>
          <input type="checkbox" name="diet" value="gluten-free" onChange={handleChecked}/></div>
          <div className="check-line"><label>Nut-free</label>
          <input type="checkbox" name="diet" value="nut-free" onChange={handleChecked}/></div>
          <div className="check-line"><label>Dairy-free</label>
          <input type="checkbox" name="diet" value="dairy-free" onChange={handleChecked}/></div>
          <div className="check-line"><label>Raw</label>
          <input type="checkbox" name="diet" value="raw" onChange={handleChecked}/></div>
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
