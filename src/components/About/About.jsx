import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';


export const About = () => {
  return <section className={styles.container} id='about'>
        <h2 className={styles.title}>Sobre mi</h2>

        <div className={styles.content}> 
            <img className={styles.aboutImage} src={getImageUrl("about/sebalogo.png")} alt="logo-seba" />
            <ul className={styles.aboutItems}>
            <h2 className={styles.subtitle}>Intereses</h2>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="imagen cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Ciencia de datos.</h3>
                        <p>análisis predictivo y toma de decisiones basada en datos. A través de modelos estadísticos, aprendizaje automático y visualización de datos, aplicando técnicas avanzadas para resolver problemas complejos y generar valor a partir de la información.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="imagen server" />
                    <div className={styles.aboutItemText}>
                        <h3>Desarrollo Front-End.</h3>
                        <p>Como desarrollador front-end, utilizo una variedad de tecnologías para crear interfaces de usuario dinámicas y funcionales. Mi enfoque está en desarrollar aplicaciones web intuitivas y eficientes, priorizando la experiencia del usuario y el rendimiento.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="imagen ui" />
                    <div className={styles.aboutItemText}>
                        <h3>Business Intelligence.</h3>
                        <p>Modelos estrella a partir de bases de datos, optimizando los procesos de extracción, transformación y carga (ETL). Utilizo herramientas como MySQL y Visual Studio para diseñar esquemas eficientes que facilitan la organización de la información. Realizando análisis profundos y visualizaciones a través de Power BI</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
}
