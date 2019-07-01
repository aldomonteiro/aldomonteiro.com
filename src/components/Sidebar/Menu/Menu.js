// @flow
import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import LanguageContext from '../../../context/LanguageContext';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  return (
    <nav className={styles['menu']}>
      <ul className={styles['menu__list']}>
        {menu.map((item) => (
          <li className={styles['menu__list-item']} key={item.path}>
            {/* <Link
              to={item.path}
              className={styles['menu__list-item-link']}
              activeClassName={styles['menu__list-item-link--active']}
            >
              {item.label}
            </Link> */}
            <button
              className={styles['link-button']}
              onClick={() => {
                setLanguage(null);
                navigate(item.path);
              }}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>);
}


export default Menu;
