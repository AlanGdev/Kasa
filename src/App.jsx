import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Router>
        <AppRouter/>
      </Router>
      <Footer/>
    </div>
  )
}
export default App
