import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i18n/locales/en/translation.json";
import kr from "../i18n/locales/kr/translation.json";

const resources = {
  en: {
    translation: en,
  },

  kr: {
    translation: kr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
