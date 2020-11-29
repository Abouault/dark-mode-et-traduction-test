import React, {useState} from 'react'
import './DarkMode.css'
import { useTranslation } from 'react-i18next';

const DarkMode = () => {

    const [darkMode,setDarkMode] = useState(false)


    const { t, i18n } = useTranslation();

    const handleClickDarkMode = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

    const handleClickLanguages = (lang) => {
        i18n.changeLanguage(lang);
    }

    return(
        <div className={darkMode ? 'dark-mode' : 'ligth-mode'}>
            <nav>
                <button onClick={handleClickDarkMode}>Dark Mode</button>
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