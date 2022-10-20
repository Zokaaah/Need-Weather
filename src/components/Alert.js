import React from 'react'
import styles from "./alert.module.css"
import alertIcon from "../images/alert.png"


const Alert = () => {
  return (
    <div className={styles.alertContainer}>

      <img className={styles.alertIcon} src={alertIcon} alt="" />
      <h5 className={styles.alertText}>Cidade não encontrada, verifique a ortografia e <strong>tente novamente</strong></h5>

    </div>
    )
}

export default Alert