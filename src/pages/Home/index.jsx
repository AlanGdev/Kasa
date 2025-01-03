import Header from '../../components/Header'
import styles from './Home.module.scss'
function Home(){
    return(
        <div className={styles.content}>
            <Header/>
            <div className={styles.content__body}>
                <ul className={styles.content__body__valeurs}>

                </ul>
            </div>
        </div>
    )
}
export default Home