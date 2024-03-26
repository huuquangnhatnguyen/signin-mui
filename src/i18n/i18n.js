import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// import translationEN from "../src/translationEN.json";
// import translationDE from "../src/translationDE.json";

// const resources = {
//     EN: {
//         translation: translationEN
//     },
//     VI: {
//         translation: translationDE
//     }
// };


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: true,
        fallbackLng: "EN",
        returnObjects: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;