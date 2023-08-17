import { useState } from 'react';
import Form from './Form';
import Result from './Result';


function ChadController() {
  const [result, setResult] = useState('')
  const [formVisible, setFormVisible] = useState(true);

  const toggleForm = () => {
    setFormVisible(prevState => !prevState)
  }

  const askChad = async(userInput) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{role: 'system', content:
        "You are a wacky but hopeful future inventor of sustainable inventions"}, {role: 'user', content: `${userInput}`}]
        }),
      });
      const data = await response.json();
      console.log(data);
      setResult(data.choices[0].message.content)
      console.log(result)
      toggleForm();
    } catch(error) {
      console.log(error);
    }
  }

  let currentlyVisible = null;
  if (formVisible) {
    currentlyVisible = <Form talkToChad={askChad}/>
  } else {
    currentlyVisible = <Result back={toggleForm} message={result} />
  }

  return (
    <div>
      {currentlyVisible}
    </div>
  )
}

export default ChadController;