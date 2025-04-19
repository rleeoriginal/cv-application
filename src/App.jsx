import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Edit from './components/Edit'
import Preview from './components/Preview'
import {example1, example2, example3, example4} from "./example"

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

  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("name@example.com")
  const [number, setNumber] = useState("123-456-7890")
  const [location, setLocation] = useState("San Francisco, CA")

  const [educationInfo, setEducationInfo] = useState([example1, example2])
  const [experienceInfo, setExperienceInfo] = useState([example3, example4])

  return (
    <> 
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-4">
            <Edit 
                setName={setName}
                setEmail={setEmail}
                setNumber={setNumber}
                setLocation={setLocation}

                educationInfo={educationInfo}
                setEducationInfo={setEducationInfo}

                experienceInfo={experienceInfo}
                setExperienceInfo={setExperienceInfo}

                clearInfo={clearInfo}
              />
          </div>
          <div className="col-8 d-flex flex-column">
            <Preview
              name={name}
              email={email}
              number={number}
              location={location}
              educationInfo={educationInfo}
              experienceInfo={experienceInfo}
            />
          </div>

        </div>

            

      </div>

          
        
      
    </>
  )
}

export default App


// decide if div goes outside or inside side components