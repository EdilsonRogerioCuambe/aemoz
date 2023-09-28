import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Home } from './pages/home'

const App = () => {
  return (
    <div className="h-screen mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
