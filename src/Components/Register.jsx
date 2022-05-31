import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { account } from '../services/appwriteConfig';
import { useNavigate } from "react-router";

 const theme = createTheme();
 
const Signup = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    userId: "",
    name: '',
    email: '',
    password: '',
  });

  const signupUser = async (e) => {
    e.preventDefault();
    if (userDetails.email && userDetails.password && userDetails.name ){
      try {
        await account.create(
          "unique()",
         userDetails.email,
         userDetails.password,
         userDetails.name,
       );
       await account.createSession(userDetails.email, userDetails.password);
 
       // await account.createVerification("http://localhost:3000/home");
       console.log("success");
       navigate('/dashboard')

       
     } catch (error) {
       console.log("here")
       //toast.error(`${error.message}`);
     }
    } else {
     // toast.error('Fill out the details first!')
    }
   
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{"minHeight": "100vh","backgroundColor": "rgb(226 232 240)"}}>
      <Container   component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                onChange={(e)=>{
                  setUserDetails({
                    ...userDetails,
                    name : e.target.value
                  })
                }}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="FullName"
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{
                    setUserDetails({
                      ...userDetails,
                      email : e.target.value
                    })
                  }}
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>{
                    setUserDetails({
                      ...userDetails,
                      password : e.target.value
                    })
                  }}
                />
              </Grid>
              <Grid item xs={12}>
            
        
              </Grid>
            </Grid>
            <Button onClick={(e)=> signupUser(e)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      </div>
    
    </ThemeProvider>
  );
};

export default Signup;

