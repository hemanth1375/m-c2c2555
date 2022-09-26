import React from "react";

interface LocaleContextInterface {
  locale?: any;
  setLocale?: any;
}

export const localeContextObj = React.createContext<LocaleContextInterface>({});
