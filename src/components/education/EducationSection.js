import React, { useMemo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const BackgroundGradient = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    radial-gradient(circle at 20% 20%, rgba(144, 202, 249, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(13, 71, 161, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, #0a0a0a 0%, #121212 100%)
  `,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2390caf9\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.3,
  },
}));

const EducationCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  borderRadius: '12px',
  background: 'rgba(18, 18, 18, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  overflow: 'hidden',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.1), rgba(13, 71, 161, 0.1))',
    zIndex: 0,
  },
  '&:hover': {
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 40px rgba(13, 71, 161, 0.2)',
    transform: 'translateY(-4px)',
  },
  transition: 'all 0.3s ease',
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: '#90caf9',
  position: 'absolute',
  left: '-4px',
  top: '20px',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: 'rgba(144, 202, 249, 0.2)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '0',
  top: '0',
  bottom: '0',
  width: '2px',
  background: 'linear-gradient(to bottom, #90caf9, transparent)',
}));

const FloatingShape = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(144, 202, 249, 0.05)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(144, 202, 249, 0.1)',
}));

const EducationLogo = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '12px',
  overflow: 'hidden',
  marginRight: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  '& img': {
    width: '45px',
    height: '45px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
}));

const EducationHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const EducationSection = () => {
  const educationData = useMemo(() => [
    {
      degree: "Bachelor's degree, Computer Science",
      school: "Politeknik Negeri Jakarta (PNJ)",
      period: "Jun 2017 - Jun 2022",
      description: "Computer Science",
      logo: "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/politeknik-negeri-jakarta-pnj.jpg"
    },
    {
      degree: "Diploma of Education, Computer Software Engineering",
      school: "CEP-CCIT FTUI",
      period: "Jun 2017 - Jun 2020",
      description: "Computer Software Engineering",
      logo: "https://static.uipod.id/logo/22028.jpg"
    },
    {
      degree: "Computer Software Engineering",
      school: "SMK WIKRAMA BOGOR",
      period: "Jun 2013 - Jun 2016",
      description: "Computer Software Engineering",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0kCgrpux8k6WkZ13zzTEDCoGOlVsFUWh2A&s"
    }
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }), []);

  const cardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }), []);

  const floatingShapes = useMemo(() => [
    {
      width: '200px',
      height: '200px',
      top: '10%',
      left: '5%',
      duration: 6,
    },
    {
      width: '150px',
      height: '150px',
      bottom: '10%',
      right: '5%',
      duration: 8,
    }
  ], []);

  return (
    <Box
      id="education"
      sx={{
        minHeight: { xs: 'auto', sm: '60vh' },
        width: '100%',
        py: 4,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BackgroundGradient />
      {floatingShapes.map((shape, index) => (
        <FloatingShape
          key={index}
          initial={{ y: 0 }}
          animate={{ y: [0, index === 0 ? -20 : 20, 0] }}
          transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            width: shape.width,
            height: shape.height,
            top: shape.top,
            left: shape.left,
            bottom: shape.bottom,
            right: shape.right,
          }}
        />
      ))}
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2, py: 2 }}>
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
              mb: 3,
              fontWeight: 'bold',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              background: 'linear-gradient(45deg, #fff, #90caf9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Education
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box sx={{ position: 'relative', pl: 2 }}>
            <TimelineLine />
            {educationData.map((edu, index) => (
              <Box key={edu.degree} sx={{ position: 'relative', mb: 1.5 }}>
                <TimelineDot />
                <EducationCard
                  variants={cardVariants}
                  sx={{ ml: 2 }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <EducationHeader>
                      <EducationLogo>
                        <img src={edu.logo} alt={`${edu.school} logo`} loading="lazy" />
                      </EducationLogo>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: '#90caf9',
                            fontWeight: 'bold',
                            mb: 0.5,
                            fontSize: '0.9rem',
                          }}
                        >
                          {edu.degree}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#e3f2fd',
                            mb: 0.5,
                            fontSize: '0.8rem',
                          }}
                        >
                          {edu.school}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#b3e5fc',
                            mb: 1,
                            fontStyle: 'italic',
                            fontSize: '0.75rem',
                          }}
                        >
                          {edu.period}
                        </Typography>
                      </Box>
                    </EducationHeader>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 0,
                        fontSize: '0.75rem',
                      }}
                    >
                      {edu.description}
                    </Typography>
                  </Box>
                </EducationCard>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default EducationSection; 