import { useState } from 'react'

import  Display  from '../Display/Display.jsx'
import  Button  from '../Button/Button'


const App = () => {
    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")) ?? 0)

    const changeCount = (delta) => {
      localStorage.setItem("counter", JSON.stringify(counter + delta))
      setCounter(counter + delta)
    }

    
  
    return (
      <div>
        <Display counter={counter}/>
  
        <Button
          changeCount={changeCount}
          delta={1}
          text='plus'
        />
        <Button
          changeCount={changeCount}
          delta ={-counter}
          text='zero'
        />     
        <Button
          changeCount={changeCount}
          delta={-1}
          text='minus'
        />           
      </div>
    )
  }

export default App