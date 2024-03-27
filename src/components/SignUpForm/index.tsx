import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useTranslation } from "react-i18next";
import LanguageSelector from '../LanguageSelector';

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { ReactComponent as EmailIcon } from '../../../src/assets/images/EnvelopeSimple_Regular.svg';
import { ReactComponent as LockIcon } from '../../../src/assets/images/Lock_Regular.svg';
import SvgIcon from '@mui/material/SvgIcon';
import { Box, InputLabel } from '@mui/material';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});

const formTheme = createTheme({
    palette: {
        primary: {
            main: "#232F43",
        },
        secondary: {
            main: "#455E87"
        },
        info: {
            main: '#DDDDDD'
        }
    },
});


export default function SignInSide() {

    const { t } = useTranslation();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const OnSubmitHandler = (data: any) => {
        console.log({ data });
        reset();
    };

    return (
        <Stack
            sx={{
                m: 'auto',
                // margin: '0 auto',
                height: 'auto',
                maxHeight: '630px',
                maxWidth: '438px',
                display: 'flex',
                flexDirection: 'column',
                background: '#232F43',
                color: '#FFFFFF',
                borderRadius: '32px',
            }}
            alignItems='center'
            justifyContent='center'
        >
            <Box sx={{ paddingTop: '24px' }}>
                <img
                    src={require("../../../src/assets/images/TMA_LOGO.png")}
                    style={{
                        maxWidth: "139.2px", maxHeight: "60px", marginBottom: '56px'
                    }}
                />
            </Box>


            <Typography variant="h4" align='left' sx={{
                width: '358px', color: "#216CE3", marginBottom: '24px',
            }}>
                {t('login')}
            </Typography>

            <Grid item container component="form" onSubmit={handleSubmit(OnSubmitHandler)} justifyContent='center'>
                <ThemeProvider theme={formTheme}>
                    <InputLabel sx={{ color: 'rgba(221, 221, 221, 1)', textAlign: 'left', width: '358px', marginBottom: '4px' }}>{t('email')}</InputLabel>
                    <TextField
                        {...register("email")}
                        sx={{
                            width: '358px', height: '48px', borderRadius: '8px', border: '1px', marginBottom: '16px'
                        }}
                        inputProps={{ style: { color: "white" } }}
                        required
                        fullWidth
                        type="email"
                        id="email"

                        name="email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        color="secondary" focused
                        placeholder={t('inputEmail')}

                    />
                    {errors.email && <Typography variant='body1' sx={{ color: '#DDD', mb: 1 }}>{errors.email.message}</Typography>}

                    <InputLabel sx={{ color: 'rgba(221, 221, 221, 1)', textAlign: 'left', width: '358px', marginBottom: '4px' }}>{t('pwd')}</InputLabel>
                    <TextField
                        {...register("password")}
                        sx={{
                            width: '358px', height: '48px', borderRadius: '8px', border: '1px', marginBottom: '16px'
                        }}
                        inputProps={{ style: { color: "white" } }}
                        required

                        type={showPassword ? 'text' : "password"}
                        id="password"
                        name="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
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
                    {errors.password && <Typography variant='body1' sx={{ color: '#DDD' }}>{errors.password?.message}</Typography>}

                </ThemeProvider>

                <Grid item container sx={{ width: '358px' }} justifyContent='space-around'>
                    <Grid item xs={6} >
                        <FormControlLabel
                            control={<Checkbox value="remember" sx={{ color: "#455E87" }} />}
                            label={t('rmbme')}
                        />
                    </Grid>


                    <Grid item xs={6} sx={{ textAlign: 'right', margin: 'auto' }}>
                        <Link
                            href="#"
                            variant="body1"

                        >
                            {t('forgot')}
                        </Link>
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ my: 3, width: '358px', height: '40px', padding: '0 24px 0 24px' }}
                >
                    {t('login')}
                </Button>

                <Grid item container gap={1} sx={{ marginBottom: '24px', width: '358px' }}>
                    <Typography variant='body1'>{t('new')}</Typography>
                    <Link href="#" variant="body1">
                        {t('signup')}
                    </Link>
                </Grid>


                <LanguageSelector />

            </Grid>
        </Stack>
    )
}