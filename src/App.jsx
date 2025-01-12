import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.app}>
            <Router className={styles.app__content}>
                <AppRouter />
            </Router>
            <Footer className={styles.app__footer} />
        </div>
    )
}
export default App
