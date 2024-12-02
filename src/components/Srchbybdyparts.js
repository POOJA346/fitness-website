/*import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const Srchbybdyparts = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
               || exercise.target.toLowerCase().includes(search)
               || exercise.equipment.toLowerCase().includes(search)
               || exercise.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack  mt="37px"  p="20px">
       <Typography
  variant="h4"
  fontWeight="bold"
  color="white"
  sx={{
    fontSize: { lg: '34px', xs: '20px' },
    textAlign: 'left', 
    fontFamily: "'Alegreya", 
    lineHeight: '1.5',
    letterSpacing: '0.5px', 
    textTransform: 'capitalize', 
  }}
  mb="46px"
>
  Search Exercises by Body Parts
</Typography>

      
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default Srchbybdyparts;*/

import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const Srchbybdyparts = ({ setExercises, bodyPart, setBodyPart }) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  return (
    <Stack mt="15px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        color="white"
        sx={{
          fontSize: { lg: '31px', xs: '20px' },
          textAlign: 'left',
          fontFamily: "'Alegreya",
          lineHeight: '1.5',
          letterSpacing: '0.5px',
          textTransform: 'capitalize',
        }}
        mb="5px"
      >
        Search Exercises by Body Parts
      </Typography>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default Srchbybdyparts;
