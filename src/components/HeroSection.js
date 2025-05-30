import React, { useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const StyledHeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.1) 0%, transparent 70%)',
    zIndex: 1,
  },
}));

const FloatingElement = styled(motion.div)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
});

const GlowingCircle = styled(motion.div)(({ size, color }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
  filter: 'blur(20px)',
  opacity: 0.3,
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
});

const AnimatedText = styled(motion.div)({
  overflow: 'hidden',
});

const TechStack = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  marginTop: '2rem',
});

const TechItem = styled(motion.div)(({ theme }) => ({
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#fff',
  fontSize: '0.9rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}));

const HeroSection = () => {
  const theme = useTheme();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const ref = useRef(null);

  const floatingElements = [
    { size: '300px', color: '#3f51b5', x: '10%', y: '20%' },
    { size: '200px', color: '#7986cb', x: '80%', y: '40%' },
    { size: '150px', color: '#a8c0ff', x: '30%', y: '70%' },
  ];

  const techStack = [
    'React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'
  ];

  return (
    <StyledHeroSection>
      <FloatingElement>
        {floatingElements.map((element, index) => (
          <GlowingCircle
            key={index}
            size={element.size}
            color={element.color}
            animate={{
              x: [element.x, `${parseInt(element.x) + 20}%`],
              y: [element.y, `${parseInt(element.y) + 20}%`],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{
              left: element.x,
              top: element.y,
            }}
          />
        ))}
      </FloatingElement>

      <ContentWrapper>
        <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <AnimatedText>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem' },
                      fontWeight: 'bold',
                      mb: { xs: 1, sm: 1.5, md: 2 },
                      background: 'linear-gradient(45deg, #fff, #a8c0ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 10px rgba(255,255,255,0.2)',
                      letterSpacing: '-0.02em',
                      lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
                    }}
                  >
                    Hi, I'm <br /> Mochamad Hendhy Sumaryo
                  </Typography>
                </motion.div>
              </AnimatedText>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: { xs: 2, sm: 3, md: 4 },
                    color: '#a8c0ff',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                  }}
                >
                  Frontend Developer
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    mb: { xs: 2, sm: 3, md: 4 },
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                    lineHeight: { xs: 1.5, sm: 1.6, md: 1.8 },
                    maxWidth: { xs: '100%', sm: '90%', md: '90%' },
                  }}
                >
                  I'm a software developer with a passion for building high-performance, reliable applications. 
                  With solid experience across IT services, telecommunications, and banking, 
                  I specialize in developing systematic and efficient software solutions.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ display: 'flex', gap: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: '30px',
                    background: 'rgba(63, 81, 181, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(63, 81, 181, 0.3)',
                    color: '#fff',
                    boxShadow: '0 4px 20px rgba(63, 81, 181, 0.2)',
                    padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 32px' },
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: { xs: '120px', sm: '140px', md: '160px' },
                    maxWidth: { xs: '100%', sm: '200px', md: '240px' },
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: '0.5s',
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 25px rgba(63, 81, 181, 0.3)',
                      background: 'rgba(63, 81, 181, 0.3)',
                      '&::before': {
                        left: '100%',
                      },
                    },
                    '&:active': {
                      transform: 'translateY(1px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: '30px',
                    background: 'rgba(168, 192, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(168, 192, 255, 0.3)',
                    color: '#a8c0ff',
                    boxShadow: '0 4px 20px rgba(168, 192, 255, 0.1)',
                    padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 32px' },
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: { xs: '120px', sm: '140px', md: '160px' },
                    maxWidth: { xs: '100%', sm: '200px', md: '240px' },
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: '0.5s',
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 25px rgba(168, 192, 255, 0.2)',
                      background: 'rgba(168, 192, 255, 0.2)',
                      color: '#fff',
                      '&::before': {
                        left: '100%',
                      },
                    },
                    '&:active': {
                      transform: 'translateY(1px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <TechStack sx={{ mt: { xs: 1.5, sm: 1.75, md: 2 } }}>
                  {techStack.map((tech, index) => (
                    <TechItem
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        background: 'rgba(255, 255, 255, 0.2)',
                      }}
                      sx={{
                        padding: { xs: '0.3rem 0.8rem', sm: '0.4rem 0.9rem', md: '0.5rem 1rem' },
                        fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                      }}
                    >
                      {tech}
                    </TechItem>
                  ))}
                </TechStack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </ContentWrapper>
    </StyledHeroSection>
  );
};

export default HeroSection; 