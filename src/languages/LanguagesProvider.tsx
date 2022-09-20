import React, {Fragment, ReactNode} from 'react';
import {IntlProvider} from "react-intl"
import { LOCALES } from './locales'; 
import languageMessages from './languageMessages';

interface Props {
    children: ReactNode;
    locale: string;
}


const LanguagesProvider=({children, locale = LOCALES.ENGLISH}:Props):JSX.Element=>{
    return (
        <IntlProvider 
        locale={locale}
        textComponent={Fragment}
        messages={languageMessages[locale]}>
            {children}
        </IntlProvider>
    )
}

export default LanguagesProvider

//so messages=lnaguageMessages[locale]==={}["en-US"] ===obj with sq bracked accessing{name:"English"}
//the result will be obj only with english messages==={name:"English"}



