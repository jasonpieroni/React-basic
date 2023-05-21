import { useState } from 'react'
import './App.css';

function App() {
  const [color, setColor] = useState('')
  const [message, setMessage] = useState('')

const handleSubmit = () => {
  if (color) {
    setMessage(`Thanks for selecting ${color}`)
  } else {
    setMessage('Please select a color')
  }
}

const handleColorChange = (e) => {
  setColor(e.target.value)
}
  return (
    <div className="App">
      <h1>Pick Your Favorite Color</h1>
      <select name="list" id="list" value={color} onChange={handleColorChange}>
      <option value='blue'>blue</option>
      <option value='red'>red</option>
      <option value='green'>green</option>
      <option value='yellow'>yellow</option>
      <option value='purple'>purple</option>
      <option value='orange'>orange</option>
      </select>
      <button type='submit' onClick={handleSubmit}>Submit</button>
      <br />
      <p>{message}</p>
    </div>
  );
}

export default App;
