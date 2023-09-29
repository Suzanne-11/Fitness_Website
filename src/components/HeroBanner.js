import React from 'react'
import {Box, Stack, Button, Typography} from '@mui/material';
import HeroBannerImage from '../assets/images/1.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg:'120px', xs:'50px'},
        ml: {lg: '200px', sm:'100px'}
    }} position="relative" p="20px">
        <Typography color='#0E21A6' fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>

        <Typography fontWeight={700}
        sx={{fontSize:{lg:'44px', xs:'40px'}}} mb="23px" mt="30px"
        >Get Fit, <br />Stay Lit</Typography>

        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={2}>Check out the most effective exercises</Typography>

        <Button variant='contained' href="#exercises"
        sx={{
          bgcolor: '#0E21A6'}}>Explore Exercises</Button>
        {/**  
        <Typography fontWeight={600} color="#6499E9" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography> */}
    {/* 
        <img src={HeroBannerImage} style={{height: '90vh', width: 'auto'}} alt="banner" className="hero-banner-img" />  */}
    </Box>
  )
}

export default HeroBanner