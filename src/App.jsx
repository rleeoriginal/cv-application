import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Edit from './components/Edit'
import Preview from './components/Preview'

// Import Bootstrap's css
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'



function App() {

  // general vars
  const [name, setName] = useState("")
  const [email, setEmail] = useState ("")
  const [number, setNumber] = useState ("")

  // education vars
  const [school, setSchool] = useState("")
  const [study, setStudy] = useState("")
  const [date, setDate] = useState("")

  // experience vars
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState ("")
  const [description, setDescription] = useState("")

  return (
    <>
      <Edit 
        setName={setName}
        setEmail={setEmail}
        setNumber={setNumber}

        setSchool={setSchool}
        setStudy={setStudy}
        setDate={setDate}

        setCompany={setCompany}
        setPosition={setPosition}
        setDescription={setDescription}
      />
      <Preview test={name}/>

    </>
  )
}

export default App


// decide if div goes outside or inside side components