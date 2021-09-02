import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login'
import Home from './pages/home'

/**
 * 应用根组件
 */
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default App
