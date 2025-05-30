import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Box, Container } from '@mui/material';
import darkTheme from './theme';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
          color: 'text.primary',
        }}
      >
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
};

export default App; 