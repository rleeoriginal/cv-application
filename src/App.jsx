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

  function clearInfo() {
    setName("")
    setEmail("")
    setNumber("")
    setEducationInfo([])
    setExperienceInfo([])
  }

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

  const example3 = {
    company: "Meta",
    position: "Software Developer",
    startDate: "2020-01-13",
    endDate: "2024-03-23",
    location: "Cupertino, CA",
    description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"
  }

  const example4 = {
    company: "Apple",
    position: "UX Designer",
    startDate: "2019-02-23",
    endDate: "2025-01-13",
    location: "Seattle, WA",
    description: "Prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"
  }

  const [educationInfo, setEducationInfo] = useState([example1, example2])
  const [experienceInfo, setExperienceInfo] = useState([example3, example4])







  return (
    <>    
          <Edit 
            setName={setName}
            setEmail={setEmail}
            setNumber={setNumber}

            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}

            experienceInfo={experienceInfo}
            setExperienceInfo={setExperienceInfo}

            clearInfo={clearInfo}
          />
          
          <Preview />
          
        
      
    </>
  )
}

export default App


// decide if div goes outside or inside side components