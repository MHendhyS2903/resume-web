import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const TechItem = styled(motion.div)(({ theme }) => ({
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#fff',
  fontSize: '0.9rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0.3rem 0.8rem',
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '0.4rem 0.9rem',
    fontSize: '0.85rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
  },
}));

export default TechItem; 