import React, {useState} from 'react'
import './DarkMode.css'
import { useTranslation } from 'react-i18next';

const DarkMode = () => {

    const { t, i18n } = useTranslation();

    const handleClickLanguages = (lang) => {
        i18n.changeLanguage(lang);
    }

    return(
        <div>
            <nav>
                <button onClick={() => handleClickLanguages('fr')}>Francais</button>
                <button onClick={() => handleClickLanguages('en')}>Anglais</button>
                <button onClick={() => handleClickLanguages('chi')}>Chinois</button>
            </nav>
            <main>
                <h1></h1>
                <h1>{t('content.1')}</h1>
                <h2>{t('content.2')}</h2>
            </main>
        </div>
    )
}

export default DarkMode;