import Header from '../../components/Header'
import styles from './Apropos.module.scss'
import Banner from '../../components/Banner'
function Apropos(){
    return(
        <div className={styles.content}>
            <Header/>
            <Banner/>
        </div>
    )
}
export default Apropos