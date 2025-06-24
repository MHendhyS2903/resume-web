import React, { useState, useMemo } from 'react';
import { Box, Container, Typography, TextField, Button, useTheme, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
}

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

interface ButtonStyles {
  submit: React.CSSProperties;
}

const ContactContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
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

const ContactCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(3),
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
    background: 'radial-gradient(circle at top right, rgba(255, 105, 180, 0.1), rgba(147, 112, 219, 0.1), transparent 70%)',
    zIndex: 0,
  },
}));

const SocialButton = styled(motion.button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  width: '44px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#ff69b4',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255, 105, 180, 0.1), rgba(147, 112, 219, 0.1))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-2px) rotate(5deg)',
    '&::before': {
      opacity: 1,
    },
    background: 'rgba(255, 255, 255, 0.15)',
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
  transition: 'all 0.3s ease',
}));

const ContactInfoCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(3),
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
    background: 'radial-gradient(circle at top right, rgba(255, 105, 180, 0.1), rgba(147, 112, 219, 0.1), transparent 70%)',
    zIndex: 0,
  },
}));

const ContactGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(1.5),
  width: '100%',
}));

const ContactInfoItem = styled(motion.a)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(1.5),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.03)',
  textDecoration: 'none',
  color: 'inherit',
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255, 105, 180, 0.1), rgba(147, 112, 219, 0.1))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    '&::before': {
      opacity: 1,
    },
    '& .contact-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      background: 'linear-gradient(45deg, rgba(255, 105, 180, 0.2), rgba(147, 112, 219, 0.2))',
    },
    '& .contact-value': {
      color: '#ff69b4',
    },
  },
  transition: 'all 0.3s ease',
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.1)',
  color: '#ff69b4',
  marginBottom: theme.spacing(1),
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '1.2rem',
  },
}));

const ContactInfoContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(0.25),
}));

const ContactLabel = styled(Typography)(({ theme }) => ({
  color: 'rgba(255,255,255,0.6)',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 600,
}));

const ContactValue = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: 500,
  fontSize: '0.85rem',
  transition: 'color 0.3s ease',
  textAlign: 'center',
  wordBreak: 'break-word',
}));

const Footer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
  marginTop: '-2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 105, 180, 0.3), transparent)',
  }
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '0.9rem',
  '& span': {
    background: 'linear-gradient(45deg, #ff69b4, #9370db)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 600,
  }
}));

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo: ContactInfo[] = useMemo(() => [
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+62 888-1853-835',
      link: 'tel:+628881853835'
    },
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'm.hendhy.s@gmail.com',
      link: 'mailto:m.hendhy.s@gmail.com'
    },
    {
      icon: <LocationOnIcon />,
      label: 'Location',
      value: 'Bassura City, Jakarta',
      link: 'https://maps.app.goo.gl/Rk6m8FWf89jwayJ98'
    },
    {
      icon: <LanguageIcon />,
      label: 'Website',
      value: 'hendhy.dev',
      link: 'https://hendhy.dev'
    }
  ], []);

  const socialLinks: SocialLink[] = useMemo(() => [
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/MHendhyS2903',
    },
    {
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/mhendhys',
    },
    {
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/m.hendhy.s',
    }
  ], []);

  const buttonStyles: ButtonStyles = useMemo(() => ({
    submit: {
      background: 'rgba(255, 105, 180, 0.2)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 105, 180, 0.3)',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(255, 105, 180, 0.2)',
      padding: '16px 40px',
      fontSize: '1.1rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: '200px',
      maxWidth: '280px',
      position: 'relative',
    }
  }), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactContainer id="contact">
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
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 2, 
            justifyContent: 'center',
            width: '100%'
          }}>
            <Box sx={{ flex: { xs: 1, md: 6 } }}>
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
                      background: 'linear-gradient(45deg, #ff69b4, #9370db)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 10px rgba(255, 105, 180, 0.2)',
                    }}
                  >
                    Get in Touch
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'rgba(255,255,255,0.8)',
                      position: 'relative',
                      zIndex: 1,
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      gap: 2, 
                      position: 'relative', 
                      zIndex: 1,
                      justifyContent: 'center',
                    }}
                  >
                    {socialLinks.map((social, index) => (
                      <SocialButton 
                        key={index}
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        {social.icon}
                      </SocialButton>
                    ))}
                  </Box>
                </ContactCard>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <ContactInfoCard sx={{ mt: 2, p: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 3,
                        color: '#fff',
                        fontWeight: 'bold',
                        position: 'relative',
                        zIndex: 1,
                        textAlign: 'center',
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                        background: 'linear-gradient(45deg, #ff69b4, #9370db)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 2px 10px rgba(255, 105, 180, 0.2)',
                      }}
                    >
                      Contact Info
                    </Typography>
                    <ContactGrid>
                      {contactInfo.map((info, index) => (
                        <ContactInfoItem
                          key={info.label}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        >
                          <ContactIcon className="contact-icon">
                            {info.icon}
                          </ContactIcon>
                          <ContactInfoContent>
                            <ContactLabel>
                              {info.label}
                            </ContactLabel>
                            <ContactValue className="contact-value">
                              {info.value}
                            </ContactValue>
                          </ContactInfoContent>
                        </ContactInfoItem>
                      ))}
                    </ContactGrid>
                  </ContactInfoCard>
                </motion.div>
              </motion.div>
            </Box>

            <Box sx={{ flex: { xs: 1, md: 6 } }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ContactCard>
                  <form onSubmit={handleSubmit} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 4,
                        color: '#fff',
                        fontWeight: 'bold',
                        position: 'relative',
                        zIndex: 1,
                        background: 'linear-gradient(45deg, #ff69b4, #9370db)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 2px 10px rgba(255, 105, 180, 0.2)',
                      }}
                    >
                      Send Message
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      flex: 1,
                      gap: 3,
                      position: 'relative',
                      zIndex: 1,
                    }}>
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
                              borderColor: '#ff69b4',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#ff69b4',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.6)',
                          },
                        }}
                      />
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
                              borderColor: '#ff69b4',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#ff69b4',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.6)',
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={6}
                        variant="outlined"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        sx={{
                          flex: 1,
                          '& .MuiOutlinedInput-root': {
                            color: '#fff',
                            height: '100%',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#ff69b4',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#ff69b4',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.6)',
                          },
                        }}
                      />
                      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                        <Button
                          variant="contained"
                          size="large"
                          type="submit"
                          sx={buttonStyles.submit}
                        >
                          Send Message
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </ContactCard>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer>
        <FooterText>
          Design by <span>MHendhyS</span> © 2025
        </FooterText>
      </Footer>
    </ContactContainer>
  );
};

export default ContactSection; 