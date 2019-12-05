import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Detalhes from './Detalhes'

function App() {
  return (
    <HashRouter basename='/'>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/detalhes/:id' component={Detalhes} />
    </HashRouter>
  )
}

export default App
