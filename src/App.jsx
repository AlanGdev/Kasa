import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.app}>
            <Router>
                <AppRouter />
            </Router>
            <Footer />
        </div>
    )
}
export default App
