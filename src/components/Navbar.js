import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

{/*
#053B50, #176B87, #6499E9, #9EDDFF, #64CCC5, #EEEEEE -- dark to light
*/}

const Navbar = () => {
  return (
    <Stack
        direction="row"
        justifyContent="space-around"
        sx = {{gap:{ sm:'122px', xs: '40px' },
        mt : { sm:'32px', xs:'20px'}, justifyContent: 'none'}} px="20px">
        <Link to="/">  {/* Will point to the home page */}
            <img src={Logo} style={{
                width: '48px', height: '48px', margin: '0 20px'
            }} />
        </Link>

        <Stack
            direction="row"
            gap="20px"
            fontSize="24px"
            alignItems="flex-end"
        >
            <Link to='/' style={{
                textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #0E21A6'}}>Home</Link>
            <a href="#exercises" style={{
                textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar