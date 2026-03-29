import './App.css'
import Hero from './components/homepage/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <header className='container mx-auto sora'>
        <Navbar></Navbar>
      </header>
      <main className='container mx-auto sora'>
        <Hero></Hero>
      </main>
    </>
  )
}

export default App
