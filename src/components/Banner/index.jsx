import styles from './Banner.module.scss'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import homePicture from '../../assets/homePicture.png'
import aProposPicture from '../../assets/aProposPicture.png'

function Banner({text}){
    const page=useLocation().pathname
    const opacityClassname=page==='/'?
    'banner__background--opacity60':
    page==='/Apropos' ?
    'banner__background--opacity30':
    ''
    const picture=page==='/' ? homePicture : aProposPicture
    return(
        <div className={styles.banner}>
            <img className={`${styles.banner__picture} `} src={picture} alt="banner picture" />
            <div className={`${styles.banner__background} ${styles[opacityClassname]}`}></div>
            <p className={styles.banner__text}>{text}</p>
        </div>

    )
}
Banner.propTypes={
    text: PropTypes.string
}
export default Banner