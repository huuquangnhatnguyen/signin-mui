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
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';


import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ImageSwiper from '../Slider';

import LanguageSelector from '../LanguageSelector';
import { Trans, useTranslation, withTranslation } from "react-i18next";

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

    const { t } = useTranslation();
    const login = t('pwd');
    console.log(login)

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
            <Box sx={{ height: '100vh' }}>
                <Grid container component="main" sx={{
                    background: '#1C2636', maxHeight: '100vh'
                }}>


                    <CssBaseline />

                    <Grid item xs sx={{ background: '#1C2636' }}>
                        <Stack
                            sx={{
                                my: 20,
                                mx: 20,
                                // margin: '0 auto',
                                height: 'auto',
                                maxHeight: '70%',
                                maxWidth: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                                background: '#232F43',
                                color: '#FFFFFF',
                                borderRadius: '10px',
                            }}
                            alignItems='center'
                            justifyContent='center'
                        >
                            <img
                                src={require("../../../src/assets/images/TMA_LOGO.png")}
                                style={{
                                    maxWidth: "20%", maxHeight: "20%", margin: '2rem auto'
                                }}
                            />

                            <Typography component="h1" variant="h4" align='left' sx={{
                                width: '80%', color: "#216CE3"
                            }}>
                                {t('login')}
                            </Typography>

                            <Grid item container component="form" onSubmit={handleSubmit} sx={{ mt: 1, my: 5 }}
                                justifyContent='center'>
                                <ThemeProvider theme={formTheme}>
                                    <TextField
                                        sx={{ padding: 1, width: '80%', my: 1 }}
                                        inputProps={{ style: { color: "white" } }}
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
                                        placeholder={t('inputEmail')}

                                    />

                                    <TextField
                                        sx={{ padding: 1, width: '80%', my: 1 }}
                                        inputProps={{ style: { color: "white" } }}
                                        required

                                        type={showPassword ? 'text' : "password"}
                                        id="password"
                                        label={t('pwd')}
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
                                        placeholder={t('inputPwd')}
                                    />


                                </ThemeProvider>

                                <Grid item container sx={{ mx: 1, width: '80%' }} justifyContent='space-around'>
                                    <Grid item xs={6}>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label={t('rmbme')}
                                        />
                                    </Grid>


                                    <Grid item xs={6} sx={{ textAlign: 'right', paddingRight: 2, margin: 'auto' }}>
                                        <Link
                                            href="#"
                                            variant="body2"

                                        >
                                            {t('forgot')}
                                        </Link>
                                    </Grid>
                                </Grid>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, mx: 1, width: '80%' }}
                                >
                                    {t('login')}
                                </Button>

                                <Grid item container gap={1} sx={{ mx: 1, my: 2, width: '80% ' }}>
                                    <Typography variant='body2'>{t('new')}</Typography>
                                    <Link href="#" variant="body2">
                                        {t('signup')}
                                    </Link>
                                </Grid>


                                <LanguageSelector />

                            </Grid>
                        </Stack>
                    </Grid>

                    <Grid item
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