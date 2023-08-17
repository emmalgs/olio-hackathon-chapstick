import { useState } from 'react';
import Form from './Form';
import Result from './Result';



function ChadController() {
  const [result, setResult] = useState('')
  const [formVisible, setFormVisible] = useState(true);
  const [image, setImage] = useState('')
  // const [recipeLoaded, setRecipeLoaded] = useState(false);

  const toggleForm = () => {
    setFormVisible(prevState => !prevState)
  }

  const askChad = async(userInput) => {
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{role: 'system', content:
        "You are a fancy chef with helpful ideas and you keep it short and sassy"}, {role: 'user', content: `${userInput}`}]
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.choices[0].message.content)
        toggleForm();
        // setRecipeLoaded(true)
        return data.choices[0].message.content
      })
      .then((resp) => {
        const title = resp.slice(0, 100)
        generateImage(title)
    })
      .catch((error) => {
      console.log(error);
    });
  }

  const generateImage = async (input) => {
    try {
    console.log(input)
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `${input}`,
        n: 1,
        size: "256x256",
        response_format: 'url'
      })
    });
    const output = await response.json();
    console.log(output)
    setImage(output.data[0].url)
  } catch (error) {
    console.log(error);
  }
}

  let currentlyVisible = null;
  if (formVisible) {
    currentlyVisible = <Form talkToChad={askChad} />
  } else {
    currentlyVisible = <Result message={result} back={toggleForm} img={image}/>
  }

  return (
    <div>
      {currentlyVisible}
    </div>
  )
}

export default ChadController;