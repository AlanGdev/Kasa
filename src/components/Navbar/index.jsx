import styles from './Navbar.module.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Navbar({active}){
    return(
        <nav className={styles.navbar}>
            <Link to='/' className={styles.navbar__link}>Accueil</Link>
            <Link to='/Apropos' className={styles.navbar__link}>A Propos</Link>
            </nav>
    )
}
Navbar.PropTypes={
    active:PropTypes.string,
}
export default Navbar