import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Contact from './components/auth/Contact.jsx';
import ForgotPassword from './components/auth/ForgotPassword.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import ResetPassword from './components/auth/ResetPassword.jsx';
import Courses from './components/courses/courses.jsx';
import Home from "./components/Home/home.jsx"
import Footer from './components/layout/footer/Footer.js';
import Header from './components/layout/header/Header.jsx';
import NotFound from './components/not found/NotFound.jsx';
import PaymentFail from './components/payments/PaymentFail.jsx';
import PaymentSuccess from './components/payments/PaymentSuccess.jsx';
import Subscribe from './components/payments/Subscribe.jsx';

function App() {
  const [isHeader,setIsHeader] = useState(true);
  return (
    <Router>
       {isHeader && 
      <Header/>}
      <Routes>
        <Route path='/' element={<Home setIsHeader={setIsHeader} />} />
        <Route path='/courses' element={<Courses setIsHeader={setIsHeader}/>} />
        <Route path='/Contact' element={<Contact setIsHeader={setIsHeader}/>} />
        <Route path='/signin' element={<Login setIsHeader={setIsHeader} />} />
        <Route path='/register' element={<Register setIsHeader={setIsHeader} />} />
        <Route path='/forgot/password' element={<ForgotPassword setIsHeader={setIsHeader} />} />
        <Route path='/reset/password/:token' element={<ResetPassword setIsHeader={setIsHeader} />} />
        <Route path='*' element={<NotFound setIsHeader={setIsHeader} />} />
        <Route path='/payment/success' element={<PaymentSuccess setIsHeader={setIsHeader} />} />
        <Route path='/payment/fail' element={<PaymentFail setIsHeader={setIsHeader} />} />
        <Route path='/course/subscription/:id' element={<Subscribe setIsHeader={setIsHeader} />} /> 
      </Routes>

      {isHeader && 
      <Footer/>
      }
      
    </Router>
  );
}

export default App;
