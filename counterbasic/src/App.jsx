import { useState } from 'react'
import './App.css'
import IconSideNav from './nav';


function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20) {
      counter += 1;
      setCounter(counter)
    }
  }

  const deductValue = () => {
    if(counter > 0) {
      counter -= 1;
      setCounter(counter)
    }
  }

  return (
    <>
      <IconSideNav />
      
      <h1>Counter App</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={deductValue}>Deduct Value {counter}</button>
    </>
  )
}

export default App
