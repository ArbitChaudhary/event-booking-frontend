import { Box, Typography } from '@mui/material'
import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import  Button  from '@mui/material/Button'


const Banner = () => {
  const el = useRef(null);
  useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ["MOVIES", "EVENTS", "SPORTS"], 
    startDelay: 300,
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 150,
    smartBackspace: true,
    loop: true,
    showCursor: false,
  });

  return () => {
    typed.destroy();
  };
}, []);
  return (
    <>
    <Box sx={{ width: '100%', height: '100vh' }}>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',flexDirection:'column'}}>

      <Box>
       <Typography sx={{        fontSize: {sm:'1.5rem',xs:'1.5rem',md:'2rem',lg:'4rem'},


        fontWeight: 700,
        textAlign:'center',
  letterSpacing: '0.1em',
  mb:2,
  color:'#000000 ', }} >
        BOOK YOUR<br/> TICKET FOR  <Typography variant="span" sx={{
          color:'#B8860B',
        fontWeight: 800,
    letterSpacing: '0.2em',
    fontSize: {sm:'1.5rem',xs:'1.5rem',md:'2rem',lg:'4rem'},
  }} ref={el}></Typography> 
       </Typography>
      </Box>
<Box sx={{color:'#333333',fontSize:{lg:'2.2rem',md:'1rem',sm:'1rem',xs:'1rem'},padding:'5px',textAlign:'center',
     fontWeight: 400,
    letterSpacing: '0.2em',
    lineHeight:{xs:'30px',md:'50px'}

}} >
Safe, secure, reliable ticketing.Your ticket to live entertainment!
</Box>
{/* <Button    variant="contained"
  disableElevation
  sx={{
    borderRadius: '34px',
    mt:2,
    backgroundColor: '#ffa500',
    color: '#333333,',
    fontWeight: 500,
    fontSize:{xs:'.8rem',md:'1rem'  },
    padding: {xs:'8px 30px',md:'10px 40px'},
    transition: 'all 0.3s ease',   
    '&:hover': {
      backgroundColor: '#e74c3c',
      color: '#FFFFFF',    }
  }} > BOOK NOW </Button> */}
</Box>
    </Box>
    
    </>
  )
}

export default Banner