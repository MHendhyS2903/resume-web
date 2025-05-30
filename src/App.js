import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Box, Container } from '@mui/material';
import darkTheme from './theme';
import HeroSection from './components/hero/HeroSection';
import EducationSection from './components/education/EducationSection';
import ProjectsSection from './components/project/ProjectsSection';
import SkillsSection from './components/skill/SkillsSection';
import ContactSection from './components/contact/ContactSection';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden',
          background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
          color: 'text.primary',
        }}
      >
        <HeroSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
};

export default App; 