import React from 'react'
import styles from '../Styles/footer.module.css'
import gitlogo from '../images/github.png'
import linklogo from '../images/linkedin.png'


const Footer = () => {
  return (
    <div className={styles.rodape}>
        <h3 className={styles.icontitle}>NEED <span className={styles.icontitle2}>Weather</span></h3>
        <h3>Desenvolvido por Gabriel de Oliveira.</h3>
        <div className='icons'>
            <a href="https://github.com/Zokaaah/Need-Price"><img className={styles.icons} src={gitlogo} alt="" /></a>
            <a href="https://www.linkedin.com/in/gabriel-oliveira-silva-471b23194/"><img className={styles.icons} src={linklogo} alt="" /></a>

        </div>
    </div>
  )
}

export default Footer