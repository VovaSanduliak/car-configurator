import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDecector from "i18next-browser-languagedetector";

import { LOCALS } from "../constants";
import { uk } from "./copies/uk";
import { en } from "./copies/en";

const resources = {
  [LOCALS.EN]: {
    translation: en,
  },
  [LOCALS.UK]: {
    translation: uk,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDecector)
  .init({
    resources,
    fallbackLng: [LOCALS.EN],

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
