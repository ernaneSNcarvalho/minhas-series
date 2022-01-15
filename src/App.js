import React from 'react'
import Header from './Header'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const generos = () => {
  return <h1>Generos</h1>
}

const home = () => {
  return <h1>Home</h1>
}

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Route path='/' component={home} />
      </div>
    </Router>
  )
}

export default App;
