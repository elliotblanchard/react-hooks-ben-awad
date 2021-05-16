import React, {useState} from "react"
import { useForm } from "./useForm"

const App = () => {
  const [count1, setCount1] = useState(10)
  const [count2, setCount2] = useState(20)
  const [values, handleChange] = useForm({ email: "", password: "" })

  return (
    <div>
      <button 
        onClick = {() => {
          setCount1(c => c + 1)
          }}
      >
        1+
      </button>
      <button 
        onClick = {() => {
          setCount2(c => c + 1)
          }}
      >
        2+
      </button>      
      <div>count 1: {count1}</div>
      <div>count 2: {count2}</div>
      <div>
        <input name="email" value={values.email} onChange={handleChange} />
        <input 
          type="password" 
          name="password" 
          value={values.password} 
          onChange={handleChange} 
        />
      </div>
    </div>
  )
}

export default App
