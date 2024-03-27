import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageSwiper from './components/Slider';

import './App.css';
import SignInSide from './components/SignUpForm';

const defaultTheme = createTheme();


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <CssBaseline />

      <Box sx={{ height: '100vh' }}>
        <Grid container component="main" sx={{
          background: '#1C2636', maxHeight: '100vh', maxWidth: '100vw'
        }}>

          <Grid className='SignIn' item xs sx={{ background: '#1C2636', display: 'flex' }}>
            <SignInSide />
          </Grid>

          <Grid className='Swiper' item
            xs={7}
            sx={{
              height: '100%',
              maxWidth: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#216CE3',
              borderBottomLeftRadius: '60px',
              borderTopLeftRadius: '60px',
            }}
          >
            <ImageSwiper />
          </Grid>

        </Grid>
      </Box>
    </ThemeProvider >
  );
}

export default App;


