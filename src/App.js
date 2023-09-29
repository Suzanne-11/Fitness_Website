import React from "react";
import { ReactDOM } from "react";
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
//width={{ xs: '100%', sm: '200px', md: '300px', lg: '400px', xl: '1488px' }} m="auto"

function App() {
  return (
    <Box width="400px" sx={{width: {xl:'1488px'}}} m="auto">
      <Navbar /> 
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
