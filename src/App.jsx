import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import EditSide from './components/EditSide'
import ResumeSide from './components/ResumeSide'

function App() {

  return (
    <>
      <div>
        <EditSide />
        <ResumeSide />
      </div>
    </>
  )
}

export default App


// decide if div goes outside or inside side components