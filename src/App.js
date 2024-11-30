import React from 'react';
//import { Route, Routes, Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import BMICalculator from './components/BMICalculator';
import Contact from './components/Contact';
import Exercises from './components/Exercises';
import Footer from './components/Footer';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
  
    <Router>
   <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/exercises" element={<Exercises/>} />
      <Route path="/bmicalculator" element={<BMICalculator />} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
    
   
    <Footer />
  </Box>
);

export default App;