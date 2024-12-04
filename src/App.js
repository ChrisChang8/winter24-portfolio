import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Homescreen';
import Navbar from './Pages/Home/Navbar';
import Footer from './Pages/Home/Footer';
import AllProjects from './Pages/Projects/allProjects';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/allProjects" element={<AllProjects/>} />
            </Routes>
            <Footer/>
          </div>
        </Router>
    </div>
  );
}

export default App;
