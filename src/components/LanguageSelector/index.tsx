import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "EN", lang: "English" },
    { code: "VI", lang: "Vietnamese" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    };

    return (

        <Grid item container justifyContent='center' sx={{ bgcolor: '#ADC9F5', width: 'auto', borderRadius: '10px' }}>
            {languages.map((lng) => {
                return (
                    <Button
                        sx={{
                            display: 'inline-flex',

                        }}
                        className={lng.code === i18n.language ? "selected" : ""}
                        key={lng.code}
                        onClick={() => changeLanguage(lng.code)}>
                        <img
                            src={require(`../../../src/assets/images/${lng.code}.png`)}
                            style={{ width: "20px", height: "20px" }}
                        />

                        <Typography>{lng.code}</Typography>
                    </Button>

                );

            })}
        </Grid>
    );
};

export default LanguageSelector;