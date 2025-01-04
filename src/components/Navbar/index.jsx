import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function Navbar(){
    const location=useLocation()
    console.log(location.pathname)
    return(
        <nav className={styles.navbar}>
            <Link to='/' className={`${styles.navbar__link} ${location.pathname==='/'?styles.navbar__linkUnderline:''} `}>
                Accueil
                </Link>
            <Link
             to='/Apropos' 
             className={`${styles.navbar__link} ${location.pathname==='/Apropos'?styles.navbar__linkUnderline:''}`}>
                A Propos
                </Link>
            </nav>
    )
}
export default Navbar