import { createSlice } from '@reduxjs/toolkit';

interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Skill {
  name: string;
  level: string;
}

interface ResumeState {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  education: Education[];
  experience: Experience[];
  skills: Skill[];
}

const initialState = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  },
  education: [],
  experience: [],
  skills: []
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {}
});

export default resumeSlice.reducer; 