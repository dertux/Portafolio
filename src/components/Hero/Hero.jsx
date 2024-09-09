import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>&lt; Hola Soy Sebastián /&gt;</h1>
        <p className={styles.description}>
          Ingeniero informático con especialización en ciencia de datos. Poseo un gran interés en la Ciencia de Datos, la Inteligencia de Negocios y el Desarrollo Front-End. Mis capacidades técnicas y analíticas se complementan con una actitud proactiva, compromiso y cooperación en cada proyecto. No dudes en contactarme.
        </p>
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

        <li className={styles.cv}>
            <a href={getImageUrl("documents/CV_SebaHurtado.pdf")} download="CV_SebaHurtado.pdf">
              Descargar CV <img src={getImageUrl("hero/descargar.png")} alt="descargar" />
            </a>
          </li>

    </ul>
      </div>
      <img className={styles.logo} src={getImageUrl("hero/logo.png")} alt="seba-logo" />
      <div className={styles.topBlur}></div>
      <div className={styles.BottomBlur}></div>
    </section>
  );
};