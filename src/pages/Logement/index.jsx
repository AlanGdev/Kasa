import Header from '../../components/Header'
import styles from './Logement.module.scss'
function Logement(){
    return(
        <div className={styles.content}>
            <Header/>
            <p>Page Logement</p>
        </div>
    )
}
export default Logement