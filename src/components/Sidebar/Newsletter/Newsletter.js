// @flow
import React from 'react';
import styles from './Newsletter.module.scss';


export default () => {
  return (
    <div className={styles['container']}>
      <p>Inscreva-se na minha lista e te mandarei tudo o que escrevo em primeira mão no seu e-mail.</p>
      <form action="http://mailmkt.quickdesign.com.br/subscribe" method="POST" accept-charset="utf-8">
        <input type="text" name="name" id="name" className={styles['input']} placeholder="Nome" />
        <br />
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <br />
        <div style={{ display: 'none' }}>
          <label htmlFor="hp">HP</label><br />
          <input type="text" name="hp" id="hp" />
        </div>
        <input type="hidden" name="list" value="ayl76XRqodpZszyCyQBT3w" />
        <input type="hidden" name="subform" value="yes" />
        <input type="submit" name="submit" value="Confirmar" id="submit" className={styles['button']} />
      </form>
    </div>
  );
}