import picture from '../../assets/logoWhite.png'
import styles from './Footer.module.scss'
function Footer(){
    return(
        <footer className={styles.footer}>
            <img className={styles.footer__img} src={picture}/>
            <p className={styles.footer__text}>
                C 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}
export default Footer