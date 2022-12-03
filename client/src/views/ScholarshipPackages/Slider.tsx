import React, { useState } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion ';

export default function Slider(slides: { slides: any[] }) {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  setTimeout(() => setOpacity(1), 250);
  console.log(opacity, 'opacity');
  const changeOpacity = () => {
    setOpacity(0);
  };
  const goToPrevious = () => {
    changeOpacity();
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }, 100);
  };
  const goToNext = () => {
    changeOpacity();
    setTimeout(() => {
      setOpacity(1);
      const isLastSlide = currentIndex === slides.slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 200);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '500px',
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
        {slides.slides.map((slide, slideIndex) => {
          if (slideIndex === currentIndex) {
            return (
              <div
                style={{
                  margin: '0 3px',
                  cursor: 'pointer',
                  fontSize: '20px',
                  color: `${theme.palette.secondary.main}`,
                }}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            );
          } else {
            return (
              <div
                style={{
                  margin: '0 3px',
                  cursor: 'pointer',
                  fontSize: '20px',
                  color: `${theme.palette.secondary.light}`,
                }}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            );
          }
        })}
      </div>
      <Button
        onClick={goToPrevious}
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translate(0,-50%)',
          left: '3px',
          fontSize: '45px',
          color: '#fff',
          zIndex: 1,
          opacity: '0.5',
        }}
      >
        ❰
      </Button>
      <Button
        onClick={goToNext}
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translate(0,-50%)',
          right: '3px',
          fontSize: '45px',
          color: '#fff',
          zIndex: 1,
          opacity: '0.5',
        }}
      >
        ❱
      </Button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity }}
        // transition={{ duration: 0.5 }}
      >
        {slides.slides[currentIndex]}
      </motion.div>
    </Box>
  );
}
