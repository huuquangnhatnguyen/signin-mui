import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import translationEN from "../../src/assets/locale/translationEN.json";
import translationVI from "../../src/assets/locale/translationVI.json";

const resources = {
    EN: {
        translation: translationEN
    },
    VI: {
        translation: translationVI
    }
};


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'VI',
        debug: true,
        fallbackLng: "EN",
        returnObjects: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;