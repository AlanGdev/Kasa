import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'

function App() {
  return (
    <>
      <Router>
      <Header/>
        <h1>App</h1>
        <AppRouter/>
      </Router>
      <Footer/>
    </>
  )
}
export default App
