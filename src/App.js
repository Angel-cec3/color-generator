import React, { useState } from 'react'
import SingleColor, { ToastForClipboard } from './SingleColor'
import Values from 'values.js'

function App() {
    const [color, setColor] = useState('');
    const [variations, setVariations] = useState(10);
    const [error, setError] = useState(false);
    // generates an array of 10 color values based on the initial color value using Values class from values library
    const [list, setList] = useState(new Values("#60200f").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(variations);
            setList(colors);
            setError(false);
        } catch(error) {
            setError(true);
            console.log(error);
        }
    };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#60200f"
            className={`${error ? "error" : null}`}
          ></input>
          <input
            type="text"
            value={variations}
            onChange={(e) => setVariations(Number(e.target.value))}
            placeholder="10"
          ></input>
          <button className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
              variations={variations}
            />
          );
        })}
      </section>
      <ToastForClipboard />
    </>
  );
}

export default App;
