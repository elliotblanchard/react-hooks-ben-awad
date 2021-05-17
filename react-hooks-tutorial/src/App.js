import React, {useEffect, useState} from "react"
import { useForm } from "./useForm"
import { useFetch } from "./useFetch"

const App = () => {
  // useState is a replacement for set state
  // useForm is a custom wrapper for useState
  const [count1, setCount1] = useState(() => JSON.parse(localStorage.getItem("count1")))
  const [count2, setCount2] = useState(20)
  const [values, handleChange] = useForm({ 
    email: "",
    password: "",
    firstName: "" 
  })

  useEffect(() => {
    // the useEffect() hook is only called when the items
    // in the array change - use this to cut down on re-renders
    // can replace componentDidMount and componenetDidUnmount
    // good place to add and remove event listeners
    console.log("render")
  }, [values.email, values.password])

  // custom hook that uses useState and useEffect
  // to fetch data from an api - changes every time
  // count1 changes
  const { data, loading } = useFetch(`http://numbersapi.com/${count1}/trivia`)

  // every time count1 changes, save it to local storage
  useEffect(() => {
    localStorage.setItem("count1", JSON.stringify(count1))
  }, [count1])

  return (
    <div>
      <div>{loading ? "loading..." : data}</div>
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
        <input 
          name="email" 
          placeholder="email"
          value={values.email} 
          onChange={handleChange} 
        />
        <input 
          name="firstName" 
          placeholder="first name"
          value={values.firstName} 
          onChange={handleChange} 
        />        
        <input 
          type="password" 
          name="password" 
          placeholder="password"
          value={values.password} 
          onChange={handleChange} 
        />
      </div>
    </div>
  )
}

export default App
