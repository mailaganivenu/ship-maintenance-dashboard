// src/contexts/JobsContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockJobs } from '../data/mockData';

const JobsContext = createContext();

export const useJobs = () => useContext(JobsContext);

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulating fetching jobs data
    setJobs(mockJobs);
  }, []);

  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  const deleteJob = (jobId) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, deleteJob }}>
      {children}
    </JobsContext.Provider>
  );
};
