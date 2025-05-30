import React from 'react';
import { Box, Container, Typography, useTheme, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
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
  transform: 'scale(0.9)',
  transition: 'transform 0.3s ease-in-out',
  '&.swiper-slide-active': {
    transform: 'scale(1)',
  },
}));

const ProjectImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '300px',
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

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  background: theme.palette.background.paper,
  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.2)`,
  '&:hover': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  '&.swiper-button-disabled': {
    opacity: 0.5,
  },
}));

const ProjectsSection = () => {
  const theme = useTheme();

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

  return (
    <Box
      sx={{
        py: 12,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            mb: 8,
            fontWeight: 'bold',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: `0 2px 10px ${theme.palette.primary.main}40`,
          }}
        >
          Featured Projects
        </Typography>
      </motion.div>

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Swiper
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
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
          style={{
            padding: '50px 0',
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} style={{ width: '300px' }}>
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
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <TechChip
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        <CodeIcon />
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
                        '&:hover': {
                          color: theme.palette.primary.main,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      href={project.demo}
                      target="_blank"
                      sx={{
                        color: theme.palette.primary.light,
                        '&:hover': {
                          color: theme.palette.primary.main,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <LaunchIcon />
                    </IconButton>
                  </ProjectActions>
                </ProjectContent>
              </ProjectCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 