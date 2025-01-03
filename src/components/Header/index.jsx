import styles from './Header.module.scss'
import Logo from '../Logo'
import picture from '../../assets/logoRed.png'
import Navbar from '../Navbar'
import PropTypes from 'prop-types'
function Header({active}){
    return(
    <header className={styles.header}>
        <Logo picture={picture}/>
        <Navbar active={active}/>
    </header>
    )
}
Header.PropTypes={
    active:PropTypes.string,
}
export default Header