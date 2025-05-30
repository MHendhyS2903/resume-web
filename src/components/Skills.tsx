import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

interface Skill {
  name: string;
  level: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return 'success';
      case 'advanced':
        return 'primary';
      case 'intermediate':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={`${skill.name} (${skill.level})`}
            color={getLevelColor(skill.level) as any}
            sx={{ m: 0.5 }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Skills; 