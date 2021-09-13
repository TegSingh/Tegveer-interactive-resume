import './index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <React.Fragment>
      <Sidebar />
    </React.Fragment>
  )
}

export default App;
