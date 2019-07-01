// @flow
import React, { useContext } from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Language.module.scss';
import LanguageContext from '../../../context/LanguageContext';

type Props = {
  flags: {
    pt: string,
    en: string,
  },
};

const Language = ({ flags }: Props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  return (
    <div className={styles['flags__list']}>
      <button className={language === 'pt' ? styles['flags__list-selected'] : styles['flags__list-item']} onClick={() => setLanguage('pt')}>
        <img className={styles['icon']} src={withPrefix(flags.pt)} alt="PT" />
      </button>
      <button className={language === 'en' ? styles['flags__list-selected'] : styles['flags__list-item']} onClick={() => setLanguage('en')}>
        <img className={styles['icon']} src={withPrefix(flags.en)} alt="EN" />
      </button>
    </div>
  );
}

export default Language;