import React from 'react';
import { Box, Container, Typography, useTheme, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.2)`,
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  '&.swiper-slide-active': {
    transform: 'translateY(-10px)',
    boxShadow: `0 12px 40px rgba(0, 0, 0, 0.3)`,
  },
}));

const ProjectImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: { xs: '200px', md: '300px' },
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 100%)`,
    zIndex: 1,
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
}));

const ProjectContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
}));

const ProjectActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: 'auto',
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const TechChip = styled(motion.div)(({ theme }) => ({
  padding: '0.4rem',
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#fff',
  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  position: 'relative',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  '&:hover': {
    scale: 1.05,
    background: 'rgba(255, 255, 255, 0.2)',
  },
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
    color: 'rgba(255, 255, 255, 0.8)',
    flexShrink: 0,
  },
}));

const SectionTitle = styled(motion.div)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    borderRadius: '2px',
  },
}));

const SectionDescription = styled(motion.div)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  marginBottom: theme.spacing(8),
  color: theme.palette.text.secondary,
  fontSize: '1.1rem',
  lineHeight: 1.8,
}));

const SideContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  height: '100%',
  justifyContent: 'center',
}));

const SideCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const FloatingShape = styled(motion.div)(({ theme, color, size, top, left }) => ({
  position: 'absolute',
  width: size,
  height: size,
  background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
  filter: 'blur(20px)',
  opacity: 0.3,
  top,
  left,
  zIndex: 0,
}));

const DecorativeLine = styled(motion.div)(({ theme, color, width, height, top, left, rotate }) => ({
  position: 'absolute',
  width,
  height,
  background: `linear-gradient(90deg, ${color}, transparent)`,
  top,
  left,
  transform: `rotate(${rotate}deg)`,
  opacity: 0.2,
  zIndex: 0,
}));

const SideDecoration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
}));

const ParallaxBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: 0,
}));

const ParallaxCircle = styled(motion.div)(({ theme, size, color, top, left }) => ({
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

const ParallaxLine = styled(motion.div)(({ theme, width, height, color, top, left, rotate }) => ({
  position: 'absolute',
  width,
  height,
  background: `linear-gradient(90deg, ${color}, transparent)`,
  top,
  left,
  transform: `rotate(${rotate}deg)`,
  opacity: 0.2,
}));

const BackgroundDecoration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: '300px',
    height: '300px',
    background: `radial-gradient(circle at center, ${theme.palette.primary.main}20 0%, transparent 70%)`,
    filter: 'blur(20px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: '200px',
    height: '200px',
    background: `radial-gradient(circle at center, ${theme.palette.primary.light}20 0%, transparent 70%)`,
    filter: 'blur(20px)',
  },
}));

const NavButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 10,
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(147, 112, 219, 0.2))',
    borderRadius: '12px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.12)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    boxShadow: '0 0 30px rgba(255, 105, 180, 0.15)',
    transform: 'translateY(-50%) scale(1.05)',
    '&::before': {
      opacity: 1,
    },
    '&::after': {
      opacity: 1,
    },
    '& svg': {
      color: '#ff69b4',
      transform: 'scale(1.1)',
    },
  },
  '& svg': {
    position: 'relative',
    zIndex: 1,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
  },
  '&.disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: 'none',
      transform: 'translateY(-50%)',
      '&::before, &::after': {
        opacity: 0,
      },
      '& svg': {
        color: 'rgba(255, 255, 255, 0.8)',
        transform: 'scale(1)',
      },
    },
  },
}));

