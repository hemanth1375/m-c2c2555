import React, { useState } from "react";
import { LOCALES } from "languages";

// const [locale, setLocale] = useState(LOCALES.ENGLISH);

interface localeContextInterface {
  locale?: any;
  setLocale?: any;
}

export const localeContextObj = React.createContext<localeContextInterface>({});
