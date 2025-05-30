import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const SkillCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  borderRadius: '24px',
  background: 'rgba(18, 18, 18, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  overflow: 'hidden',
  perspective: '1000px',
  transformStyle: 'preserve-3d',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
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
  },
}));

const SkillContent = styled(motion.div)({
  position: 'relative',
  zIndex: 1,
  transformStyle: 'preserve-3d',
});

const SkillIcon = styled(motion.div)(({ theme }) => ({
  width: '54px',
  height: '54px',
  borderRadius: '20px',
  background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.8), rgba(13, 71, 161, 0.8))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  letterSpacing: '1px',
  marginBottom: theme.spacing(1.5),
  boxShadow: '0 4px 20px rgba(13, 71, 161, 0.2)',
  transform: 'translateZ(20px)',
  position: 'relative',
  overflow: 'hidden',
  backdropFilter: 'blur(5px)',
  color: 'rgba(255, 255, 255, 0.9)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0))',
    zIndex: 1,
  },
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
}));

const SparkleEffect = styled(motion.div)(({ theme }) => ({
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

const SkillProgress = styled(motion.div)(({ theme, level }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  padding: '4px',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '12px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #1a237e, #0d47a1)',
    borderRadius: '12px',
    opacity: 0.1,
  },
}));

const Hexagon = styled(motion.div)(({ active, theme }) => ({
  width: '18px',
  height: '18px',
  position: 'relative',
  background: active ? '#90caf9' : 'rgba(255, 255, 255, 0.1)',
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  boxShadow: active ? '0 0 12px #90caf9' : 'none',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '1px',
    left: '1px',
    right: '1px',
    bottom: '1px',
    background: active ? 'rgba(144, 202, 249, 0.3)' : 'rgba(255, 255, 255, 0.05)',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  },
  '&:hover': {
    transform: active ? 'scale(1.3) rotate(30deg)' : 'scale(1.2)',
    boxShadow: active ? '0 0 15px #90caf9' : '0 0 10px rgba(255, 255, 255, 0.2)',
  },
}));

const ProgressText = styled(Typography)({
  position: 'relative',
  zIndex: 1,
  fontWeight: 'bold',
  color: '#90caf9',
  fontSize: '0.85rem',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  marginLeft: '8px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-8px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '1px',
    height: '14px',
    background: 'rgba(255, 255, 255, 0.15)',
  },
});

const GlowEffect = styled(motion.div)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '150%',
  height: '150%',
  background: 'radial-gradient(circle, rgba(13, 71, 161, 0.1) 0%, transparent 70%)',
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
});

const SkillsSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const skills = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Material-UI', level: 95 },
        { name: 'Redux', level: 88 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Firebase', level: 90 },
        { name: 'Redis', level: 82 },
        { name: 'GraphQL', level: 85 },
      ],
    },
    {
      category: 'DevOps',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 88 },
        { name: 'Git', level: 95 },
        { name: 'Linux', level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.02,
      rotateX: 5,
      rotateY: 5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        perspective: '1000px',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          y,
          rotateX,
          background: 'radial-gradient(circle at 50% 50%, rgba(13, 71, 161, 0.05) 0%, transparent 50%)',
        }}
      />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 'bold',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              background: 'linear-gradient(45deg, #fff, #90caf9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Expertise
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2 }}>
            {skills.map((category, index) => (
              <SkillCard
                key={category.category}
                variants={cardVariants}
                whileHover="hover"
                style={{ rotateX: 0 }}
              >
                <GlowEffect
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <SkillContent>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 'bold', 
                      mb: 2,
                      transform: 'translateZ(10px)',
                      color: '#e3f2fd',
                    }}
                  >
                    {category.category}
                  </Typography>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <Box sx={{ 
                        mb: 2, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        gap: 2
                      }}>
                        <Typography 
                          variant="body2"
                          sx={{ 
                            transform: 'translateZ(5px)',
                            color: '#b3e5fc',
                            flex: 1
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <SkillProgress
                            level={skill.level}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: skillIndex * 0.1,
                              type: 'spring',
                              stiffness: 100,
                            }}
                          >
                            {[...Array(5)].map((_, index) => (
                              <Hexagon
                                key={index}
                                active={index < Math.ceil(skill.level / 20)}
                                initial={{ scale: 0, rotate: -180, y: 20 }}
                                animate={{ 
                                  scale: 1, 
                                  rotate: 0, 
                                  y: 0,
                                  transition: {
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 15,
                                    delay: skillIndex * 0.1 + index * 0.1,
                                  }
                                }}
                                whileHover={{
                                  scale: index < Math.ceil(skill.level / 20) ? 1.2 : 1.1,
                                  rotate: index < Math.ceil(skill.level / 20) ? 30 : 0,
                                  transition: { type: 'spring', stiffness: 400, damping: 10 }
                                }}
                              />
                            ))}
                            {[...Array(3)].map((_, index) => (
                              <SparkleEffect
                                key={`sparkle-${index}`}
                                initial={{ 
                                  opacity: 0,
                                  scale: 0,
                                  x: Math.random() * 100 - 50,
                                  y: Math.random() * 100 - 50
                                }}
                                animate={{ 
                                  opacity: [0, 1, 0],
                                  scale: [0, 1.5, 0],
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
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.3,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </SkillProgress>
                          <ProgressText
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: skillIndex * 0.1 + 0.5,
                              type: 'spring',
                              stiffness: 200
                            }}
                          >
                            {skill.level}%
                          </ProgressText>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </SkillContent>
              </SkillCard>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SkillsSection; 