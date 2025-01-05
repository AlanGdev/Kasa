import Header from '../../components/Header'
import styles from './Home.module.scss'
import Banner from '../../components/Banner'
function Home(){
    return(
        <div className={styles.page}>
            <Header/>
            <div className={styles.page__body}>
                <Banner/>
                <ul className={styles.page__body__valeurs}>

                </ul>
            </div>
        </div>
    )
}
export default Home