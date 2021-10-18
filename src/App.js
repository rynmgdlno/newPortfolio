import React from 'react'
import { Route, HashRouter } from 'react-router-dom';

import Container from './components/container';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Route exact path='/' render={(props) => <Container {...props}  />}/>
    </HashRouter>
  )
}

export default App;
