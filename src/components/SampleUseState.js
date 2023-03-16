import {useState} from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Fulano')

  console.log('Component log...')

  return (
    <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(counter-1)}>-</button>
        <hr />

        <h2> Olá {name}</h2>
        <button onClick={() => setName(Renan)}>Renan</button>
        <button onClick={() => setName(Pedro)}>Pedro</button>
    </div>
  )
}

export default SampleUseState