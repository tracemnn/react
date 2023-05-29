import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/homepage';
import SignUp from './components/signup';
import Login from './components/login';
import ListCard from './components/listcontent';
import Test from './components/test';
import Result from './components/result';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={< SignUp />} />
          <Route path="/sign-in" element={< Login />} />
          <Route path="/list-card" element={< ListCard />} />
          <Route path="/test" element={< Test />} />
          <Route path="/result" element={< Result />} />
        </Routes>
      </div>
    </Router>
    
  );
}
 
export default App;
