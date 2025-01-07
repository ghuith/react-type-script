import React from 'react'
import './App.css'
import Counter from './components/counter'
import Greeting from './components/greeting'

const App = () => {
  return (
    <div>
      <Greeting name="hello" />
      <Counter />
      
    </div>
  )
}

export default App
