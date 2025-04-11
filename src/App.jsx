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

  // education var
  const example1 = {
    school: "University of Southern California",
    degree: "Bachelors of Science",
    startDate: "2020-04-11",
    endDate: "2025-04-11",
    location: "Los Angeles, CA"
  }
  const example2 = {
    school: "University of Loyola Marymount",
    degree: "Bachelors of Art",
    startDate: "2019-03-12",
    endDate: "2023-05-25",
    location: "Los Angeles, CA"
  }

  const [educationInfo, setEducationInfo] = useState([example1, example2])

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

        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}

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