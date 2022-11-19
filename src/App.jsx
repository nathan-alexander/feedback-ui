import { Link, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import './App.css'

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

export default App
