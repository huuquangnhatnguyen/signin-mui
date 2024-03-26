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
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import * as React from 'react';


import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Carousel } from '../Carousel';


import * as locales from '@mui/material/locale';
type SupportedLocales = keyof typeof locales;

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


export default function SignInSide() {

    const [locale, setLocale] = React.useState<SupportedLocales>('enUS');

    const themeWithLocale = React.useMemo(
        () => createTheme(defaultTheme, locales[locale]),
        [locale, defaultTheme],
    );

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLocale("viVN");
        console.log(locale)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={themeWithLocale}>
            <Box component="main" sx={{
                height: '100vh', background: '#1C2636'
            }}>
                <Grid container>

                    <CssBaseline />

                    <Grid item xs sx={{ background: '#1C2636', display: 'flex' }} justifyContent='center'>
                        <Box justifyContent='center'
                            sx={{
                                my: 50,
                                mx: 5,
                                paddingTop: 15,
                                paddingBottom: 15,
                                maxHeight: '60%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                background: '#232F43',
                                color: '#FFFFFF',
                                borderRadius: '10px',
                            }}
                        >
                            <img
                                src={require("../../../src/assets/images/TMA_LOGO.png")}
                                style={{ maxWidth: "20%", maxHeight: "20%", marginTop: '2rem', marginBottom: '2rem' }}
                            />
                            <Typography component="h1" variant="h5" align='left' sx={{
                                width: '80%', paddingLeft: 1, color: "#216CE3"
                            }}>
                                Log in
                            </Typography>

                            <Grid container component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} justifyContent='center'>
                                <ThemeProvider theme={formTheme}>
                                    <TextField
                                        sx={{ padding: 1, width: '80%' }}
                                        inputProps={{ style: { color: "white" } }}
                                        margin="dense"
                                        required
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
                                        sx={{ padding: 1, width: '80%' }}
                                        inputProps={{ style: { color: "white" }, }}
                                        margin="dense"
                                        required
                                        type={showPassword ? 'text' : 'password'}
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

                                </ThemeProvider>

                                <Grid container sx={{ mx: 1, width: '80%' }} >
                                    <Grid item xs={6} sx={{ textAlign: 'left', paddingLeft: 1, }}>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Remember me"
                                            sx={{ alignItems: 'center', paddingLeft: 1, width: '80%' }}
                                        />
                                    </Grid>


                                    <Grid item xs={6} sx={{ textAlign: 'right', paddingRight: 2, margin: 'auto' }}>
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
                                    sx={{ mt: 3, mb: 2, mx: 1, width: '80%' }}
                                >
                                    Sign In
                                </Button>

                                <Grid container gap={1} sx={{ mx: 1, my: 2, width: '80%' }}>
                                    <Typography variant='body2'>Don't have an account?</Typography>
                                    <Link href="#" variant="body2">
                                        {"Sign Up"}
                                    </Link>
                                </Grid>

                                <Grid container rowSpacing={{ xs: 1, md: 2, xl: 3 }} alignItems="center" justifyContent='center'>
                                    <Grid item xs={2} alignItems="center" >
                                        <img
                                            src={require("../../../src/assets/images/VIE_FLAG.png")}
                                            style={{ width: "20px", height: "20px" }}
                                        />
                                        <Button onClick={
                                            handleClickLanguage
                                        }>VIE</Button>
                                    </Grid>

                                    <Grid item xs={2} alignItems="center" >
                                        <img
                                            src={require("../../../src/assets/images/US_FLAG.png")}
                                            style={{ width: "20px", height: "20px" }}
                                        />
                                        <Button onClick={
                                            handleClickLanguage
                                        }>ENG</Button>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Box>
                    </Grid >

                    <Grid
                        item
                        xs={10}
                        md={8}
                        sx={{ background: '#1C2636' }}
                    >

                        <Box
                            sx={{
                                height: '1500px',
                                maxWidth: '800px',
                                alignItems: 'center',
                                background: '#216CE3',
                                borderBottomLeftRadius: '60px',
                                borderTopLeftRadius: '60px',
                            }}
                        >
                            <Carousel />
                        </Box>

                    </Grid>


                </Grid >
            </Box >
        </ThemeProvider >
    );
}