import React, { useMemo } from 'react';
import { Box, Container, Typography, useTheme, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
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
  height: '300px',
  width: '100%',
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
    objectPosition: 'center',
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

  const projects = useMemo(() => [
    {
      title: 'MySf Applications',
      description: 'A mobile application designed to offer convenience and accessibility to Smartfren customers by providing various features and functionalities like balance and usage check, package purchase, and bill payment.',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/36/73/8d/36738d49-39ae-d2de-2d09-a951a9e3eaee/2f55b884-87ca-4b6a-8977-f3d761879ab5_Update-mySF-v8-IOS-EN-1242x2208_iOS-EN-page1.jpg/392x696bb.jpg',
      technologies: ['React Native', 'Redux'],
      github: '',
      demo: 'https://play.google.com/store/apps/details?id=com.smartfren&hl=id',
    },
    {
      title: 'Physical Goods Web',
      description: 'A website that serves as an online marketplace for Smartfren app users, specializing in the sale of physical goods.',
      image: 'https://www.smartfren.com/app/uploads/2023/03/kemitran_sf_page_banner2.png',
      technologies: ['React.js', 'Redux'],
      github: '',
      demo: '',
    },
    {
      title: 'SF Shop',
      description: 'An online platform dedicated to offering a convenient service for purchasing digital game vouchers.',
      image: 'https://ucms-api.smartfren.com/ucms/api/v1/uploads/GV_sfshop_mei_244ff6be07.jpeg',
      technologies: ['Next.js', 'Redux'],
      github: '',
      demo: 'https://sfshop.id',
    },
    {
      title: 'NGBS "KB Star" Application',
      description: 'KB Star is a m-banking application from Bank KB Bukopin, that allows customers to perform various financial transactions and manage their accounts using mobile devices.',
      image: 'https://api.kbbank.co.id//_default_upload_bucket/Banner%20Product%20Digital_KBStar%20Launching%20M10%20512x250px.png',
      technologies: ['Flutter', 'MobX'],
      github: '',
      demo: 'https://play.google.com/store/apps/details?id=com.kbBukopin.Kbstar&hl=id',
    },
    {
      title: 'Bukopin Cash Management',
      description: 'Internet banking or e-banking services and the management of financial transactions over the internet.',
      image: 'https://pbs.twimg.com/media/Fe8JRaYacAILcCj.jpg',
      technologies: ['JexFrame', 'JSP'],
      github: '',
      demo: 'https://kbstarbiz.kbbank.co.id/loginAccount.act',
    },
    {
      title: 'Wealth Management Feature',
      description: 'A comprehensive approach to managing an individual financial resources and investments to help them achieve their financial goals and objectives.',
      image: 'https://play-lh.googleusercontent.com/ryqymqnxqdXq0Hwbzwp0bfAAWGl7RvE_hXdiVA2T0-9c6UCL_68bi2yYsRV5-Hi85mdL',
      technologies: ['React Native', 'Redux'],
      github: '',
      demo: 'https://play.google.com/store/apps/details?id=com.rm_tools&hl=id',
    },
    {
      title: 'JastipinAja! Application',
      description: 'An e-commerce application that facilitates online buying and selling of goods.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuw1EeblPHMNTiegrcrNw9KGQr0ChtyZ7Xw&s',
      technologies: ['React Native', 'Redux', 'Express.js', 'MySQL'],
      github: '',
      demo: '',
    },
    {
      title: 'BayarYuk Finance & Payment',
      description: 'An application to manage all food court needs with one cashier and many shops, contains modules such as customers, sellers, cashiers, menus, transactions, payments, shops, and financial reports.',
      image: 'https://media.iqonic.design/iqonic-design/wp-content/uploads/2023/02/Frame-1.webp',
      technologies: ['Flutter'],
      github: '',
      demo: '',
    },
    {
      title: 'BPR Application',
      description: 'An application that is used to manage all the needs of money lending companies that contains modules such as customers, employees, savings, loans, installment payments, installment simulations, and more.',
      image: 'https://www.reedukkan.com/blog/wp-content/uploads/2023/01/what_is_kotlin_banner_image.png',
      technologies: ['Kotlin', 'ASP.NET Core', 'MongoDB'],
      github: '',
      demo: '',
    },
    {
      title: 'Asia Trans Food Application',
      description: 'A mobile-based application with a user-friendly interface and reliable system to order food, ensuring a smooth and seamless experience.',
      image: 'https://media.suara.com/pictures/970x544/2020/08/13/85830-aplikasi-asia-trans.jpg',
      technologies: ['Kotlin', 'ASP.NET Core', 'MongoDB'],
      github: '',
      demo: '',
    },
    {
      title: 'Payment Point API',
      description: 'An application created to be used to pay bills for household needs, made by integrating a 3rd party API from MobilePulsa. Contains data management modules for orders, users, payments, profits, products and more.',
      image: 'https://miro.medium.com/v2/resize:fit:705/1*OiVr2f63kbvC4xKCB_z-mw.png',
      technologies: ['ASP.NET Core', 'MongoDB', 'Vue.js'],
      github: '',
      demo: '',
    }
  ], []);

  const swiperConfig = useMemo(() => ({
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [EffectCoverflow, Pagination, Autoplay],
    className: 'mySwiper',
    style: {
      padding: '30px 0 50px 0',
    }
  }), []);

  return (
    <Box
      id="projects"
      sx={{
        minHeight: { xs: 'auto', sm: '100vh' },
        maxHeight: { xs: 'auto', sm: '100vh' },
        width: '100%',
        maxWidth: '100vw',
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
          height: { xs: '110vh', sm: '100vh' },
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
            Explore a collection of my most impactful projects, showcasing expertise in Fullstack development,
            Frontend development, Backend development, and innovative problem-solving. Each project represents a unique challenge
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
            {...swiperConfig}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title} style={{ width: '300px', height: '600px' }}>
                <ProjectCard>
                  <ProjectImage>
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </ProjectImage>
                  <ProjectContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.primary.light,
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: '1.25rem',
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
                        fontSize: '1rem',
                        lineHeight: 1.6,
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
                          sx={{
                            fontSize: '0.9rem',
                            padding: '0.4rem',
                          }}
                        >
                          <CodeIcon sx={{ fontSize: '0.9rem' }} />
                          {tech}
                        </TechChip>
                      ))}
                    </Box>
                    <ProjectActions>
                      {project.github && (
                      <IconButton
                        href={project.github}
                        target="_blank"
                        sx={{
                          color: theme.palette.primary.light,
                          padding: '8px',
                          '&:hover': {
                            color: theme.palette.primary.main,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <GitHubIcon sx={{ fontSize: '1.5rem' }} />
                      </IconButton>
                      )}
                      {project.demo && project.demo !== '' && (
                      <IconButton
                        href={project.demo}
                        target="_blank"
                        sx={{
                          color: theme.palette.primary.light,
                          padding: '8px',
                          '&:hover': {
                            color: theme.palette.primary.main,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <LaunchIcon sx={{ fontSize: '1.5rem' }} />
                      </IconButton>
                      )}
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