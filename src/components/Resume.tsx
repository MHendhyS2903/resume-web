import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Paper, Box, Typography, Grid } from '@mui/material';
import { RootState } from '../store/store';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const Resume: React.FC = () => {
  const { personalInfo, education, experience, skills } = useSelector(
    (state: RootState) => state.resume
  );

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ mb: 4 }}>
          <PersonalInfo info={personalInfo} />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Experience
              </Typography>
              <Experience experiences={experience} />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Education
              </Typography>
              <Education educations={education} />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Skills
              </Typography>
              <Skills skills={skills} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Resume; 