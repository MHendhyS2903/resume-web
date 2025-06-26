import React, { useMemo, useState } from 'react';
import { Box, Container, Typography, Chip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  // '&::before': {
  //   content: '""',
  //   position: 'absolute',
  //   left: 'calc(50% - 250px)',
  //   top: 0,
  //   bottom: 0,
  //   width: '3px',
  //   background: 'linear-gradient(to bottom, #90caf9, #64b5f6, #42a5f5, #2196f3, transparent)',
  //   zIndex: 1,
  //   boxShadow: '0 0 20px rgba(144, 202, 249, 0.5)',
  // },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 'calc(50% - 250px)',
  top: '20px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #90caf9, #64b5f6)',
  border: '3px solid rgba(18, 18, 18, 0.95)',
  boxShadow: '0 0 0 4px rgba(144, 202, 249, 0.4), 0 4px 12px rgba(144, 202, 249, 0.3)',
  zIndex: 2,
  transform: 'translateX(-50%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-8px',
    left: '-8px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(144, 202, 249, 0.15)',
    animation: 'pulse 3s infinite',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'rgba(144, 202, 249, 0.1)',
    animation: 'pulse 2s infinite 0.5s',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'translateX(-50%) scale(1)',
      opacity: 1,
    },
    '50%': {
      transform: 'translateX(-50%) scale(1.3)',
      opacity: 0.3,
    },
    '100%': {
      transform: 'translateX(-50%) scale(1)',
      opacity: 1,
    },
  },
}));

const ExperienceCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2.5),
  borderRadius: '20px',
  background: 'rgba(18, 18, 18, 0.85)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
  marginBottom: theme.spacing(3),
  cursor: 'pointer',
  width: '620px',
  maxWidth: '92vw',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #90caf9, #64b5f6, #42a5f5, #2196f3)',
    transform: 'scaleX(0)',
    transition: 'transform 0.4s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(144, 202, 249, 0.05) 0%, transparent 50%, rgba(100, 181, 246, 0.05) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
  },
  '&:hover': {
    border: '1px solid rgba(255, 255, 255, 0.25)',
    boxShadow: '0 12px 40px rgba(13, 71, 161, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
    transform: 'translateX(5px) translateY(-2px)',
    '&::before': {
      transform: 'scaleX(1)',
    },
    '&::after': {
      opacity: 1,
    },
  },
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const ExperienceHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(1),
}));

const ExperienceInfo = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const InfoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  marginBottom: theme.spacing(0.25),
}));

const ExpandButton = styled(IconButton)(({ theme }) => ({
  color: '#90caf9',
  padding: theme.spacing(0.5),
  marginLeft: theme.spacing(0.5),
  background: 'rgba(144, 202, 249, 0.1)',
  border: '1px solid rgba(144, 202, 249, 0.2)',
  borderRadius: '12px',
  '&:hover': {
    background: 'rgba(144, 202, 249, 0.2)',
    border: '1px solid rgba(144, 202, 249, 0.3)',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.3s ease',
}));

const TechChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  fontSize: '0.7rem',
  height: '24px',
  borderRadius: '12px',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
    transform: 'scale(1.05) translateY(-1px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  transition: 'all 0.3s ease',
}));

const FloatingParticle = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  width: '6px',
  height: '6px',
  background: 'linear-gradient(135deg, #90caf9, #64b5f6)',
  borderRadius: '50%',
  pointerEvents: 'none',
  boxShadow: '0 0 10px rgba(144, 202, 249, 0.6)',
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
    filter: 'blur(3px)',
  },
}));

const GlowEffect = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '200px',
  height: '200px',
  background: 'radial-gradient(circle, rgba(144, 202, 249, 0.1) 0%, transparent 70%)',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  filter: 'blur(20px)',
  pointerEvents: 'none',
  zIndex: 0,
}));

const ExperienceSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experienceData: Experience[] = useMemo(() => [
    {
      title: "Senior Front End Developer",
      company: "PT. Smartfren Telecom Tbk",
      period: "August 2023 - Present",
      description: [
        "Develop and maintain MySf applications using React Native",
        "Develop and maintain some internal applications such as attendance application and HR application with Kotlin",
        "Continuous Improvement: Continuously evaluate and improve the applications, stay up-to-date with industry standards and trends, and ensure compliance with company policies and best practices",
        "Compiling a concise performance report for team members, covering their contributions, achievements, areas for improvement, while providing simple training as needed",
        "Responsible for researching the technologies to be used in the creation and development of applications, ensuring successful implementation"
      ],
      technologies: ['React Native', 'Kotlin', 'React.js', 'Next.js', 'TypeScript'],
    },
    {
      title: "Senior Front End Developer",
      company: "PT. Bank KB Bukopin Tbk",
      period: "February 2023 - August 2023",
      description: [
        "Building and maintaining the KB Star mobile banking application using Flutter, delivering a modern and functional interface along with a seamless user experience",
        "Designing and building a comprehensive Bank Cash Management (Internet Banking) web platform utilizing the JexFrame framework, with a focus on providing robust financial management features, secure transaction capabilities, intuitive user interfaces, and seamless integration with banking systems to optimize cash flow management and enhance user experience",
        "Creating a straightforward performance report for team members, outlining their contributions, achievements, and areas for growth"
      ],
      technologies: ['Flutter', 'JexFrame', 'MobX', 'JSP', 'Java'],
    },
    {
      title: "Front End Developer",
      company: "PT. Bank CIMB Niaga Tbk",
      period: "July 2022 - February 2023",
      description: [
        "Developing the Wealth Management feature within the OctoSmart application using React Native",
        "Optimizing the application for tablet platforms and ensuring responsiveness across different screen sizes"
      ],
      technologies: ['React Native', 'Redux', 'Node.js', 'Express.js'],
    },
    {
      title: "Full Stack Developer",
      company: "PT. Anjana Nata Alam",
      period: "March 2021 - July 2022",
      description: [
        "Creating the 'JastipinAja!' e-commerce application using React Native and React Native Paper to achieve an efficient and visually appealing user interface",
        "Developing the backend infrastructure with Express.js and MySQL database to efficiently store and manage data"
      ],
      technologies: ['React Native', 'Express.js', 'MySQL', 'React Native Paper'],
    },
    {
      title: "Full Stack Developer",
      company: "PT. Asia Trans Teknologi",
      period: "September 2019 - December 2020",
      description: [
        "Creating food delivery application using Kotlin for mobile and .Net Core for API",
        "Responsible for defining, developing, and evolving software in a fast-paced agile development environment",
        "Collaborating with project managers to implement solutions aligned with shared platforms",
        "Designing, developing, and implementing website code using ASP.Net C#, Microsoft .Net Core, and Microsoft SQL Server",
        "Creating food delivery application using Kotlin for mobile and .Net Core for API"
      ],
      technologies: ['Kotlin', 'ASP.NET Core', 'C#', 'SQL Server', 'MongoDB'],
    },
    {
      title: "Junior Web Developer",
      company: "PT. Ebiz Cipta Solusi",
      period: "June 2016 - August 2017",
      description: [
        "Collaborating with senior developers to create web application named 'New TIDS' using ASP.Net webform and SQL Server for the database"
      ],
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
      {/* Background Glow Effects */}
      <GlowEffect sx={{ top: '20%', left: '20%', width: '300px', height: '300px' }} />
      <GlowEffect sx={{ top: '80%', left: '80%', width: '250px', height: '250px' }} />

      {/* Floating Particles */}
      {[...Array(15)].map((_, index) => (
        <FloatingParticle
          key={index}
          initial={{ 
            opacity: 0,
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150
          }}
          animate={{ 
            opacity: [0, 1, 0],
            x: [
              Math.random() * 300 - 150,
              Math.random() * 300 - 150,
              Math.random() * 300 - 150
            ],
            y: [
              Math.random() * 300 - 150,
              Math.random() * 300 - 150,
              Math.random() * 300 - 150
            ]
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut"
          }}
          sx={{
            top: `${10 + index * 6}%`,
            left: `${5 + index * 7}%`,
            width: `${4 + Math.random() * 4}px`,
            height: `${4 + Math.random() * 4}px`,
          }}
        />
      ))}

      {/* Additional Small Particles */}
      {[...Array(20)].map((_, index) => (
        <FloatingParticle
          key={`small-${index}`}
          initial={{ 
            opacity: 0,
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100
          }}
          animate={{ 
            opacity: [0, 0.6, 0],
            x: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100
            ],
            y: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100
            ]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
          sx={{
            top: `${15 + index * 4}%`,
            left: `${10 + index * 5}%`,
            width: `${2 + Math.random() * 2}px`,
            height: `${2 + Math.random() * 2}px`,
            background: `linear-gradient(135deg, rgba(144, 202, 249, ${0.3 + Math.random() * 0.4}), rgba(100, 181, 246, ${0.2 + Math.random() * 0.3}))`,
          }}
        />
      ))}

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 'bold',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              background: 'linear-gradient(45deg, #fff, #90caf9, #64b5f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #90caf9, #64b5f6)',
                borderRadius: '2px',
              }
            }}
          >
            Work Experience
          </Typography>
        </motion.div>

        <TimelineContainer>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              style={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {/* <TimelineDot /> */}
              <ExperienceCard
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExperienceHeader>
                  <ExperienceInfo
                    sx={{
                      textAlign: 'center',
                      width: '100%',
                    }}
                  >
                    <InfoRow
                      sx={{
                        justifyContent: 'center',
                      }}
                    >
                      <WorkIcon sx={{ color: '#90caf9', fontSize: '1rem' }} />
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#90caf9',
                          fontWeight: 'bold',
                          fontSize: '1rem',
                          lineHeight: 1.3,
                          textShadow: '0 2px 8px rgba(144, 202, 249, 0.3)',
                        }}
                      >
                        {exp.title}
                      </Typography>
                    </InfoRow>
                    <InfoRow
                      sx={{
                        justifyContent: 'center',
                      }}
                    >
                      <BusinessIcon sx={{ color: '#e3f2fd', fontSize: '0.9rem' }} />
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#e3f2fd',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                        }}
                      >
                        {exp.company}
                      </Typography>
                    </InfoRow>
                    <InfoRow
                      sx={{
                        justifyContent: 'center',
                      }}
                    >
                      <CalendarTodayIcon sx={{ color: '#b3e5fc', fontSize: '0.8rem' }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#b3e5fc',
                          fontSize: '0.75rem',
                          fontStyle: 'italic',
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </InfoRow>
                  </ExperienceInfo>
                </ExperienceHeader>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <Box sx={{ 
                        mt: 2, 
                        pt: 2, 
                        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '1px',
                          background: 'linear-gradient(90deg, transparent, rgba(144, 202, 249, 0.3), transparent)',
                        }
                      }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.85)',
                            mb: 2,
                            fontSize: '0.8rem',
                            lineHeight: 1.6,
                            textAlign: 'justify',
                          }}
                        >
                          {exp.description.map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                              <Typography
                                component="span"
                                sx={{
                                  color: '#90caf9',
                                  fontSize: '0.8rem',
                                  fontWeight: 'bold',
                                  mr: 1,
                                  mt: 0.1,
                                  flexShrink: 0,
                                }}
                              >
                                ●
                              </Typography>
                              <Typography
                                component="span"
                                sx={{
                                  color: 'rgba(255, 255, 255, 0.85)',
                                  fontSize: '0.8rem',
                                  lineHeight: 1.6,
                                }}
                              >
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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

                {/* Expand/Collapse Button at bottom */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mt: 1.5,
                  pt: 1,
                  borderTop: expandedIndex === index ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <motion.div
                    animate={{ 
                      rotate: expandedIndex === index ? 180 : 0,
                      y: expandedIndex === index ? 0 : [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeInOut",
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <ExpandButton size="small">
                      <ExpandMoreIcon />
                    </ExpandButton>
                  </motion.div>
                </Box>
              </ExperienceCard>
            </motion.div>
          ))}
        </TimelineContainer>
      </Container>
    </Box>
  );
};

export default ExperienceSection; 