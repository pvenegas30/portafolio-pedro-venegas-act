import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import { RiEmphasis } from "react-icons/ri";

function Idioma() {

  const { t, i18n } = useTranslation();
  const [language, setLenguage] = useState('es');

  const onChangeLanguaje = () => {
    i18n.changeLanguage(language);
    if (language === 'es') {
      setLenguage('en');
    } else {
      setLenguage('es');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button title={t('home.button.change')} className='p-2 bg-teal-600 rounded-full text-white' onClick={onChangeLanguaje}>
          <RiEmphasis />
        </button>
      </header>
    </div>
  );
}

export default Idioma;
