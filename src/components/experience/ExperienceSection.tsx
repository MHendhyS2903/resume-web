import React, { useMemo, useState } from 'react';
import { Box, Container, Typography, Chip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 'calc(50% - 250px)',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(to bottom, #90caf9, #64b5f6, #42a5f5, transparent)',
    zIndex: 1,
  },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 'calc(50% - 250px)',
  top: '16px',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: '#90caf9',
  border: '2px solid rgba(18, 18, 18, 0.9)',
  boxShadow: '0 0 0 2px rgba(144, 202, 249, 0.3)',
  zIndex: 2,
  transform: 'translateX(-50%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-6px',
    left: '-6px',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: 'rgba(144, 202, 249, 0.1)',
    animation: 'pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'translateX(-50%) scale(1)',
      opacity: 1,
    },
    '50%': {
      transform: 'translateX(-50%) scale(1.2)',
      opacity: 0.5,
    },
    '100%': {
      transform: 'translateX(-50%) scale(1)',
      opacity: 1,
    },
  },
}));

const ExperienceCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(1.5),
  borderRadius: '12px',
  background: 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  width: '500px',
  maxWidth: '90vw',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #90caf9, #64b5f6, #42a5f5)',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(13, 71, 161, 0.3)',
    transform: 'translateX(3px)',
    '&::before': {
      transform: 'scaleX(1)',
    },
  },
  transition: 'all 0.3s ease',
}));

const ExperienceHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(0.5),
}));

const ExperienceInfo = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const ExpandButton = styled(IconButton)(({ theme }) => ({
  color: '#90caf9',
  padding: theme.spacing(0.25),
  marginLeft: theme.spacing(0.5),
  '&:hover': {
    background: 'rgba(144, 202, 249, 0.1)',
  },
}));

const TechChip = styled(Chip)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.08)',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  fontSize: '0.7rem',
  height: '20px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.15)',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.2s ease',
}));

const FloatingParticle = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  width: '4px',
  height: '4px',
  background: '#90caf9',
  borderRadius: '50%',
  pointerEvents: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    background: 'inherit',
    borderRadius: 'inherit',
    transform: 'translate(-50%, -50%)',
    filter: 'blur(2px)',
  },
}));

const ExperienceSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experienceData: Experience[] = useMemo(() => [
    {
      title: "Senior Front End Developer",
      company: "PT. Smartfren Telecom Tbk",
      period: "August 2023 - Present",
      description: "Develop and maintain MySf applications using React Native. Develop and maintain internal applications such as attendance and HR applications with Kotlin. Continuous improvement of applications, staying up-to-date with industry standards and trends. Compiling performance reports for team members and providing training. Responsible for researching technologies for application development and ensuring successful implementation.",
      technologies: ['React Native', 'Kotlin', 'React.js', 'Next.js', 'TypeScript'],
    },
    {
      title: "Senior Front End Developer",
      company: "PT. Bank KB Bukopin Tbk",
      period: "February 2023 - August 2023",
      description: "Building and maintaining the KB Star mobile banking application using Flutter. Designing and building comprehensive Bank Cash Management (Internet Banking) web platform utilizing JexFrame framework. Creating performance reports for team members and providing guidance for growth.",
      technologies: ['Flutter', 'JexFrame', 'MobX', 'JSP', 'Java'],
    },
    {
      title: "Front End Developer",
      company: "PT. Bank CIMB Niaga Tbk",
      period: "July 2022 - February 2023",
      description: "Developing the Wealth Management feature within the OctoSmart application using React Native. Optimizing the application for tablet platforms and ensuring responsiveness across different screen sizes.",
      technologies: ['React Native', 'Redux', 'Node.js', 'Express.js'],
    },
    {
      title: "Full Stack Developer",
      company: "PT. Anjana Nata Alam",
      period: "March 2021 - July 2022",
      description: "Creating the 'JastipinAja!' e-commerce application using React Native and React Native Paper. Developing the backend infrastructure with Express.js and MySQL database to efficiently store and manage data.",
      technologies: ['React Native', 'Express.js', 'MySQL', 'React Native Paper'],
    },
    {
      title: "Full Stack Developer",
      company: "PT. Asia Trans Teknologi",
      period: "September 2019 - December 2020",
      description: "Creating food delivery application using Kotlin for mobile and .Net Core for API. Responsible for defining, developing, and evolving software in a fast-paced agile development environment. Collaborating with project managers to implement solutions aligned with shared platforms. Designing, developing, and implementing website code using ASP.Net C#, Microsoft .Net Core, and Microsoft SQL Server.",
      technologies: ['Kotlin', 'ASP.NET Core', 'C#', 'SQL Server', 'MongoDB'],
    },
    {
      title: "Junior Web Developer",
      company: "PT. Ebiz Cipta Solusi",
      period: "June 2016 - August 2017",
      description: "Collaborating with senior developers to create web application named 'New TIDS' using ASP.Net webform and SQL Server for the database.",
      technologies: ['ASP.NET', 'SQL Server', 'C#'],
    }
  ], []);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box
      id="experience"
      sx={{
        minHeight: '60vh',
        width: '100%',
        maxWidth: '100vw',
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
      {/* Floating Particles */}
      {[...Array(6)].map((_, index) => (
        <FloatingParticle
          key={index}
          initial={{ 
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          animate={{ 
            opacity: [0, 1, 0],
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut"
          }}
          sx={{
            top: `${20 + index * 15}%`,
            left: `${10 + index * 15}%`,
          }}
        />
      ))}

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, py: 2 }}>
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
              mb: 6,
              fontWeight: 'bold',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              background: 'linear-gradient(45deg, #fff, #90caf9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Work Experience
          </Typography>
        </motion.div>

        <TimelineContainer>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <TimelineDot />
              <ExperienceCard
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExperienceHeader>
                  <ExperienceInfo>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#90caf9',
                        fontWeight: 'bold',
                        mb: 0.25,
                        fontSize: '0.9rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#e3f2fd',
                        mb: 0.25,
                        fontSize: '0.8rem',
                        fontWeight: 500,
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#b3e5fc',
                        fontSize: '0.7rem',
                        fontStyle: 'italic',
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </ExperienceInfo>
                  <ExpandButton size="small">
                    {expandedIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ExpandButton>
                </ExperienceHeader>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <Box sx={{ mt: 1.5, pt: 1.5, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            mb: 1.5,
                            fontSize: '0.75rem',
                            lineHeight: 1.5,
                          }}
                        >
                          {exp.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.25 }}>
                          {exp.technologies.map((tech) => (
                            <TechChip
                              key={tech}
                              label={tech}
                              size="small"
                            />
                          ))}
                        </Box>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ExperienceCard>
            </motion.div>
          ))}
        </TimelineContainer>
      </Container>
    </Box>
  );
};

export default ExperienceSection; 