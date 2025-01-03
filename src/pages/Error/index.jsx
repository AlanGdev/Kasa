import Header from '../../components/Header'
import styles from './Error.module.scss'
function Error(){
    return(
        <div className={styles.content}>
            <Header/>
            <p>Erreur 404 - Page non trouvée</p>
        </div>
    )
}
export default Error