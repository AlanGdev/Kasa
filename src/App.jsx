import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Router>
        <h1>App</h1>
      </Router>
      <Footer/>
    </>
  )
}
export default App
