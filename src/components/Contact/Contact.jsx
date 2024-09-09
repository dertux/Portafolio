import React from 'react'

import styles from './contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contactame</h2>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <a href="https://github.com/dertux">
                <img src={getImageUrl("contact/githubIcon.webp")} alt="Github" />
            </a>
        </li>

        <li className={styles.link}>
            <a href="https://www.linkedin.com/in/sebastian-hurtado-m/">
            <img src={getImageUrl("contact/linkedinIcon.webp")} alt="Linkedin"  />
            </a>
        </li>

    </ul>
    <p className={styles.rights}>© todos los derechos resevados. Sebastián Hurtado</p>
  </footer>;
}
