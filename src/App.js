// @flow

import angery_react from './angery_react.jpg';
import './App.css';
import {useState} from 'react';
import * as React from 'react';
import EN from './en.json';
import ZH from './zh.json';
import JP from './jp.json';
import LanguageSwitch from './LanguageSwitch';

export type Language = "en" | "zh" | "jp";

function App(): React.Node {
  const [language, setLanguage] = useState("en");
  
  const localizeHelper = (key: string) => {
      switch (language) {
        case "en":
          return EN[key];
        case "zh":
          return ZH[key];
        case "jp":
          return JP[key];
        default:
          throw new Error("wtf must be tripping");
      }
  }
  // fall back to English if a translation is missing
  const localize = (key: string) => {
    return localizeHelper(key) || EN[key];
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={angery_react} className="App-logo" alt="angery react" />
        <div>
          {localize("intro")}
        </div>
        <div className="App-horiz-layout">
          <a
            className="Profile-link"
            href="https://www.linkedin.com/in/richardrliang/"
            target="_blank"
            rel="noreferrer"
          >
            {localize("linkedin")}
          </a>
          <a
            className="Profile-link"
            href="https://www.facebook.com/richard.liang.583/"
            target="_blank"
            rel="noreferrer"
          >
            {localize("facebook")}
          </a>
          <a
            className="Profile-link"
            href="https://twitter.com/angery_rliang"
            target="_blank"
            rel="noreferrer"
          >
            {localize("twitter")}
          </a>
        </div>
        <div className="App-horiz-layout">
          <LanguageSwitch currLanguage={language} newLanguage="en" setLanguage={setLanguage} />
          <LanguageSwitch currLanguage={language} newLanguage="zh" setLanguage={setLanguage} />
          <LanguageSwitch currLanguage={language} newLanguage="jp" setLanguage={setLanguage} />
        </div>
      </header>
    </div>
  );
}

export default App;
