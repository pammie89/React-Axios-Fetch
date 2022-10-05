import 'App.css';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';

console.log("hello World");

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res.data.content);
      setQuote(res.data.content)
  }).catch(err => {
    console.log(err);
  })
  };
  return (
    <div className="App">
      <button id="btn" onClick={getQuote}>Get Quote</button>
      {quote && <p id="par-quote">{quote}</p>}
      </div>
  );
}

export default App;
