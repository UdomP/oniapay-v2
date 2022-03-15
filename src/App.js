import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import './App.css'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <div className = 'App'>
      <style jsx global>{
      `body {
        margin: 0px;
        padding: 0px;
      }`
      }</style>

      <Router >
        <Navbar/>
        <Switch>
          <Route path='/' exact component = {Home}/>
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
