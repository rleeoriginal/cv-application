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

  return (
    <>
      <Edit />
      <Preview />
    </>
  )
}

export default App


// decide if div goes outside or inside side components