import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface PersonalInfoProps {
  info: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ info }) => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        {info.name}
      </Typography>
      <Typography variant="h5" color="primary" gutterBottom>
        {info.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {info.summary}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="center">
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{info.email}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="center">
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{info.phone}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{info.location}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfo; 