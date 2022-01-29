// @flow

import angery_react from './angery_react.jpg';
import './App.css';
import { useState } from 'react';
import * as React from 'react';
import EN from './en.json';
import ZH from './zh.json';
import JP from './jp.json';
import LanguageSwitch from './LanguageSwitch';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WishCalculator from './WishCalculator';
import { Helmet } from 'react-helmet';

// import ImageMapper from 'react-image-mapper';

export type Language = 'en' | 'zh' | 'jp';

function Main(props: { language: Language, setUseBackground: (val: boolean) => void }): React.Node {
  const localizeHelper = (key: string) => {
    switch (props.language) {
      case 'en':
        return EN[key];
      case 'zh':
        return ZH[key];
      case 'jp':
        return JP[key];
      default:
        throw new Error('wtf must be tripping');
    }
  };
  // fall back to English if a translation is missing
  const localize = (key: string) => {
    return localizeHelper(key) || EN[key];
  };

  // const MAP = {
  // name: "hi",
  // areas: [
  // {
  // name: 'middle',
  // shape: 'circle',
  // coords: [704, 627, 126],
  // href: 'https://google.com',
  // },
  // ],
  // };
  // <ImageMapper
  // src={angery_react}

  // alt="angery react"
  // map={MAP}
  // />

  return (
    <>
      <div className="Homepage">
        <Helmet>
          <title>Richard's site</title>
        </Helmet>
        <div className="App-horiz-layout">
          <img src={angery_react} className="App-logo" alt="angery react" />
        </div>

        <div className="App-horiz-layout">{localize('intro')}</div>
        <div className="App-horiz-layout">
          <a
            className="Profile-link"
            href="https://www.linkedin.com/in/richardrliang/"
            target="_blank"
            rel="noreferrer"
          >
            {localize('linkedin')}
          </a>
          <a
            className="Profile-link"
            href="https://www.facebook.com/richard.liang.583/"
            target="_blank"
            rel="noreferrer"
          >
            {localize('facebook')}
          </a>
          <a className="Profile-link" href="https://twitter.com/angery_rliang" target="_blank" rel="noreferrer">
            {localize('twitter')}
          </a>
        </div>
      </div>
    </>
  );
}

function App(): React.Node {
  const [language, setLanguage] = useState('en');

  return (
    // A <Routes> looks through all its children <Route>
    // elements and renders the first one whose path
    // matches the current URL. Use a <Routes> any time
    // you have multiple routes, but you want only one
    // of them to render at a time

    <header className="App-header">
      <div className="Main-container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Main language={language} />} />
            <Route path="/calc" element={<WishCalculator language={language} />} />
          </Routes>
        </Router>
      </div>
      <div className="App-language-layout">
        <LanguageSwitch currLanguage={language} newLanguage="en" setLanguage={setLanguage} />
        <LanguageSwitch currLanguage={language} newLanguage="zh" setLanguage={setLanguage} />
        <LanguageSwitch currLanguage={language} newLanguage="jp" setLanguage={setLanguage} />
      </div>
    </header>
  );
}

export default App;
