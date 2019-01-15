import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import StarBank from './StarBank'
import StarChart from '.StarChart'

const App = (props) => {
  return (
  <div>
    <h1>I AM A WEBPAGE</h1>
     <StarBank
      key="1"
      id="star"
    />
    <StarChart />
  </div>
  )
}

export default App
