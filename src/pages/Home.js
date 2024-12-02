import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';

import HeroBanner from '../components/HeroBanner';

import BMICalculator from '../components/BMICalculator';
import Contact from '../components/Contact';
import Srchbybdyparts from '../components/Srchbybdyparts';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  

  return (
    <Box>
       
      <HeroBanner 
      setExercises={setExercises} 
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
       />
{/*<SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />*/}
      <Srchbybdyparts 
      setExercises={setExercises} 
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises 
      setExercises={setExercises} 
      exercises={exercises}
       bodyPart={bodyPart} />
      
      <BMICalculator />
      <Contact />
    </Box>
  );
};

export default Home;