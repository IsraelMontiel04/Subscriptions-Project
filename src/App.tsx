import './App.css'
import Headers from './Component/Headers'
import FormAddMoney from './Component/FormAddMoney'
import MainControl from './Component/MainControl'

import { useState } from 'react'
function App() {
  
  const[count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false)

  const component = isValid ? <MainControl count={count}/> : <FormAddMoney setCount={setCount} setIsValid={setIsValid}  />

  return (
    <div className='App'>
      <Headers/>
      {component}
    </div>
  )
}

export default App
