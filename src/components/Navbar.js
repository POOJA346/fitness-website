/*import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;




import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="stack">
        <Link to="/Home" style={{ textDecoration: 'none' }}>
          <div className="navitem">Home</div>
        </Link>
        <Link to="/BMICalculator" style={{ textDecoration: 'none' }}>
          <div className="navitem">BMI Calculator</div>
        </Link>
        <Link to="/Contact" style={{ textDecoration: 'none' }}>
          <div className="navitem">Contact us</div>
        </Link>
        <Link to="/Login" style={{ textDecoration: 'none' }}>
          <div className="navitem">Login</div>
        </Link>
        <div className="srchex">
          <div style={{ textAlign: 'center' }}>
            
                    placeholder="Search Exercises" 
                    
                    value="" 
                  
            
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchExercises from './SearchExercises';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'nav-active' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="stack">
      <Link to="/home">
          <div className="navitem">Home</div>
        </Link>
       
        <a href="#exercises" className="navitem">Exercises</a>
        <Link to="/bmicalculator">
          <div className="navitem">BMI Calculator</div>
        </Link>
        <Link to="/contact">
          <div className="navitem">Contact Us</div>
        </Link>
        
       
        <div className="srchex"><SearchExercises /></div>
      </div>
    </div>
  );
}

export default Navbar;
