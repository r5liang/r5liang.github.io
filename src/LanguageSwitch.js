// @flow

import * as React from 'react';
import type Language from './App';
import './App.css';

type LanguageSwitchProps = {
  currLanguage: Language,
  newLanguage: Language,
  setLanguage: (language: Language) => void,
};

const getLanguageDisplay = (l: Language) => {
  switch (l) {
    case 'en':
      return 'English';
    case 'zh':
      return '中文';
    case 'jp':
      return '日本語';
    default:
      throw new Error('wtf must be tripping');
  }
};

function LanguageSwitch(props: Props): React.Node {
  const { currLanguage, newLanguage, setLanguage } = props;
  
  return currLanguage === newLanguage ? (
    getLanguageDisplay(newLanguage)
  ) : (
    <a className="Profile-link" href="javascript:void(0)" onClick={() => setLanguage(newLanguage)}>
      {getLanguageDisplay(newLanguage)}
    </a>
  );
}

export default LanguageSwitch;
