import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i18n/locales/en/translation.json";
import kr from "../i18n/locales/kr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    kr: kr,
  },
  lng: "en",
  fallbackLng: "en",
  ns: ["translation"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
