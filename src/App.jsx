import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleDark = () => setIsDark((prev) => !prev)

  return (
    <div>
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
