import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import * as React from 'react';
// import { SwipeableViews } from 'react-swipeable-views-v18';
// import { autoPlay } from 'react-swipeable-views-utils-react-18-fix';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const defaultTheme = createTheme();

const formTheme = createTheme({
    palette: {
        primary: {
            main: "#232F43",
        },
        secondary: {
            main: "#455E87"
        }
    },
});

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//     {
//         imgPath:
//             'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//     },
//     {
//         imgPath:
//             'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//     },
//     {
//         imgPath:
//             'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//     },
// ];

// const [activeStep, setActiveStep] = React.useState(0);
// const maxSteps = images.length;

// const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
// };

// const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
// };

// const handleStepChange = (step: number) => {
//     setActiveStep(step);
// };

export default function SignInSide() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box>
                <Grid container component="main" sx={{
                    height: '100vh', background: '#1C2636'
                }}>


                    <CssBaseline />

                    <Grid item component={Paper} elevation={0} square sx={{ background: '#1C2636' }}>
                        <Box
                            sx={{
                                my: 30,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                background: '#232F43',
                                color: '#FFFFFF',
                                borderRadius: '10px',
                            }}
                        >
                            <img
                                src="./assets/images/image 13.jpg"
                                style={{ maxWidth: "100%" }}
                            />
                            <Typography component="h1" variant="h5" align='left' sx={{
                                width: '100%', paddingLeft: 1, color: "#216CE3"
                            }}>
                                Log in
                            </Typography>

                            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <ThemeProvider theme={formTheme}>
                                    <TextField
                                        sx={{ padding: 1 }}
                                        inputProps={{ style: { color: "white" } }}
                                        margin="dense"
                                        required
                                        fullWidth
                                        type="email"
                                        id="email"
                                        label="Email"
                                        name="email"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailOutlinedIcon style={{ color: '#DDD' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        color="secondary" focused
                                        placeholder="Your email"
                                    />

                                    <TextField
                                        sx={{ padding: 1 }}
                                        inputProps={{ style: { color: "white" } }}
                                        margin="dense"
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        label="Password"
                                        name="password"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockOutlinedIcon style={{ color: '#DDD' }} />
                                                </InputAdornment>
                                            ),

                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        style={{ color: '#DDD' }}
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        color="secondary" focused
                                        placeholder="Your Password"
                                    />

                                    {/* <FormControl sx={{ padding: 1, width: '100%' }} variant="outlined" color="secondary" focused>
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}



                                            startAdornment={
                                                <InputAdornment position="start" >
                                                    <LockOutlinedIcon style={{ color: '#DDD' }} />
                                                </InputAdornment>
                                            }

                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        style={{ color: '#DDD' }}
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                            placeholder='Your PassWord'
                                        />
                                    </FormControl> */}
                                </ThemeProvider>

                                <Grid container sx={{ mx: 1 }}>
                                    <Grid item xs={6} md={6}>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Remember me"
                                        />
                                    </Grid>


                                    <Grid item xs={6} md={6} alignItems='center'>
                                        <Link
                                            href="#"
                                            variant="body2"

                                        >
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                </Grid>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, mx: 1, width: '95%' }}
                                >
                                    Sign In
                                </Button>

                                <Grid container spacing={2} sx={{ mx: 1, my: 2 }}>
                                    <Typography variant='body2'>Don't have an account?</Typography>
                                    <Link href="#" variant="body2">
                                        {"Sign Up"}
                                    </Link>
                                </Grid>


                                {/* <Copyright sx={{ mt: 5 }} /> */}
                            </Box>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={10}
                        md={8}
                    >
                        {/* <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                            <Paper
                                square
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 50,
                                    pl: 2,
                                    bgcolor: 'background.default',
                                }}
                            >
                            </Paper>
                            <AutoPlaySwipeableViews
                                axis={defaultTheme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {images.map((step, index) => (
                                    <div>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 255,
                                                    display: 'block',
                                                    maxWidth: 400,
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={step.imgPath}
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {defaultTheme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {defaultTheme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            /> */}
                        {/* </Box> */}
                    </Grid>


                </Grid>
            </Box>
        </ThemeProvider >
    );
}