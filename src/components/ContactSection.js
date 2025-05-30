import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, useTheme, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactContainer = styled(Box)(({ theme }) => ({
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

const ContactCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
    zIndex: 0,
  },
}));

const SocialButton = styled(motion.button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#fff',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-3px)',
  },
}));

const ContactSection = () => {
  const theme = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactContainer>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
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
              mb: 2,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #fff, #a8c0ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(255,255,255,0.2)',
            }}
          >
            Let's Connect
          </Typography>
        </motion.div>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: 'calc(100vh - 150px)',
          mt: 2
        }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactCard>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      color: '#fff',
                      fontWeight: 'bold',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    Get in Touch
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      color: 'rgba(255,255,255,0.8)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, position: 'relative', zIndex: 1 }}>
                    <SocialButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <GitHubIcon />
                    </SocialButton>
                    <SocialButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <LinkedInIcon />
                    </SocialButton>
                    <SocialButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <TwitterIcon />
                    </SocialButton>
                  </Box>
                </ContactCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ContactCard>
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#fff',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#a8c0ff',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#a8c0ff',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.6)',
                          },
                        }}
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#fff',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#a8c0ff',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#a8c0ff',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.6)',
                          },
                        }}
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#fff',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#a8c0ff',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#a8c0ff',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.6)',
                          },
                        }}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      type="submit"
                      sx={{
                        background: 'rgba(156, 39, 176, 0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(156, 39, 176, 0.3)',
                        color: '#fff',
                        boxShadow: '0 4px 20px rgba(156, 39, 176, 0.2)',
                        padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' },
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
                          boxShadow: '0 6px 25px rgba(156, 39, 176, 0.3)',
                          background: 'rgba(156, 39, 176, 0.3)',
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
                      Send Message
                    </Button>
                  </form>
                </ContactCard>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection; 