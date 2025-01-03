import styles from './Logo.module.scss'
import PropTypes from 'prop-types'

function Logo({picture}){
    return(
        <img className={styles.logo} src={picture}/>
    )
}
Logo.PropTypes={
    picture:PropTypes.string,
}
export default Logo