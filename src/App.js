import React from 'react';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Courses from './components/courses/courses.jsx';
import Home from "./components/Home/home.jsx"
import Header from './components/layout/header/Header.jsx';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/courses' element={<Courses/>} />
      </Routes>
    </Router>
  );
}

export default App;
