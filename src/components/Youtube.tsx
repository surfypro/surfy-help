import React from 'react';
import Box from '@mui/material/Box';

interface YoutubeProps {
  code: string;
}

export default function Youtube({ code }: YoutubeProps) {
  return (
    <Box sx={{ position: 'relative', width: '100%', paddingBottom: '56.25%', marginBottom: '1rem' }}>
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        src={`https://www.youtube.com/embed/${code}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
} 