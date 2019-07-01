import React, { useState } from 'react';

const LanguageContext = React.createContext([{}, () => { }]);

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState(null);
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {props.children}
    </LanguageContext.Provider>
  )
}
export const LanguageConsumer = LanguageContext.Consumer;

export default LanguageContext;