const ProjectsSection = () => {
  const theme = useTheme();
  const swiperRef = React.useRef(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=600&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills with interactive animations.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      technologies: ['React', 'Material-UI', 'Framer Motion', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with real-time data visualization and reporting tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'AI Image Generator',
      description: 'An AI-powered image generation platform using machine learning to create unique artwork and designs.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Fitness Tracking App',
      description: 'A mobile-first fitness tracking application with workout planning and progress monitoring features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Real Estate Platform',
      description: 'A modern real estate platform with property listings, virtual tours, and mortgage calculator.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      technologies: ['React', 'Three.js', 'Node.js', 'MongoDB', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Crypto Trading Bot',
      description: 'An automated cryptocurrency trading bot with real-time market analysis and strategy implementation.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Redis'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Smart Home Dashboard',
      description: 'A centralized dashboard for controlling and monitoring smart home devices and automation.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MQTT', 'WebSocket', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Language Learning App',
      description: 'An interactive language learning platform with speech recognition and personalized learning paths.',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop',
      technologies: ['React Native', 'TensorFlow', 'Node.js', 'MongoDB', 'WebRTC'],
      github: 'https://github.com',
      demo: 'https://example.com',
    }
  ];

  const parallaxElements = [
    { type: 'circle', size: '300px', color: theme.palette.primary.main, top: '10%', left: '5%', speed: 0.2 },
    { type: 'circle', size: '200px', color: theme.palette.primary.light, top: '60%', left: '85%', speed: 0.3 },
    { type: 'circle', size: '150px', color: theme.palette.secondary.main, top: '30%', left: '70%', speed: 0.4 },
    { type: 'line', width: '400px', height: '2px', color: theme.palette.primary.main, top: '20%', left: '10%', rotate: 45, speed: 0.5 },
    { type: 'line', width: '300px', height: '2px', color: theme.palette.primary.light, top: '80%', left: '60%', rotate: -45, speed: 0.6 },
    { type: 'line', width: '200px', height: '2px', color: theme.palette.secondary.main, top: '40%', left: '30%', rotate: 30, speed: 0.7 },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        maxHeight: { xs: 'auto', md: '100vh' },
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <BackgroundDecoration />

      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          py: { xs: 6, md: 6 },
          minHeight: { xs: '100vh', md: 'auto' },
        }}
      >
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ mb: { xs: 2, md: 3 } }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `0 2px 10px ${theme.palette.primary.main}40`,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Featured Projects
          </Typography>
        </SectionTitle>

        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{ mb: { xs: 2, md: 3 } }}
        >
          <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
            Explore a collection of my most impactful projects, showcasing expertise in full-stack development,
            UI/UX design, and innovative problem-solving. Each project represents a unique challenge
            and solution in the ever-evolving landscape of technology.
          </Typography>
        </SectionDescription>

        <Box 
          sx={{ 
            position: 'relative', 
            zIndex: 1,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            mt: { xs: -2, md: -3 }
          }}
        >
          <NavButton
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{ 
              left: { xs: '10px', md: '20px' },
              '&:hover': {
                transform: 'translateY(-50%) scale(1.05) rotate(-5deg)',
              },
            }}
            className={swiperRef.current?.isBeginning ? 'disabled' : ''}
          >
            <ArrowBackIosNewIcon />
          </NavButton>

          <NavButton
            onClick={() => swiperRef.current?.slideNext()}
            sx={{ 
              right: { xs: '10px', md: '20px' },
              '&:hover': {
                transform: 'translateY(-50%) scale(1.05) rotate(5deg)',
              },
            }}
            className={swiperRef.current?.isEnd ? 'disabled' : ''}
          >
            <ArrowForwardIosIcon />
          </NavButton>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            style={{
              padding: '30px 0 50px 0',
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title} style={{ width: { xs: '280px', md: '300px' }, height: { xs: '500px', md: '600px' } }}>
                <ProjectCard>
                  <ProjectImage>
                    <img src={project.image} alt={project.title} />
                  </ProjectImage>
                  <ProjectContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.primary.light,
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 3,
                        flex: 1,
                        fontSize: { xs: '0.85rem', md: '1rem' },
                        lineHeight: { xs: 1.5, md: 1.6 },
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <TechChip
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          sx={{
                            fontSize: { xs: '0.75rem', md: '0.9rem' },
                            padding: { xs: '0.3rem 0.5rem', md: '0.4rem' },
                          }}
                        >
                          <CodeIcon sx={{ fontSize: { xs: '0.75rem', md: '0.9rem' } }} />
                          {tech}
                        </TechChip>
                      ))}
                    </Box>
                    <ProjectActions>
                      <IconButton
                        href={project.github}
                        target="_blank"
                        sx={{
                          color: theme.palette.primary.light,
                          padding: { xs: '6px', md: '8px' },
                          '&:hover': {
                            color: theme.palette.primary.main,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <GitHubIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                      </IconButton>
                      <IconButton
                        href={project.demo}
                        target="_blank"
                        sx={{
                          color: theme.palette.primary.light,
                          padding: { xs: '6px', md: '8px' },
                          '&:hover': {
                            color: theme.palette.primary.main,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <LaunchIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                      </IconButton>
                    </ProjectActions>
                  </ProjectContent>
                </ProjectCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 