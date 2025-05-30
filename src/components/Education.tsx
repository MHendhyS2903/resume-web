import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface EducationProps {
  educations: Education[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <Box>
      {educations.map((edu, index) => (
        <Paper key={index} elevation={1} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            {edu.degree} in {edu.field}
          </Typography>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            {edu.school}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {edu.startDate} - {edu.endDate}
          </Typography>
          <Typography variant="body1">{edu.description}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Education; 