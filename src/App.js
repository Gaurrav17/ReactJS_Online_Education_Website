import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './components/auth/Login.jsx';
import Courses from './components/courses/courses.jsx';
import Home from "./components/Home/home.jsx"
import Footer from './components/layout/footer/Footer.js';
import Header from './components/layout/header/Header.jsx';

function App() {
  const [isHeader,setIsHeader] = useState(true);
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home setIsHeader={setIsHeader} />} />
        <Route path='/courses' element={<Courses setIsHeader={setIsHeader}/>} />
        <Route path='/signin' element={<Login setIsHeader={setIsHeader} />} />
      </Routes>

      {isHeader && 
      <Footer/>
      }
      
    </Router>
  );
}

export default App;
