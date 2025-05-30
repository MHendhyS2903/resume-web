import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface ExperienceProps {
  experiences: Experience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Box>
      {experiences.map((exp, index) => (
        <Paper key={index} elevation={1} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            {exp.position}
          </Typography>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            {exp.company}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {exp.startDate} - {exp.endDate}
          </Typography>
          <Typography variant="body1">{exp.description}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Experience; 