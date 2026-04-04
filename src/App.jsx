import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import useTheme from './hooks/useTheme'
import './App.css'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <header className="site-header">
  <nav>
    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
    <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
    <a href="/media/EthanBishopResume2026.pdf" target="_blank" rel="noreferrer">Resume</a>
  </nav>
  <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
    {theme === 'light' ? '☽' : '☀'}
  </button>
</header>

      <main className="site-main">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Ethan Bishop. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App