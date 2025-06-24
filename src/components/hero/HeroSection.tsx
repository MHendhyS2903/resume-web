import React, { useEffect, useRef, useMemo } from 'react';
import { Box, Container, Typography, Button, useTheme, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TechItem from './TechItem';

interface ParallaxElement {
  type: 'circle' | 'line';
  size?: string;
  width?: string;
  height?: string;
  color: string;
  top: string;
  left: string;
  rotate?: number;
  speed: number;
}

interface ButtonStyles {
  contained: React.CSSProperties;
  outlined: React.CSSProperties;
}

const StyledHeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  maxWidth: '100vw',
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

const ParallaxBackground = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: 0,
  width: '100%',
  maxWidth: '100vw',
  height: '100vh',
}));

const ParallaxCircle = styled(motion.div)<{ size: string; color: string; top: string; left: string }>(({ theme, size, color, top, left }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
  filter: 'blur(20px)',
  opacity: 0.3,
  top,
  left,
}));

const ParallaxLine = styled(motion.div)<{ width: string; height: string; color: string; top: string; left: string; rotate: number }>(({ theme, width, height, color, top, left, rotate }) => ({
  position: 'absolute',
  width,
  height,
  background: `linear-gradient(90deg, ${color}, transparent)`,
  top,
  left,
  transform: `rotate(${rotate}deg)`,
  opacity: 0.2,
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
  height: '100vh',
  overflow: 'hidden',
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

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const ref = useRef<HTMLDivElement>(null);

  const parallaxElements: ParallaxElement[] = useMemo(() => [
    { type: 'circle', size: '600px', color: '#3f51b5', top: '10%', left: '5%', speed: 0.2 },
    { type: 'circle', size: '500px', color: '#7986cb', top: '60%', left: '85%', speed: 0.3 },
    { type: 'circle', size: '400px', color: '#a8c0ff', top: '30%', left: '70%', speed: 0.4 },
    { type: 'line', width: '800px', height: '2px', color: '#3f51b5', top: '20%', left: '10%', rotate: 45, speed: 0.5 },
    { type: 'line', width: '600px', height: '2px', color: '#7986cb', top: '80%', left: '60%', rotate: -45, speed: 0.6 },
    { type: 'line', width: '500px', height: '2px', color: '#a8c0ff', top: '40%', left: '30%', rotate: 30, speed: 0.7 },
    { type: 'circle', size: '300px', color: '#3f51b5', top: '80%', left: '20%', speed: 0.4 },
    { type: 'circle', size: '200px', color: '#7986cb', top: '20%', left: '40%', speed: 0.3 },
  ], []);

  const techStack: string[] = useMemo(() => [
    'React Native',
    'Kotlin',
    'Flutter',
    'React.js',
    'Next.js',
    'Javascript',
    'Laravel',
    'CI',
    'MySQL',
    'SQL Server',
    'MongoDB',
    'REST API',
    'JexFrame',
    'Java'
  ], []);

  const buttonStyles: ButtonStyles = useMemo(() => ({
    contained: {
      borderRadius: '30px',
      background: 'rgba(63, 81, 181, 0.2)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(63, 81, 181, 0.3)',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(63, 81, 181, 0.2)',
      padding: '12px 32px',
      fontSize: '1.1rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: '160px',
      maxWidth: '240px',
      position: 'relative',
    },
    outlined: {
      borderRadius: '30px',
      background: 'rgba(168, 192, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(168, 192, 255, 0.3)',
      color: '#a8c0ff',
      boxShadow: '0 4px 20px rgba(168, 192, 255, 0.1)',
      padding: '12px 32px',
      fontSize: '1.1rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: '160px',
      maxWidth: '240px',
      position: 'relative',
    }
  }), []);

  return (
    <StyledHeroSection>
      <ParallaxBackground>
        <Parallax pages={3} style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
          {parallaxElements.map((element, index) => (
            <ParallaxLayer
              key={index}
              offset={0}
              speed={element.speed}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              {element.type === 'circle' ? (
                <ParallaxCircle
                  size={element.size!}
                  color={element.color}
                  top={element.top}
                  left={element.left}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.4, 0.3],
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ) : (
                <ParallaxLine
                  width={element.width!}
                  height={element.height!}
                  color={element.color}
                  top={element.top}
                  left={element.left}
                  rotate={element.rotate!}
                  animate={{
                    opacity: [0.2, 0.3, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </ParallaxLayer>
          ))}
        </Parallax>
      </ParallaxBackground>

      <ContentWrapper>
        <Container maxWidth="lg" sx={{ 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center',
          overflow: 'hidden',
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 4, 
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden'
          }}>
            <Box sx={{ flex: { xs: 1, md: 8 } }}>
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
                style={{ display: 'flex', gap: '1rem' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={buttonStyles.contained}
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={buttonStyles.outlined}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
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
                <TechStack>
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
                    >
                      {tech}
                    </TechItem>
                  ))}
                </TechStack>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </ContentWrapper>
    </StyledHeroSection>
  );
};

export default HeroSection; 