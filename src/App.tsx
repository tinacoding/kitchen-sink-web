import React from 'react'
import './App.css'
import A11yRadio from './components/a11y/Inputs/RadioButton'

function App() {
  return (
    <div className='App'>
      <A11yRadio>
        <A11yRadio.RadioButton
          id='hello-world'
          name='app'
          label='Sample Radio Button'
        />
        <A11yRadio.RadioButton
          id='hello-world1'
          name='app'
          label='Another Sample Radio Button'
        />
      </A11yRadio>
    </div>
  )
}

export default App
