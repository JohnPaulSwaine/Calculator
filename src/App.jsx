import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'

const Calculator = () => {

  const [input, setInput] = useState('')
  const buttons = [
    '', "%", "/", "C",
    "7", "8", "9", "*",
    "4", "5","6", "-",
    "1", "2", "3", "+", 
    "0", ".", "="]

    const handleClick = (value) => {
      if (value === 'C') {
        setInput('');
      } else if (value === '=') {
        try {
          setInput(evaluate(input).toString());
        } catch (error) {
          setInput('Error');
        }
      } else {
        setInput(input + value);
      }
    };

  return (
      <div className="centre">
        <h2>John's Toffees' Calculator</h2>

        <h4 className="inputBox">{input}</h4>
        <div className="buttons">
          {
            buttons.map((button) => {
              return (
                <button key={button} onClick={() => handleClick(button)} className="btn">{button}</button>
              )
            })
          }
        </div>

      </div>
  )
  
}

export default Calculator