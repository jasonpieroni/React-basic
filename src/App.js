import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pick Your Favorite Color</h1>
      <select name="list" id="list">
      <option value="blue">blue</option>
      <option value="red">red</option>
      <option value="green">green</option>
      <option value="yellow">yellow</option>
      <option value="purple">purple</option>
      <option value="orange">orange</option>
      </select>
    </div>
  );
}

export default App;
