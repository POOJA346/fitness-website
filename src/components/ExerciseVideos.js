import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '140px', xs: '80px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '31px', xs: '20px' } }} fontWeight={700} color={'white'} mb="33px">
        Watch <span style={{ color: 'violet', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
  sx={{lg:{flexDirection: 'row', // Force all items in a row
    gap: '20px', // Maintain spacing between items
    flexWrap: 'nowrap', // Prevent wrapping
    overflowX: 'auto', // Allow horizontal scrolling if needed
    alignItems: 'center',}
    
  }}
  justifyContent="flex-start"
>
  {exerciseVideos?.slice(0, 3)?.map((item, index) => (
    <a
      key={index}
      className="exercise-video"
      href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'block', // Ensure each link behaves as a block element
        textDecoration: 'none', // Optional: Remove underline
      }}
    >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

/*import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '34px', xs: '20px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;*/