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
      const response = await fetch()
    }
  }

  let currentlyVisible = null;
  if (formVisible) {
    currentlyVisible = <Form talkToChad={askChad} />
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